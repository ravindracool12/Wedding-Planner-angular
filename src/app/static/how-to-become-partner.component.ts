import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-how-to-become-partner',
  templateUrl: './how-to-become-partner.component.html',
  styleUrls: ['./how-to-become-partner.component.css']
})
export class HowToBecomePartnerComponent implements OnInit {
  public username: string;
  public mobile: string;
  public password: string;
  public error: string;

  constructor() { }

  ngOnInit() {
  }

}
