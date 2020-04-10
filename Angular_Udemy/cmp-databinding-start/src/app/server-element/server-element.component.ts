import { Component,
   OnInit,
    Input, 
    ViewEncapsulation,
  OnChanges, 
  DoCheck,
  SimpleChange,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // NOne, native 
})
export class ServerElementComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
@Input('srvElement') element: {type: string, name: string, content: string};
  @Input()name: String;

constructor() { 
  console.log('Constructor Called!'); 
}
ngOnChanges(changes: SimpleChange ) {
console.log('ngOnChanges Called')
console.log(changes);
  
}

  ngOnInit(): void {
    console.log ('NgOninit Called! ')

  }
  ngDoCheck(){
    console.log('ngDocheck called');
  }
  ngAfterViewInit(){
    console.log('ngAfterInit')
  }
ngAfterViewChecked(){
  console.log('ngAfterContentChecked Called!')
  
} 
ngOnDestroy(){
  console.log('ngOndestroy Called!')
}

}
