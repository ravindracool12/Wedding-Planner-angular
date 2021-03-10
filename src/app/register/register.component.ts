import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	public username: string;
  public name: string;
  public email: string;
  public mobile: string;
  public password: string;
  public error: string;

  constructor(private auth: AuthService, private router: Router) { }

  public submit() {
    this.auth.register(this.password, this.email, this.mobile, this.name)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['portfolios']),
        err => this.error = 'Could not authenticate'
      );
  }

  

}
