import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { ListRoutingModule } from '@app/list/list-routing.module';
import { ListComponent } from '@app/list/list.component';
import { FuzzyPipe } from '@app/shared/pipes/fuzzy/fuzzy.pipe';

@NgModule({
  declarations: [ListComponent, FuzzyPipe],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatListModule,
    MatIconModule
  ]
})
export class ListModule { }
