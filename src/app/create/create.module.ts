import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CreateRoutingModule } from '@app/create/create-routing.module';
import { CreateComponent } from '@app/create/create.component';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    CreateRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CreateModule { }
