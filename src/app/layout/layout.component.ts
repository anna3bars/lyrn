import { Component } from '@angular/core';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

interface IInput {
  name: string,
  value: string
}

interface ISearchArray  {
  button: string,
  ngif: string,
  ngifValue: boolean,
  input: IInput[]
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ToolbarComponent, RouterModule, CommonModule, NgIf],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  rot: boolean = false;
  def: boolean = true;
  searchArray: Array<any> = [
    {
      button: 'observable',
      ngif: true,
      input:[ 'What is Observable', 'RXJS', 'The difference between Promise',
      'How to create', 'Error & Completion of Observable',
      'Different ways of Creating Observable', 'Understanding Operators of RxJS',
      'Unsubscribe to an Observable']
    }
  ];
  angularSearchArray: ISearchArray[] = [
    {
      button: 'observable',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: 'What is Observable', value: ''},
        { name: 'RXJS',  value: ''},
        { name: 'The difference between Promise', value: ''},
        { name: 'How to create', value: ''},
        { name: 'Error & Completion of Observable', value: ''},
        { name: 'Different ways of Creating Observable', value: ''},
        { name:  'Understanding Operators of RxJS', value: ''},
        { name:  'Unsubscribe to an Observable', value: ''}, 
      ]
    }
  ] 
  
        
  createValue(arr: ISearchArray, name: string){
    console.log('Arr');
    console.log(arr);
    console.log('-');
    if(arr.button == 'observable'){
      arr.input.forEach((elem) => {
        elem.value = arr.button + '/' + elem.name.toLowerCase()
        .replaceAll(' ', '-');
        
      })
    }
    
  }
  ngOnInit() {
    this.loc() 
    
    this.createValue(this.angularSearchArray[0], 'observable');
    console.log(this.angularSearchArray);
    
  }
  change(){
    this.loc()
  }
  loc(){
    if (location.pathname == '/') {
      this.searchArray = [
        // {
        //   button: 'observable',
        //   ngif: true,
        //   input:[ 'What is Observable', 'RXJS', 'The difference between Promise',
        //   'How to create', 'Error & Completion of Observable',
        //   'Different ways of Creating Observable', 'Understanding Operators of RxJS',
        //   'Unsubscribe to an Observable']
        // },
        // {
        //   val: 'routing'
        // },
        // {
        //   val: 'none'
        // }
      ];
    }
  }
  button(){
    this.rot = !this.rot;
    this.def = !this.def;
  }
}
