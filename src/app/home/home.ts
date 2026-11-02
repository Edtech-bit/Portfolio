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
  readonly marquee = ['Full-Stack Developer', 'Databases', 'Internal Systems', 'Angular', 'React', 'C#', 'Node.js', 'MSSQL'];

  // ----- About: small tags under the story (edit the text here) -----
  readonly facts = ['Based in Angeles City', 'Full-stack + databases', 'Cloud beginner'];

  // ----- About: what I do (edit the text here) -----
  readonly services = [
    { title: 'Internal systems', text: 'Web apps that track documents, requests, and records, so teams can drop the paper trail and the messy spreadsheets.', color: 'var(--yellow)' },
    { title: 'Database design', text: 'Tidy tables, clear relationships, and queries that keep working as the data grows.', color: 'var(--pink)' },
    { title: 'Front-end screens', text: 'Clean, responsive pages in React and Angular that people can use without a manual.', color: 'var(--blue)' },
    { title: 'Websites', text: 'Fast, good-looking sites for small businesses and personal brands, ready to go live.', color: 'var(--green)' }
  ];

  // ----- About: skills (edit the lists here). "level" shows a small tag, like Beginner. -----
  readonly skillGroups: { title: string; items: string[]; color: string; level?: string }[] = [
    { title: 'Databases', items: ['MSSQL', 'PostgreSQL', 'MySQL', 'MongoDB'], color: 'var(--yellow)' },
    { title: 'Backend', items: ['C#', 'Node.js', 'Express', 'PHP', 'REST APIs'], color: 'var(--pink)' },
    { title: 'Frontend', items: ['React', 'Angular', 'Vue', 'TypeScript', 'HTML & CSS', 'Tailwind'], color: 'var(--blue)' },
    { title: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'], color: 'var(--orange)', level: 'Beginner' },
    { title: 'Tools', items: ['Git & GitHub', 'Figma', 'Docker', 'VS Code', 'Netlify'], color: 'var(--green)' },
    { title: 'Also', items: ['UI/UX Design', 'SEO', 'Digital Marketing'], color: 'var(--pink)' }
  ];

  // ----- About: my journey (EDIT THIS so the years and skills match your real path) -----
  // Each stop has a label (like "Year 1"), a title, the things you picked up, and a color.
  // Add "now: true" to the last stop to make its dot pulse.
  readonly journey: { year: string; title: string; items: string[]; color: string; now?: boolean }[] = [
    { year: 'Year 1', title: 'The basics', items: ['HTML', 'CSS', 'JavaScript'], color: 'var(--yellow)' },
    { year: 'Year 2', title: 'Logic and databases', items: ['Java', 'PHP', 'MySQL', 'Figma'], color: 'var(--pink)' },
    { year: 'Year 3', title: 'Frameworks', items: ['Angular', 'Vue', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind'], color: 'var(--blue)' },
    { year: 'Year 4', title: 'Real-world systems', items: ['React', 'C#', 'MSSQL', 'PostgreSQL'], color: 'var(--green)' },
    { year: 'Now', title: 'Into the cloud', items: ['AWS', 'Azure', 'Google Cloud'], color: 'var(--orange)', now: true }
  ];

  // How many different things are in the journey (counted automatically)
  get journeyCount(): number {
    return new Set(this.journey.flatMap(stop => stop.items)).size;
  }

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