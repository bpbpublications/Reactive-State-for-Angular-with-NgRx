import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'create', loadChildren: () => import('@app/create/create.module').then(m => m.CreateModule) },
  { path: 'list', loadChildren: () => import('@app/list/list.module').then(m => m.ListModule) },
  { path: 'edit/:bookmarkId', loadChildren: () => import('@app/edit/edit.module').then(m => m.EditModule) },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
