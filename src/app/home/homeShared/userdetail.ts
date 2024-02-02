export class UserDetail{
    public EmpId:string;
    public EmpName: string;
    public BranchId:string;
    public BranchName:string;
    public CompanyId:string;
    public CompanyName:string;
    constructor(EmpId:string,EmpName: string,BranchId:string,BranchName:string,CompanyId:string,CompanyName:string){
        this.EmpId=EmpId;
        this.EmpName=EmpName;
        this.BranchId=BranchId;
        this.BranchName=BranchName;
        this.CompanyId=CompanyId;
        this.CompanyName=CompanyName;

    }
}