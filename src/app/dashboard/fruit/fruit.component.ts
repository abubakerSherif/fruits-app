import { Component, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Nutritions } from "../../models/nutritions.model";
import { Fruit } from "../../models/fruit.model";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
import { CommonModule } from '@angular/common';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent {
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  isLoading = false;
  displayedColumns: string[] = ['Name', 'Protein', 'Carbs', 'Fat', 'Calories', 'checkbox'];
  checked: any;
  checkIds: number[] = [];
  matVersion: string = '5.1.0';
  dataSource!: MatTableDataSource<Fruit>;
  responseTwo!: string;
  constructor(private usersService: UsersService, public dialog: MatDialog) {
  }
  async ngOnInit() {
    this.isLoading = true;
    let response = await this.usersService.getData();
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.sort = this.sort;
    this.isLoading = false;
  }

  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '80%'
    });
  }



  saveAll() {
    if (this.checkIds.length < 1) {
      this.responseTwo = 'Please select some fruit'
    } else {
      let filteredArray = this.dataSource.data.filter((obj: any) => this.checkIds.includes(obj.id));
      let extractedAttributes = filteredArray.map((obj: any) => ({
        name: obj.name,
        fat: obj.nutritions.fat,
        fruityvice: obj.nutritions.fruityvice,
        fruit: obj.nutritions.fruit,
        calories: obj.nutritions.calories,
        carbohydrates: obj.nutritions.carbohydrates,
        protein: obj.nutritions.protein,
      }));
      localStorage.setItem('data', JSON.stringify(extractedAttributes));
      this.responseTwo = 'Fruits added to the local storage'
    }
  }

  getId(id: number, event: any) {
    this.responseTwo = ''
    if (event.target.checked) {
      this.checkIds.push(id);
    } else {
      this.checkIds = this.checkIds.filter(i => i !== id);
    }
  };

}

// Create an Angular component that will display a table of all the fruit data given from the FruityVice API (https://www.fruityvice.com/api/fruit/all). 
// The following columns need to be displayed on the table:
// Name
// Fruityvice Id
// Protein
// Carbs
// Fat
// Calories

// Add a button at the top of the page titled "Select Fruit"
// Add a checkbox to all the rows,

// When "Select Fruit" button is clicked, save all of the rows into the local storage as JSON.

// Save the following fields:
// Fruityvice Id
// Fruit Name
// Calories
// Fat
// Carbohydrates
// Protein

// Add a form below the table, that allows additional fruits to be added to the Fruity Vice API


@Component({
  selector: 'create-fruit-dialog',
  templateUrl: 'create-fruit-dialog.html',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, MatGridListModule, MatCardModule, MatIconModule,
    MatButtonModule, MatDividerModule, MatProgressBarModule, MatDialogModule, MatButtonModule],
})
export class DialogAnimationsExampleDialog {
  private readonly formGroup: FormGroup;
  breakpoint!: number;

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private formBuilder: FormBuilder, private usersService: UsersService) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      family: ['', Validators.required],
      order: ['', Validators.required],
      genus: ['', Validators.required],
      nutritions: new FormGroup({
        calories: new FormControl('', { validators: [Validators.max(100)] }),
        fat: new FormControl('', { validators: [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{0,1})?$')] }),
        sugar: new FormControl('', { validators: [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{0,1})?$')] }),
        carbohydrates: new FormControl('', { validators: [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{0,1})?$')] }),
        protein: new FormControl('', { validators: [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{0,1})?$')] })
      }),
    })
  }
  get FormGroup(): FormGroup {
    return this.formGroup;
  }
  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
  response!: string;

  async ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }


  submitForm() {
    console.log(this.FormGroup.value);

    if (this.FormGroup.valid) {
      this.usersService.create(this.FormGroup.value).subscribe({
        next: (response) => {
          this.response = response.success;
        }, error: (err) => {
          console.log(err);
        }
      })
    } else {
      this.response = 'Error with the form'
    }

  }
}