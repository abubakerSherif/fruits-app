import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitComponent } from './fruit.component';
import { FruitRoutingModule } from './fruit-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    FruitComponent
  ],
  imports: [
    CommonModule, FruitRoutingModule, MatTableModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, MatGridListModule, MatCardModule, MatIconModule,
    MatButtonModule, MatDividerModule, MatProgressBarModule, MatDialogModule,
  ]
})
export class FruitModule { }
