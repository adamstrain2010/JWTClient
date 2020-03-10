import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from './../../../jwt.service';


@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

  @Input() token: string;
  @Output() bubbleError = new EventEmitter<string>();

  passwords = {
    resetCode: null,
    newPassword: null,
    newPasswordCheck: null
  }

  constructor(private jwt: JwtService, private router: Router) { }

  ngOnInit(): void {
  }

  tryResetPassword = () => {
    if(this.passwords.resetCode && this.passwords.newPassword && this.passwords.newPasswordCheck){
      if(this.passwords.newPassword == this.passwords.newPasswordCheck){
        this.jwt.resetPassword(this.token, this.passwords.newPassword, this.passwords.resetCode).subscribe((data:any) => {
          if(data.passwordResetResult){
            this.router.navigateByUrl('/login');
          }
        },
        (err: any) => {
          console.log(err);
          this.bubbleError.emit(err.error);
        })
      }
    }
  }
}
