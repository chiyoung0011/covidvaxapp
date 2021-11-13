import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VaccineCenter } from './vaccinecenter';
@Injectable({
    providedIn: 'root'
})
export class VaccineCenterService {
    private apiServerUrl = 'http://localhost:8080';
    constructor(private http: HttpClient) {}
    public getAllVaccineCenters(): Observable<VaccineCenter[]> {
        return this.http.get<VaccineCenter[]>(`${this.apiServerUrl}/api/v1/vaccinecenters/`);
    }
    public getVaccineCenterbyId(idparam: number): Observable<VaccineCenter> {
        return this.http.get<VaccineCenter>(`${this.apiServerUrl}/api/v1/vaccinecenters/${idparam}`);
    }
    public getVaccineCentersbyCity(cityparam: string): Observable<VaccineCenter[]> {
        return this.http.get<VaccineCenter[]>(`${this.apiServerUrl}/api/v1/vaccinecenters/name/${cityparam}`);
    }
}