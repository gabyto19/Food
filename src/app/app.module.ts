import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BuildupComponent } from './buildup/buildup.component';
import { CardComponent } from './buildup/card/card.component';
import { CategoryDivComponent } from './buildup/category-div/category-div.component';
import { CapacityComponent } from './buildup/capacity/capacity.component';
import { NoteComponent } from './buildup/note/note.component';
import { PlateComponent } from './buildup/plate/plate.component';
import { UnderCategoryComponent } from './buildup/under-category/under-category.component';
import { ProductsOfCategoryComponent } from './buildup/products-of-category/products-of-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    BuildupComponent,
    CardComponent,
    CategoryDivComponent,
    CapacityComponent,
    NoteComponent,
    PlateComponent,
    UnderCategoryComponent,
    ProductsOfCategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
