import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountrieService {
  private ENDPOINT = 'https://restcountries.com/v3.1/all';
  constructor(
    private httpClient:HttpClient
  ) {}

  getCountries():Observable<unknown>{
    return this.httpClient.get<unknown>(this.ENDPOINT);
  }
}
