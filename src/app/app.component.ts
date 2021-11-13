import { Component, OnInit } from '@angular/core';
import { VaccineCenter } from './vaccinecenter';
import { VaccineCenterService } from './vaccinecenter.service';
import { HttpErrorResponse } from '@angular/common/http/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covidvaxapp';
  public vaccinecenters: VaccineCenter[];
  constructor(private vaccinecenterService: VaccineCenterService) {
  }
  ngOnInit() {
    this.getAllVaccineCenters();
  }
  public getAllVaccineCenters() : void {
    this.vaccinecenterService.getAllVaccineCenters().subscribe(
      (response: VaccineCenter[]) => {
        this.vaccinecenters = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public searchVaccineCenters(key: string): void {
    console.log(key);
    if (key=='') {
      this.getAllVaccineCenters();
    } else {
      this.vaccinecenterService.getVaccineCentersbyCity(key).subscribe(
        (response: VaccineCenter[]) => {
          this.vaccinecenters = response;
        },
        (error: HttpErrorResponse) => {
        }
      )
    }
  }
}
