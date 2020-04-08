import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarItem } from 'src/app/models/navbar-item';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { environment } from '../../../environments/environment';
import { Parser } from 'json2csv';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  public navBarItems: NavbarItem[] = [];
  public isAdmin: boolean = false;
  public path: string;

  constructor(public router: Router, private authService: AuthService, private fireFunction: AngularFireFunctions, private toastService: ToastService) {
    this.authService.auth.subscribe((auth) => {
      if (auth !== null) {
        this.isAdmin = auth.role === 'ADMIN';
      }
    });
    const url = this.router.url;
    this.path = url.substring(url.lastIndexOf('/'));
  }

  public export(): void {
    if (environment.name === 'local') {
      this.fireFunction.functions.useFunctionsEmulator(environment.firefunction.url);
    }
    this.fireFunction
      .httpsCallable('rates')({ login: environment.firefunction.login, password: environment.firefunction.password })
      .toPromise()
      .then((response) => {
        this.exportCsv(response);
      })
      .catch((err) => {
        this.toastService.showToast("Erreur lors de l'export du fichier", 'toast-error');
        throw new Error('An error occurred when export csv file');
      });
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  private exportCsv(rates) {
    const json2csvParser = new Parser();
    const data = json2csvParser.parse(rates);
    const blob = new Blob([data], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'petraduction.csv');
    document.body.append(a);
    a.click();
    document.body.removeChild(a);
  }

  onItemChange(value) {}
}
