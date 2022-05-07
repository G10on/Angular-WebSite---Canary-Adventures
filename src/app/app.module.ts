import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faBars, faLocationDot, faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from './pages/faq/faq.component';
import {RouterModule} from "@angular/router";
import { IslandComponent } from './pages/island/island.component';
import { WhattodoComponent } from './pages/whattodo/whattodo.component';
import { AboutComponent } from './pages/about/about.component';
import { environment } from "../environments/environment";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionsComponent } from './components/sections/sections.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { IntroTitleComponent } from './components/intro-title/intro-title.component';
import { BlockGalleryComponent } from './components/block-gallery/block-gallery.component';
import { RelatedEventComponent } from './components/related-event/related-event.component';
import { CategoryComponent } from './pages/category/category.component';
import { ColImg50txt50Component } from './components/col-img50txt50/col-img50txt50.component';
import { TitleContentComponent } from './components/title-content/title-content.component';
import { EventComponent } from './pages/event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    IslandComponent,
    WhattodoComponent,
    AboutComponent,
    LogoComponent,
    HomeComponent,
    SectionsComponent,
    ContactInformationComponent,
    NewsletterComponent,
    IntroTitleComponent,
    BlockGalleryComponent,
    RelatedEventComponent,
    CategoryComponent,
    ColImg50txt50Component,
    TitleContentComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faMagnifyingGlass, faBars, faLocationDot, faAt, faPhone);
    library.addIcons(faYoutube, faFacebook, faInstagram, faTwitter);
  }
}
