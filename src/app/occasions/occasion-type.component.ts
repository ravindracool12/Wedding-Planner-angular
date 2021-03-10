import { Component, OnInit } from '@angular/core';
import { StaticContentService } from '../static-content.service';

@Component({
  selector: 'app-occasion-type',
  templateUrl: './occasion-type.component.html',
  styleUrls: ['./occasion-type.component.css']
})
export class OccasionTypeComponent implements OnInit {
	  occasionlist: any = [];



  constructor(private staticcontent : StaticContentService) { }

  ngOnInit() {
  	// getPublicOccasion
  	this.getOccasions();
// console.log(this.occasionlist)

  }

  getOccasions() {
    this.occasionlist = [];
    this.staticcontent.getPublicOccasion().subscribe((data: {}) => {
      this.occasionlist = data;
    });
  }

}
