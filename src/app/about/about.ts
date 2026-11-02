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
    { file: 'PostgreSQL_Certificate.png', label: 'PostgreSQL Database Maintenance certificate' },
    { file: 'Introduction_to_cloud_computing.png', label: 'Introduction to Cloud certificate' },
    { file: 'UIUX_Designing.png', label: 'UI/UX Designing certificate' },
    { file: 'Design_Thinking.png', label: 'Design Thinking certificate' },
    { file: 'Graphic_design.png', label: 'Graphic Design certificate' },
    { file: 'Content_Marketing.png', label: 'Content Marketing certificate' },
    { file: 'Digital_Advertising.png', label: 'Digital Advertising certificate' },
    { file: 'Digital_marketing.png', label: 'Digital Marketing certificate' },
    { file: 'SEO_CERTIFICATION.png', label: 'SEO certificate' }
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