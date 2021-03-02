import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { EditRoutingModule } from '@app/edit/edit-routing.module';
import { EditComponent } from '@app/edit/edit.component';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class EditModule { }
