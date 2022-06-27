import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { CommonModule } from '@angular/common';
import { TestApiComponent } from './components/test-api/test-api.component';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { SideWidgetsComponent } from './components/side-widgets/side-widgets.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NewsDetailComponent,
    TestApiComponent,
    SideWidgetsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
