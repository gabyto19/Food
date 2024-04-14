import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildupComponent } from './buildup/buildup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'buildup', component: BuildupComponent },
  { path: 'contact', component: ContactComponent},
  {path: 'sign-in', component: SignInComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
