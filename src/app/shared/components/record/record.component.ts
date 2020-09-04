import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import { VOCABULARY } from 'src/app/data/vocabulary';
import { ToastService } from 'src/app/services/toast.service';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  @Input() duration: number;
  @Input() role: string;
  @Input() language: string;

  @Output() send: EventEmitter<string> = new EventEmitter<string>();
  @Output() exit: EventEmitter<void> = new EventEmitter<void>();

  public text: string = '';
  public width: number = 0;
  public seconds: number = 0;
  public isPaused: boolean = false;
  public intervalId: any;
  public canSend: boolean = false;
  public inProgress: boolean = false;

  constructor(private settingsService: SettingsService, private audioRecordingService: AudioRecordingService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.start();
  }

  start = async (): Promise<void> => {
    this.putTitle();
    this.record();
    this.recordBarLoad();
  }

  record = () => {
    this.audioRecordingService.language = this.language;
    this.audioRecordingService.start();
  }

  putTitle = () => {
    const language = this.role === Role.ADVISOR ? this.settingsService.defaultLanguage.audio : this.settingsService.user.value.language.audio;
    this.text = VOCABULARY.find((item) => item.isoCode === language).sentences.recordText;
  }

  private recordBarLoad = () => {
    const value: number = 100 / (this.duration * 10);
    let time: number = 0;
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.width = this.width + value;
        time += 100;
      }
      if (time === 1000) {
        this.seconds++;
        time = 0;
      }
      if (this.seconds > 3) {
        this.canSend = true;
      }
      if (this.width > 100) {
        this.width = 100;
      }

      if (this.width >= 100) {
        this.exitAudio();
      }
    }, 100);
  }

  pauseOrResume = () => {
    this.isPaused = !this.isPaused;
  }

  exitAudio = async () => {
    if (this.intervalId !== undefined) {
      this.stopRecord();
      this.exit.emit();
    }
  }

  retry = async (): Promise<void> => {
    if (this.intervalId !== undefined) {
      this.stopRecord();
    }
    this.width = 0;
    this.seconds = 0;
    this.start();
  }

  sendSpeech = async (): Promise<void> => {
    this.inProgress = true;
    if (this.intervalId !== undefined) {
      this.stopRecord();
      this.audioRecordingService.speechToText.subscribe(
        (response) => {
          this.inProgress = false;
          this.send.emit(response);
        },
        (err) => {
          this.inProgress = false;
          this.toastService.showToast('Transcription de la voix au texte est indisponible momentanément. Merci de réessayer plus tard.', 'toast-error');
          this.send.emit('');
        }
      );
    }
  }

  private stopRecord = () => {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
    this.audioRecordingService.stop(this.seconds);
  }
}
