import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  @ViewChild('alert', {static: true}) alert: ElementRef;

  userToken:string = null;
  alertText:string = null;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userToken = this.activeRoute.snapshot.params["resetGUID"];
    console.log(this.userToken);
  }

  handleError = (error: string) => {
    this.closeAlert();
    this.alertText = error; 
    this.openAlert();
  }

  openAlert = () => {
    this.alert.nativeElement.classList.add('show');
  }

  closeAlert = () => {
    this.alert.nativeElement.classList.remove('show');
  }
}
