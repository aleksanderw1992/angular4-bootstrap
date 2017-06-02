import { Subject }    from 'rxjs/Subject';
import {Entity} from "../pages/elements-management-page/elements-domain/repository.service";

export class AppEventHolder{
    public _element = new Subject<string>();
    public element = this._element.asObservable();

    public _page = new Subject<string>();
    public page = this._page.asObservable();

  public _elementChanged = new Subject<Entity>();
  public elementChanged = this._elementChanged.asObservable();

    public publishElement(data: string) {
        this._element.next(data);
    }
    public publishPage(data: string) {
        this._page.next(data);
    }
    public publishElementChanged(data: Entity) {
        this._elementChanged.next(data);
    }

}
