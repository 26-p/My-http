import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiechartComponent } from "./piechart/piechart.component";
import {ChartModule} from 'primeng/chart';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
    declarations: [
        AppComponent,
        PiechartComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ChartModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
