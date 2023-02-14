import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidbarComponent } from './Components/sidbar/sidbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListRhComponent } from './Components/list-rh/list-rh.component';
import { DetaillRhComponent } from './Components/detaill-rh/detaill-rh.component';
import { ListCandiComponent } from './Components/list-candi/list-candi.component';
import { AddcanComponent } from './Components/addcan/addcan.component';
import { AddRhComponent } from './Components/add-rh/add-rh.component';
import { DetaillCandComponent } from './Components/detaill-cand/detaill-cand.component';
import { OfferComponent } from './Components/offer/offer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AddCandidatureComponent } from './Components/add-candidature/add-candidature.component';
import { AfficheComponent } from './Components/affiche/affiche.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecherchePipe } from './pipes/recherche.pipe';
import { PageDeGardeComponent } from './Components/page-de-garde/page-de-garde.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcceuilComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SidbarComponent,
    FooterComponent,
    ListRhComponent,
    DetaillRhComponent,
    ListCandiComponent,
    AddcanComponent,
    AddRhComponent,
    DetaillCandComponent,
    OfferComponent,
    AddCandidatureComponent,
    AfficheComponent,
    RecherchePipe,
    PageDeGardeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
