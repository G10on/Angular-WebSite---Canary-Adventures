import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaqComponent} from "./pages/faq/faq.component";
import {WhattodoComponent} from "./pages/whattodo/whattodo.component";
import {IslandComponent} from "./pages/island/island.component";
import {AboutComponent} from "./pages/about/about.component";
import {HomeComponent} from "./pages/home/home.component";
import {NewsletterComponent} from "./components/newsletter/newsletter.component";
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'whattodo', component: WhattodoComponent },
  { path: 'island', component: IslandComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent},
  { path: 'newsletter', component: NewsletterComponent},
  { path: 'ScubaDive', component: CategoryComponent},
  { path: 'Paragliding', component: CategoryComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
