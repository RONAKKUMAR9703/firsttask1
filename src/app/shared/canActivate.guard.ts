
import { inject } from "@angular/core"
import { LoginService } from "./login.service"
import { Router } from "@angular/router"

export const CanActivate = () => {

    const ls = inject(LoginService)
    const rt = inject(Router);

    if (ls.authentication() == '"Authkey"') {
        return true;
    }
    else {
        rt.navigate(['signUp'])
        return false;
    }
}