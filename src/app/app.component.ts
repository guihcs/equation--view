import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  a:any = 1;
  b:any = 1;
  c:any = 1;
  delta = 1;
  multi = [
    {
      name: 'f(x)',
      series: [

      ]
    },
  ];
  xv = 0;
  yv = 0;

  x1 = 0;
  x2 = 0;

  equation = 'f(x) = 1x^2 + 1x + 1'

  ngOnInit(): void {
    this.onChange();
  }

  onChange(){
    let a = parseInt(this.a)
    let b = parseInt(this.b)
    let c = parseInt(this.c)

    this.setEquation(a, b, c)

    this.delta = Math.pow(b, 2) - 4 * a * c;
    this.xv = -b / (2 * a)
    this.yv = -this.delta / (4 * a)
    let dataX = this.range(-10, 10, 10)
    let series:any = dataX.map((x) => {
      return {
        name: x,
        value: a * (x * x) + b * x + c
      }
    })

    this.multi[0].series = series;
    this.multi = [...this.multi];
    console.log(this.multi)


    if(this.delta > 0){
      this.x1 = (-b + Math.sqrt(this.delta)) / 2 * a
      this.x2 = (-b - Math.sqrt(this.delta)) / 2 * a
    } else if (this.delta == 0){
      this.x1 = -b / 2 * a
    }


  }

  setEquation(a:any, b:any, c:any){

    let tb = b > 0 ? '+' + b : b
    let tc = c > 0 ? '+' + c: c

    let fta = a != 0? a + 'x^2' : ''
    let ftb = b != 0? tb + 'x' : ''
    let ftc = c != 0? tc : ''

    this.equation = `f(x) = ${fta} ${ftb} ${ftc}`
  }



  range(start:number, end:number, frac: number){
    let div = (end - start) / frac;
    let v = []
    for(let i = start; i <= end; i += div){
      v.push(i)
    }
    return v;
  }

}
