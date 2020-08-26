import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordComponent } from './record.component';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import { By } from '@angular/platform-browser';

describe('RecordComponent', () => {
  let component: RecordComponent;
  let fixture: ComponentFixture<RecordComponent>;
  const audioRecordingService: AudioRecordingService = new AudioRecordingService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecordComponent],
      providers: [AudioRecordingService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordComponent);
    component = fixture.componentInstance;
    component.duration = 5;
    component.user = 'advisor';
    fixture.detectChanges();
  });

  it('text property should equal to Parlez maintenant', async () => {
    expect(component.text).toEqual('Parlez maintenant');
  });

  it('should display Parlez maintenant in HTML', async () => {
    expect(fixture.nativeElement.querySelector('p').textContent).toEqual('Parlez maintenant');
  });

  it('should start with bar 0%', async () => {
    const bar = fixture.debugElement.query(By.css('.bar'));
    expect(bar.styles.cssText).toEqual('width: 0%;');
  });

  it('should pause on pauseOrResume', () => {
    component.pauseOrResume();
    expect(component.isPaused).toEqual(true);
  });

  it('text property should equal to Parlez maintenant', async () => {
    expect(component.text).toEqual('Parlez maintenant');
  });

  it('should display Parlez maintenant in HTML', async () => {
    expect(fixture.nativeElement.querySelector('p').textContent).toEqual('Parlez maintenant');
  });

  it('should resume on pauseOrResume', () => {
    component.isPaused = true;
    fixture.detectChanges();
    component.pauseOrResume();
    expect(component.isPaused).toEqual(false);
  });

  it('should emit exit on exitAudio', async done => {
    component.intervalId = undefined;
    component.exit.subscribe(value => {
      expect(value).toEqual(undefined);
      done();
    });
    component.exitAudio();
  });

  xit('should emit send true on timeOut', async done => {
    component.intervalId = undefined;
    component.exit.subscribe(value => {
      expect(value).toEqual(false);
      done();
    });
    component.sendSpeech();
  });
});