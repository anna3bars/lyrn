import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Output() change = new EventEmitter<boolean>();
  out(){
    this.change.emit(true)
  }
}
