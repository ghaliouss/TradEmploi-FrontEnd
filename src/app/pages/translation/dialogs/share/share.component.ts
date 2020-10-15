import { SettingsService } from 'src/app/services/settings.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  public link: string;
  public canCreate: boolean = false;
  public qrCode: string;

  private roomId: string;

  constructor(private dialogRef: MatDialogRef<ShareComponent>, public router: Router, private chatService: ChatService, private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.user.subscribe((user) => {
      if (user != null && user.roomId === undefined) {
        this.canCreate = true;
        this.roomId = (10000000 + Math.floor(Math.random() * 10000000)).toString();
        this.link = window.location.origin + '/invite/' + this.roomId;
      } else {
        this.link = window.location.origin + '/invite/' + user.roomId;
      }
      this.qrCode = this.link;
    });
  }

  public copyLink() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.link;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  public confirm() {
    this.dialogRef.close();
  }
  public share() {
    this.settingsService.user.next({
      ...this.settingsService.user.value,
      language: { audio: this.settingsService.defaultLanguage.audio, written: this.settingsService.defaultLanguage.written },
      roomId: this.roomId,
    });
    const user = JSON.parse(localStorage.getItem('user'));
    user.language = { audio: this.settingsService.defaultLanguage.audio, written: this.settingsService.defaultLanguage.written };
    user.roomId = this.roomId;
    localStorage.setItem('user', JSON.stringify(user));
    this.chatService.create(this.roomId).then((_) => this.dialogRef.close());
  }

  public cancel() {
    this.dialogRef.close();
  }
}
