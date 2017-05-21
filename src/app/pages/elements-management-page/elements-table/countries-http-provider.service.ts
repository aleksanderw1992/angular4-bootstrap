import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class CountriesHttpProvider {
  countriesUrl = 'https://raw.githubusercontent.com/divyabiyani/Countries-Flag-API/master/Countries.json';
  countries: any;

  constructor(private http: Http) {
  }

  getCountries() {
    if (this.countries && this.countries.length) {
      return this.countries;
    }
    let observable = this.http.get(this.countriesUrl).map(res => <Country[]>res.json());
    observable.subscribe((e) => {
      this.countries = e.map((country) => {
          return {
            flag: country.flag,
             origName: country.name
          };
        }
      );
    })
    return this.countries;
  }
}

export interface Country {
  flag: string
  name: string
}
