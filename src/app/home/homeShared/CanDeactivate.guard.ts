
import { inject } from "@angular/core"

import { Router } from "@angular/router"
import { HomeDataService } from "./home-data.service"

export const CanDeactivate = () => {

    const ls = inject(HomeDataService)
    const rt = inject(Router);

    if (ls.authentication() == '"Authkey"') {
        rt.navigate(['home'])
        return false;
    }
    else {

        return true;
    }
} 