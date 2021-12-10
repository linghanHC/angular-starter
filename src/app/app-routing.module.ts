import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { Parent1Component } from './lifecycledemo1/parent1/parent1.component';
import { Parent2Component } from './lifecycledemo2/parent2/parent2.component';
import { SimpleformComponent } from './simpleform/simpleform.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'lifecycledemo1', component: Parent1Component },
  { path: 'lifecycledemo2', component:  Parent2Component},
  { path: 'form', component: SimpleformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
