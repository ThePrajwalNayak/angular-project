import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ScriptComponent } from './script/script.component';

const routes: Routes = [
  { path: '', redirectTo: 'script', pathMatch: 'full'},
  { path:  'home', component:  HomeComponent},
  { path: 'about', component : AboutComponent},
  { path: 'script', component : ScriptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
