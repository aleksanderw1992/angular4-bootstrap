import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ConfigurationService} from "./pages/configuration-management-page/configuration.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private translateService: TranslateService,
              private configurationService: ConfigurationService) {
    translateService.setDefaultLang('en');
    translateService.use(configurationService.language);
  }
}
