import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges , DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() value: String= 'procademy';

  constructor() {
    console.log('constructor called!!!');
    // console.log(this.value);
   }

  ngOnInit(): void {
    console.log('ngOnInit called!!!  ');
    // console.log(this.value);

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!!! ');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!!!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!!!');

  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!!!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!!!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!!!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!!!');
  }
}
