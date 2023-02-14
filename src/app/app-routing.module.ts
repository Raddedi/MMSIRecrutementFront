import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';
import { AddCandidatureComponent } from './Components/add-candidature/add-candidature.component';
import { AddRhComponent } from './Components/add-rh/add-rh.component';
import { AddcanComponent } from './Components/addcan/addcan.component';
import { AfficheComponent } from './Components/affiche/affiche.component';
import { DetaillCandComponent } from './Components/detaill-cand/detaill-cand.component';
import { DetaillRhComponent } from './Components/detaill-rh/detaill-rh.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ListCandiComponent } from './Components/list-candi/list-candi.component';
import { ListRhComponent } from './Components/list-rh/list-rh.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { OfferComponent } from './Components/offer/offer.component';
import { PageDeGardeComponent } from './Components/page-de-garde/page-de-garde.component';
import { RegisterComponent } from './Components/register/register.component';
import { SidbarComponent } from './Components/sidbar/sidbar.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,children:[
    {path:"acc",component:AcceuilComponent},
    {path:"footer",component:FooterComponent},
    {path:"sidbar",component:SidbarComponent},
    {path:"navbar",component:NavbarComponent},
    {path:"RHList",component:ListRhComponent},
    {path:"detaillRh/:id",component:DetaillRhComponent},
    {path:"addRh",component:AddRhComponent},
    {path:"addcand",component:AddcanComponent},
    {path:"candList",component:ListCandiComponent},
    {path:"detaillCand/:id",component:DetaillCandComponent},
    {path:"off",component:OfferComponent},
    {path:"candidature",component:AddCandidatureComponent},
    {path:"aff",component:AfficheComponent}
    

  ]},
  {path:"login",component:LoginComponent},
  {path:"reg",component:RegisterComponent},
  {path:"",component:PageDeGardeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
