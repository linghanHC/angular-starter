import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SimpleformComponent } from './simpleform/simpleform.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'form', component: SimpleformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
