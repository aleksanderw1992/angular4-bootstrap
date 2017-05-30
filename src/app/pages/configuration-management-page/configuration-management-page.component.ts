import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from './configuration.service'

@Component({
  selector: 'app-configuration-management-page',
  templateUrl: './configuration-management-page.component.html',
  styleUrls: ['./configuration-management-page.component.scss']
})
export class ConfigurationManagementPageComponent implements OnInit {

  maxTimeInMilis:number;
  language:string;
  constructor(private configurationService:ConfigurationService) { }

  ngOnInit() {
    this.maxTimeInMilis= this.configurationService.maxTimeInMilis;
    this.language= this.configurationService.language;
  }
  onUpdateConfig(){
    this.configurationService.update(this.maxTimeInMilis, this.language);
  }
}
