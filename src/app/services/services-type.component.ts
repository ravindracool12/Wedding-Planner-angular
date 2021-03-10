import { Component, OnInit } from '@angular/core';
import { StaticContentService } from '../static-content.service';


@Component({
  selector: 'app-services-type',
  templateUrl: './services-type.component.html',
  styleUrls: ['./services-type.component.css']
})
export class ServicesTypeComponent implements OnInit {
	  servicelist: any = [];



  constructor(private staticcontent : StaticContentService) { }

  ngOnInit() {
  
  	this.getServices();
  }

  getServices() {
    this.servicelist = [];
    this.staticcontent.getPublicservice().subscribe((data: {}) => {
      this.servicelist = data;
    });
  }

}
