import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  // ----- Words that scroll across the strip under the hero -----
  readonly marquee = ['Front-End Developer', 'UI Engineer', 'Angular', 'React', 'Figma', 'Node.js', 'Responsive Design'];

  // ----- About: skills (edit the text here) -----
  readonly skills = [
    { title: 'Frontend', items: 'Angular, React, Vue, HTML/CSS', color: 'var(--yellow)' },
    { title: 'Backend', items: 'Node.js, PHP, C#, MySQL, MSSQL', color: 'var(--pink)' },
    { title: 'Tools', items: 'Git, Docker, VS Code, Figma', color: 'var(--blue)' },
    { title: 'Other', items: 'SEO, Digital Marketing, REST API', color: 'var(--green)' }
  ];

  // ----- Certificates: to add one, put the picture in the "public" folder
  // and add a line here. The file name must match exactly. -----
    readonly certificates = [
    { file: 'PostgreSQL Database Maintenance Course with Certificate.png', label: 'PostgreSQL Database Maintenance certificate' },
    { file: 'Introduction_to_cloud_computing.png', label: 'Introduction to Cloud certificate' },
    { file: 'UIUX_Designing.png', label: 'UI/UX Designing certificate' },
    { file: 'Design_Thinking.png', label: 'Design Thinking certificate' },
    { file: 'Graphic_design.png', label: 'Graphic Design certificate' },
    { file: 'Content_Marketing.png', label: 'Content Marketing certificate' },
    { file: 'Digital_Advertising.png', label: 'Digital Advertising certificate' },
    { file: 'Digital_marketing.png', label: 'Digital Marketing certificate' },
    { file: 'SEO_CERTIFICATION.png', label: 'SEO certificate' }
  ];

  zoomedImage: string | null = null;

  zoomImage(file: string | null) {
    this.zoomedImage = file;
  }

  @HostListener('document:keydown.escape')
  closeZoom() {
    this.zoomedImage = null;
  }

  // ----- Contact -----
  readonly email = 'castilloed7899@gmail.com';

  name = '';
  senderEmail = '';
  message = '';
  sent = false;

  // Opens the visitor's email app with the message already filled in.
  onSubmit() {
    const subject = encodeURIComponent(`Portfolio message from ${this.name}`);
    const body = encodeURIComponent(`${this.message}\n\nFrom: ${this.name} (${this.senderEmail})`);
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;

    this.sent = true;
    this.name = '';
    this.senderEmail = '';
    this.message = '';
  }
}