import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './comps/landing/landing.component';
import { CategoriesComponent } from './comps/categories/categories.component';
import { InfoComponent } from './comps/info/info.component';
import { NavComponent } from './comps/nav/nav.component';
import { FeedComponent } from './comps/feed/feed.component';
import { ProductsComponent } from './comps/products/products.component';
import { LoginComponent } from './comps/nav/login/login.component';
import { RegisterComponent } from './comps/nav/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CategoriesComponent,
    InfoComponent,
    NavComponent,
    FeedComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
