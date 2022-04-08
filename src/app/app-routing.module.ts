import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listenerCount } from 'process';
import { ApiListComponent } from './api-list/api-list.component';
const routes: Routes = [
  {path: '', redirectTo: 'list',pathMatch: 'full' },
  {path: 'list', component: ApiListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
