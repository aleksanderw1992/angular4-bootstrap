import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class CountriesHttpProvider {
  countriesUrl = 'https://raw.githubusercontent.com/divyabiyani/Countries-Flag-API/master/Countries.json';
  countries: any;

  constructor(private http: Http) {
    this.initCountries();
  }

  getCountries() {
    if (this.countries && this.countries.length) {
      return this.countries;
    }
    this.initCountries();

    return this.countries;
  }

  private initCountries() {
    let observable = this.http.get(this.countriesUrl).map(res => <Country[]>res.json());
    observable.subscribe((e) => {
      this.countries = e.map((country) => {
          return {
            flag: country.flag,
            origName: country.name
          };
        }
      );
    });
  }
}

export interface Country {
  flag: string
  name: string
}
