import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { SettingsService } from 'src/app/services/settings.service';
import { environment } from 'src/environments/environment';
import { TelemetryService } from '../../services/telemetry.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})
export class CallbackComponent implements OnInit {
  constructor(private authService: AuthService, private settingsService: SettingsService, private router: Router, private chatService: ChatService, private telemetryService: TelemetryService ) {
  }

  async ngOnInit(): Promise<void> {
    const accessToken = this.getAccessToken(window.location.href);
    const user = await this.authService.getUserInfos(accessToken);
    try {
      if (user.email.match('.*@pole-emploi[.]fr$')) {
        this.loginAuthentificated(user.email, user.given_name, user.family_name, user.sub);
        sessionStorage.setItem("access", accessToken)
      }
    } catch (error) {
      this.router.navigateByUrl('/start');
    }
  }

  public getAccessToken(url: string) {
    return url ? url.split('access_token')[1].split('=')[1].split('&')[0] : null;
  }

  private async loginAuthentificated(email: string, firstname: string, lastname: string, idDGASI: string) {
    try {
      await this.authService.login(environment.peama.login, environment.peama.password, email);
      this.telemetryService.logPeama(idDGASI);
      const roomId = this.chatService.getRoomId();
      localStorage.setItem('isLogged', 'true');
      this.settingsService.user.next({
        ...this.settingsService.user.value,
        role: this.authService.getRole(email),
        firstname,
        lastname,
        email,
        idDGASI,
        agency: '',
        connectionTime: Date.now(),
        roomId,
        isMultiDevices: false,
      });
      localStorage.setItem('user', JSON.stringify(this.settingsService.user.value));
      this.router.navigateByUrl('choice');
    } catch (error) {
    }
  }
}
