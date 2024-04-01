import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildupComponent } from './buildup/buildup.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'buildup', component: BuildupComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
