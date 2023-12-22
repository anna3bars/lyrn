
export interface carouselImage {
  imageSrc: string,
  imageAlt: string
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'] // Fix typo in styleUrls
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indecators = true;

  ngOnInit(): void {
    console.log(this.images);
  }

  selectedIndex = 0;
  selectImage(index: number){
    this.selectedIndex = index;
  }
}