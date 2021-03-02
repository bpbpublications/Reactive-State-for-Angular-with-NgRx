import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from '@app/edit/edit.component';
import { EditGuard } from '@app/edit/edit.guard';

const routes: Routes = [{ path: '', canActivate: [EditGuard], component: EditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
