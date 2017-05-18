export class ConfigurationService{
  private _maxTimeInMilis:number =10*1000;
  private _language:string='pl';

  update(maxTimeInMilis, language){
    this._maxTimeInMilis=maxTimeInMilis;
    this._language=language;
  }

  public get maxTimeInMilis():number {
    return this._maxTimeInMilis;
  }

  public get language():string {
    return this._language;
  }
}