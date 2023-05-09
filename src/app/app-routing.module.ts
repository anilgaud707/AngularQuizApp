import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path:'welcome', component:WelcomeComponent},
  {path:'questions', component:QuestionsComponent},
  {path:'', redirectTo:'welcome', pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
