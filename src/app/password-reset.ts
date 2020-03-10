export interface PasswordReset {
    token: string;
    code: string;
    newPassword: string;
}
