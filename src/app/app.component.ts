import { Component } from '@angular/core';
import { BmiCalculatorService } from './bmi-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultOfBMI: number;
  areLegalInputs: boolean;

  constructor(private BMICalc: BmiCalculatorService) { 
    this.resultOfBMI = null;
    this.areLegalInputs = true;
  }

  getBMI(e: Event, weight: number, height: number) {
    this.resultOfBMI = null;
    this.areLegalInputs = true;
    e.preventDefault();

    if (weight <= 0 || height <= 0) this.areLegalInputs = false;

    if (weight >= 2 && height >= 0.5) this.resultOfBMI = this.BMICalc.getBMI(weight, height); 
    else this.resultOfBMI = null;
  }
}
