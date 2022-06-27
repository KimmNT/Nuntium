import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'post', component: NewsDetailComponent},
  {path: 'post/:id', component: NewsDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
