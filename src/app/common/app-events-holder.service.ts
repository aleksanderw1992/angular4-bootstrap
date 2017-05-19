import { Subject }    from 'rxjs/Subject';
export class AppEventHolder{
    public _element = new Subject<string>();
    public element = this._element.asObservable();

    public _page = new Subject<string>();
    public page = this._page.asObservable();

    public publishElement(data: string) {
        this._element.next(data);
    }
    public publishPage(data: string) {
        this._page.next(data);
    }
}