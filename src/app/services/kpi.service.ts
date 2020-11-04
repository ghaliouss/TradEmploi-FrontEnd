import axios from 'axios';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ToastService } from 'src/app/services/toast.service';
import { ErrorCodes } from '../models/errorCodes';
import { TokenService } from './token.service';
import { SettingsService } from './settings.service';

@Injectable({
    providedIn: 'root'
})
export class KpiService {

    constructor(private toastService: ToastService, private tokenService: TokenService, private settingsService: SettingsService) { }

    public async create(roomId: String) {
        if(roomId){
            const key = this.settingsService.token ? this.settingsService.token : await this.tokenService.getKey()
            const url = environment.firefunction.url
            const data = {
                query: `
                    mutation kpi {
                    kpi(roomId: "`+ roomId + `")
                    }`
            }
            return new Promise(async (resolve, reject) => {
                axios({
                    method: 'post',
                    headers: { 'Authorization': key },
                    data,
                    url
                }).then((_) => {
                    resolve()
                }).catch((err) => {
                    this.toastService.showToast(ErrorCodes.DBERROR, 'toast-error');
                    reject(err)
                })
            })
        }
    }

    public async getkpi() {
        const key = await this.tokenService.getKey()
        const url = environment.firefunction.url
        const data = {
            query: `
            query Kpi {
                kpi {
                    conversation{
                        day, 
                        begin, 
                        end, 
                        duration
                        languages
                        nbUsers,
                        translationMode
                    }
                    device{
                        support
                        guest
                        advisor
                    }
                }
            }`
        }
        return new Promise(async (resolve, reject) => {
            axios({
                method: 'post',
                headers: { 'Authorization': key },
                data,
                url
            }).then((response) => {
                const data = response.data.data.kpi
                let kpi = []
                data.forEach(element => {
                    kpi.push({
                        "Date conversation": element.conversation.day,
                        "Durée conversation": element.conversation.duration,
                        "Heure début conversation": element.conversation.begin,
                        "Heure fin conversation": element.conversation.end,
                        "Nb utilisateurs" : element.conversation.nbUsers,
                        "Langue(s)": element.conversation.languages,
                        "Mode traduction": element.conversation.translationMode,
                        "Support traduction": element.device.support,
                        "Conseiller : Device": element.device.advisor,
                        "DE(s) : Device": element.device.guest
                    });
                });
                resolve(kpi)
            }).catch((err) => {
                this.toastService.showToast(ErrorCodes.KPICALLERROR, 'toast-error');
                reject(err)
            })
        })
    }


}