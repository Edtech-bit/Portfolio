import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  isModalOpen: boolean = false;
  zoomedImage: string | null = null; // Stores the URL of the image to zoom

  toggleModal(state: boolean): void {
    this.isModalOpen = state;
  }

  // Function to zoom in on a specific image
  zoomImage(imgUrl: string | null): void {
    this.zoomedImage = imgUrl;
  }
}