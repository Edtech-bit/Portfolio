import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  isModalOpen = false;
  zoomedImage: string | null = null;

  readonly certificates = [
    { file: 'Content_Marketing.png', label: 'Content Marketing certificate' },
    { file: 'Design_Thinking.png', label: 'Design Thinking certificate' },
    { file: 'Digital_Advertising.png', label: 'Digital Advertising certificate' },
    { file: 'Digital_marketing.png', label: 'Digital Marketing certificate' },
    { file: 'SEO_CERTIFICATION.png', label: 'SEO certificate' },
    { file: 'UIUX_Designing.png', label: 'UI/UX Designing certificate' },
    { file: 'PostgreSQL Database Maintenance Course with Certificate.png', label: 'PostgreSQL Database Maintenance Course with Certificate' }
  ];

  toggleModal(state: boolean): void {
    this.isModalOpen = state;
  }

  zoomImage(imgUrl: string | null): void {
    this.zoomedImage = imgUrl;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.zoomedImage) {
      this.zoomedImage = null;
    } else if (this.isModalOpen) {
      this.isModalOpen = false;
    }
  }
}