import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PagesComponent } from './pages.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [PagesComponent, MainComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: PagesComponent,
        children: [
          { path: '', component: MainComponent }
        ]
      }
    ])
  ]
})

export class PagesModule { }
