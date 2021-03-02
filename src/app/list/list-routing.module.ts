import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from '@app/list/list.component';
import { ListGuard } from '@app/list/list.guard';

const routes: Routes = [{ path: '', canActivate: [ListGuard], component: ListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {}
