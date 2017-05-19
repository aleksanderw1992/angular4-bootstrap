import { Subject }    from 'rxjs/Subject';
export class AppEventHolder{
    public _element = new Subject<string>();
    public event = this._element.asObservable();

    public publishElement(data: string) {
        this._element.next(data);
    }
}