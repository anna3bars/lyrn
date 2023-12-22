import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../components/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [CarouselComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {
  ngOnInit(){
    console.log(document.getElementsByTagName('img'));
    
  }
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/routing/01.png',
      imageAlt: 'img 1'
    },
    {
      imageSrc: '/assets/img/ang/routing/02.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/routing/03.png',
      imageAlt: 'img 3'
    },
    {
      imageSrc: '/assets/img/ang/routing/04.png',
      imageAlt: 'img 4'
    },
    {
      imageSrc: '/assets/img/ang/routing/05.png',
      imageAlt: 'img 5'
    },
    {
      imageSrc: '/assets/img/ang/routing/06.png',
      imageAlt: 'img 6'
    },
  ];
  images2: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/routing/1-1.png',
      imageAlt: 'img 1'
    },
    {
      imageSrc: '/assets/img/ang/routing/1-2.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/routing/1-3.png',
      imageAlt: 'img 3'
    },
  ]
  images3: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/routing/1-10.png',
      imageAlt: 'img 1'
    },
    {
      imageSrc: '/assets/img/ang/routing/1-11.png',
      imageAlt: 'img 2'
    },
  ]
  id: boolean = false;
  send: boolean = false;
  get: boolean = false; 
  queryParametres: boolean = false;
  fragments: boolean = false;
  sendFrag: boolean = false;
  retrieveFrag: boolean = false;
  route: boolean = false
  changeId(val: boolean) {
    console.log('Before:', this.id);
    this.id = val;
    console.log('After:', this.id);
    console.log(5);
  }
  changeQuer(val: boolean){
    this.queryParametres = val;


  }
  disp(name: any){
    console.log(  name);
    if(name == 'id'){
      this.id = !this.id;
      console.log(this.id);
      console.log(name);
      
      
    } else if(name == 'send'){
      this.send = !this.send;
      console.log(name);
      
      console.log(this.send);
      
      // return
    } 
    else if (name == 'get'){
      this.get = !this.get
      // return;
    } else if (name == 'fragments'){
      this.fragments = !this.fragments
    } else if (name == 'sendFrag'){
      this.sendFrag = !this.sendFrag
    } else if(name == 'retrieveFrag'){
      this.retrieveFrag = !this.retrieveFrag
    } else if(name == 'route'){
      this.route = !this.route
    }
    else{
    console.log(name);
    
    this.queryParametres = !this.queryParametres
      console.log(this.queryParametres);
      
    }
  }
  course: any = {};
  editMode: any;

}