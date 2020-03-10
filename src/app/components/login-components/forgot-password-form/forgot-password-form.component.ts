import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserInfo } from './../../../user-info';
import { JwtService } from './../../../jwt.service';


@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {

  @Output() bubbleError = new EventEmitter<string>();
  @Output() bubbleMessage = new EventEmitter<string>();

  creds: UserInfo = {
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    password: null,
    createdDate: null
  }

  constructor(private jwt: JwtService) { }

  ngOnInit(): void {
  }

  requestResetPassword = () => {
    console.log(this.creds);
    if(this.creds.email != null){
      console.log("request password");
      this.jwt.requestPassword(this.creds.email).subscribe((data:any) => {
        this.bubbleMessage.emit("A reset link has been sent to the email address associated with your account. It will expire in 24 hours.");
      },
      (err: any) => {
        this.bubbleError.emit(err.error);
      })
    }
  }

}
