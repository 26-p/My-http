import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApexNonAxisChartSeries } from 'ng-apexcharts';
import { ApexChart } from 'ng-apexcharts/public_api';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  data: any;
  PieForm : FormGroup | any;

  constructor() {

  }
  ngOnInit(): void {
    this.PieForm = new FormGroup({
      box1 : new FormControl('',[Validators.min(0), Validators.max(100) ,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      box2 : new FormControl('',[Validators.min(0), Validators.max(100) ,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    })
  }
  onSubmit(){
    console.log(this.PieForm.value);
    this.data = {
      labels: ['A','B'],
      datasets: [
          {
              data: [this.PieForm.value.box1, this.PieForm.value.box2],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB"
              ]
          }]
      };
  }
  valueForBox2(){
    if( this.PieForm.value.box1 >= 0 && this.PieForm.value.box1 <= 100 &&  this.PieForm.value.box1 !== ''){
      this.PieForm.patchValue({
        box2 : (100 - this.PieForm.value.box1)
      })
    }
  }
  valueForBox1(){
    if(this.PieForm.value.box2 >= 0 && this.PieForm.value.box2 <= 100 && this.PieForm.value.box2 !== '' ){
      this.PieForm.patchValue({
        box1 : (100 - this.PieForm.value.box2)
      })
    }
  }
}
