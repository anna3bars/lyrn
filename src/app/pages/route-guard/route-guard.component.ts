import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-route-guard',
  standalone: true,
  imports: [CarouselComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './route-guard.component.html',
  styleUrl: './route-guard.component.css'
})
export class RouteGuardComponent {
  route: boolean = false;
  disp(name: any){
    if(name == 'route'){
      this.route = !this.route
    }
  }
}
