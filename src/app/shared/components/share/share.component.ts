import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { SettingsService } from 'src/app/services/settings.service';
import { ChatService } from 'src/app/services/chat.service';
import shortId from 'shortid'

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {

  public link:string
  public canCreate:boolean= false

  private roomId:string

  constructor(private dialogRef: MatDialogRef<ShareComponent>, public router: Router, private cs: ChatService,
    private ss: SettingsService) {}

  ngOnInit(): void {
    this.ss.getTarget().subscribe((target) => {
      if(target.roomId ===''){
        this.canCreate= true
        this.roomId = shortId.generate()
        this.link = window.location.origin + "/invite/" + this.roomId;
      }else{
        this.link = window.location.origin + "/invite/" + target.roomId;
      }
    });
  }

  public share() {
    this.ss.guest.next({ ...this.ss.guest.value, roomId: this.roomId });
    this.cs.create(this.roomId).then(_ => this.dialogRef.close())
  }

  public cancel() {
    this.dialogRef.close();
  }
}
