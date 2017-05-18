import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from './configuration.service'

@Component({
  selector: 'app-configuration-management-page',
  templateUrl: './configuration-management-page.component.html',
  styleUrls: ['./configuration-management-page.component.scss']
})
export class ConfigurationManagementPageComponent implements OnInit {

  maxTimeInMilis:number =10*1000;
  language:string='pl';
  constructor(private configurationService:ConfigurationService) { }

  ngOnInit() {
  }
  onUpdateConfig(){
    this.configurationService.update(this.maxTimeInMilis, this.language);
  }
}
