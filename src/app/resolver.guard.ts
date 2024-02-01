
import { inject } from "@angular/core"

import {  Router } from "@angular/router"
import { HomeDataService } from "./home/homeShared/home-data.service";

 
export const Resolver = ()=>{
 

    const rt = inject(Router);
    const rv =inject(HomeDataService);


    return rv.getallemployee();
  
} 

export const Resolver2 = ()=>{
 

    const rt = inject(Router);
    const rv =inject(HomeDataService);


    return rv.getallcompany();
  
} 


export const Resolver3 = ()=>{
 

    const rt = inject(Router);
    const rv =inject(HomeDataService);


    return rv.getallbranch();
  
} 

