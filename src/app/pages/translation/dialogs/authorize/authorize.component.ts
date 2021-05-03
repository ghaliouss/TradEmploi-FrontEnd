import { Role } from 'src/app/models/role';
import { SettingsService } from 'src/app/services/settings.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss'],
})
export class AuthorizeComponent implements OnInit {
  public name:string;
  public link: string;
  public canCreate: boolean = false;
  public qrCode: string;

  private roomId: string;

  constructor(
    private dialogRef: MatDialogRef<AuthorizeComponent>,
    public router: Router,
    private chatService: ChatService,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.name ="test"
    this.settingsService.user.subscribe((user) => {
      if (user != null && !user.isMultiDevices) {
        this.canCreate = true;
        this.roomId = user.roomId;
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

  public share() {
    this.initChat();
    this.userOnLocalStorage();
    this.dialogRef.close();
  }

  public cancel() {
    this.dialogRef.close();
  }

  private initChat(){
    const advisorRole: Role = this.settingsService.user.value.role;
    (this.chatService.messagesStored.length > 0) ?
      this.initChatMonoMulti(advisorRole) :
      this.chatService.initChatMulti(this.roomId, advisorRole);
  }

  private initChatMonoMulti(advisorRole: Role){
    this.chatService.initChatMonoMulti(this.roomId, advisorRole);
  }

  private userOnLocalStorage(){
    this.settingsService.user.next({
      ...this.settingsService.user.value,
      language: { audio: this.settingsService.defaultLanguage.audio, written: this.settingsService.defaultLanguage.written, languageName: this.settingsService.defaultLanguage.languageName },
      roomId: this.roomId,
      isMultiDevices: true
    });
    const user = JSON.parse(localStorage.getItem('user'));
    user.language = { audio: this.settingsService.defaultLanguage.audio, written: this.settingsService.defaultLanguage.written };
    user.roomId = this.roomId;
    user.isMultiDevices = true;
    localStorage.setItem('user', JSON.stringify(user));
  }
}
