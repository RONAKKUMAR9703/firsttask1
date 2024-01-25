export class SignUpData{
    public UserName:string;
    public pass:string;
    public cfpass:string;
    public role:string;
    constructor(UserName:string, pass:string,cfpass:string,role:string)
    {
        this.UserName=UserName;
        this.pass=pass;
        this.cfpass=cfpass;
        this.role=role;
    }
}