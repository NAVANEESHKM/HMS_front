import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';



const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': ''
    })
};

const httpPingOptions: Object = {
    headers: new HttpHeaders().append('Content-Type', 'text/plain; charset=utf-8'),
    responseType: 'text'
}

@Injectable({
    providedIn: 'root'
})
export class AppService {
    product: any

    baseurl = "http://localhost:4000"
    // baseurl = "/uploadPortal"
    // baseurl = ""

    visibility: boolean = false
    token: any;
    constructor(private http: HttpClient, private router: Router, private zone: NgZone) {
        this.visibility = false
        // this.token = localStorage.getItem('idToken')?.toString()
    }
    async DoctorGet(obj: any, path: any): Promise<any> {
        let res = await this.http.get<any>(this.baseurl + path, obj);
        return res.toPromise()
    }
    async DoctorInfo(obj: any, path: any): Promise<any> {
        let res = await this.http.post<any>(this.baseurl + path, obj);
        return res.toPromise()
    }
    async GetPatient(obj: any, path: any): Promise<any> {
        let res = await this.http.post<any>(this.baseurl + path, obj);
        return res.toPromise()
    }
    async DoctorLogin(obj: any, path: any): Promise<any> {
        let res = await this.http.post<any>(this.baseurl + path, obj);
        return res.toPromise()
    }
    async DoctorClient(obj: any, path: any): Promise<any> {
        let res = await this.http.post<any>(this.baseurl + path, obj);
        return res.toPromise()
    }
    async PatientList(obj: any, path: any): Promise<any> {
        let res = await this.http.get<any>(this.baseurl + path, obj);
        return res.toPromise()
    }
    async PostMedicine(obj: any, path: any): Promise<any> {
        let res = await this.http.post<any>(this.baseurl + path, obj);
        return res.toPromise()
    }
    async GetMedicine(obj: any, path: any): Promise<any> {
        let res = await this.http.get<any>(this.baseurl + path, obj);
        return res.toPromise()
    }
    async Sendmail(obj: any, path: any): Promise<any> {
        let res = await this.http.post<any>(this.baseurl + path, obj);
        return res.toPromise()
    }
    async AddPrescription(obj: any, path: any): Promise<any> {
        let res = await this.http.post<any>(this.baseurl + path, obj);
        return res.toPromise()
    }

    clearLocalStorage() {
        var arr: any = [];
        for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i)?.startsWith('')) {
                arr.push(localStorage.key(i));
            }
        }

        for (var i = 0; i < arr.length; i++) {
            localStorage.removeItem(arr[i]);
        }
    }

}