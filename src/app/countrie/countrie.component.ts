import { Component, OnInit } from '@angular/core';
import { CountrieService } from './countrie.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-countrie',
  templateUrl: './countrie.component.html',
  styleUrls: ['./countrie.component.scss'],
})
export class CountrieComponent implements OnInit {
  private ENDPOINT = 'https://restcountries.com/v3.1/all';
  countries$:Observable<any[]> | undefined;
  constructor(
    private countrieService: CountrieService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.countries$ = this.getCountries()
  }

  getCountries(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.ENDPOINT)
  }
}
