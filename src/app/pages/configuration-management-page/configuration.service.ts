import {TranslateService} from "@ngx-translate/core";
import {Injectable} from "@angular/core";

@Injectable()
export class ConfigurationService{
  private _maxTimeInMilis:number ;
  private _language:string;

  constructor(private translateService: TranslateService){
    this._maxTimeInMilis= localStorage._maxTimeInMilis ||10*1000
    this._language= localStorage._language ||'pl'
  }

  update(maxTimeInMilis, language){
    this._maxTimeInMilis=maxTimeInMilis;
    this._language=language;

    localStorage._maxTimeInMilis= this._maxTimeInMilis
    localStorage._language= this._language

    this.translateService.use(this._language);
  }

  public get maxTimeInMilis():number {
    return this._maxTimeInMilis;
  }

  public get language():string {
    return this._language;
  }
}
