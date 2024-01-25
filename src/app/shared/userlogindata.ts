export class UserLoginData {
  public UserName: string;
  public pass: string;
  public role: string;

  constructor(UserName: string, pass: string, role: string){
      this.UserName=UserName;
      this.pass=pass;
      this.role=role;
  }
}