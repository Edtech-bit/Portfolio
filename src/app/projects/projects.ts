import { Component, computed, signal } from '@angular/core';

type Category = 'client' | 'school' | 'ojt';
type Filter = 'all' | Category;

interface Project {
  title: string;
  text: string;
  image: string;
  alt: string;
  category: Category;   // client, school, or ojt (decides which filter button shows it)
  live?: string;        // optional: link to the live site or prototype
  liveLabel?: string;   // optional: text on that button
  code?: string;        // optional GitHub link
  note?: string;        // optional small note under the text
  tech: string[];
  color: string;        // card color
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  // The filter buttons. A button is hidden automatically if it has no projects.
  readonly filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'client', label: 'Clients' },
    { key: 'school', label: 'School projects' },
    { key: 'ojt', label: 'OJT systems' }
  ];

  // To add a project: put its picture in the "public" folder and add a block here.
  readonly projects: Project[] = [
    {
      title: 'CIAC Document Tracker',
      text: 'A web system built during OJT at Clark International Airport to manage incoming and outgoing documents as they move between offices.',
      image: 'CiacTracker.png',
      alt: 'CIAC Document Tracker screenshot',
      category: 'ojt',
      note: 'Internal system, so there is no public link.',
      tech: ['ReactJS', 'C#', 'MSSQL'],
      color: 'var(--blue)'
    },
    {
      title: 'CIAC Risk Management',
      text: 'A web system where each department at Clark International Airport records and tracks the risks it sees in its work.',
      image: 'CiacRisk.png',
      alt: 'CIAC Risk Management screenshot',
      category: 'ojt',
      note: 'Internal system, so there is no public link.',
      tech: ['ReactJS', 'C#', 'MSSQL'],
      color: 'var(--pink)'
    },
    {
      title: 'Filsafe',
      text: 'A production-ready platform with custom domain integration and high-availability hosting.',
      image: 'FilsafePic.png',
      alt: 'Filsafe website preview',
      category: 'client',
      live: 'https://filsafe.shop',
      liveLabel: 'Visit site',
      code: 'https://github.com/Edtech-bit',
      tech: ['Live Domain', 'Hosting', 'SEO Optimized'],
      color: 'var(--yellow)'
    },
    {
      title: 'Ed Barbers',
      text: 'Barbershop website using HTML, CSS, and PHP with an integrated booking system.',
      image: 'EdBarbersPic.png',
      alt: 'Ed Barbers preview',
      category: 'school',
      live: 'https://edbarbers.netlify.app',
      liveLabel: 'Visit site',
      code: 'https://github.com/Edtech-bit',
      tech: ['PHP', 'MySQL', 'CSS'],
      color: 'var(--orange)'
    },
    {
      title: 'ScrubHub',
      text: 'Modular management platform built with Angular, focusing on reactive data binding.',
      image: 'ScrubHubpic.png',
      alt: 'ScrubHub preview',
      category: 'school',
      live: 'https://scrubhub1.netlify.app',
      liveLabel: 'Visit site',
      code: 'https://github.com/Edtech-bit',
      tech: ['Angular', 'TypeScript', 'SCSS'],
      color: 'var(--pink)'
    },
    {
      title: 'Domore',
      text: 'Full-stack web planner platform integrating file handling and task organization.',
      image: 'DomorePic.png',
      alt: 'Domore preview',
      category: 'school',
      live: 'https://domore-student-planner.netlify.app/',
      liveLabel: 'Visit site',
      code: 'https://github.com/Edtech-bit',
      tech: ['Vue.js', 'Node.js', 'MongoDB'],
      color: 'var(--blue)'
    },
    {
      title: 'Cush Cafe',
      text: 'High-fidelity UI/UX prototype for a local business reservation system designed in Figma.',
      image: 'CushCafePic.png',
      alt: 'Cush Cafe design preview',
      category: 'school',
      live: 'https://www.figma.com/proto/h5FRqSWsxupk6V4WlWddMZ/Untitled?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&scaling=min-zoom&content-scaling=fixed&t=LnFIviI2SeEW7Npm-1',
      liveLabel: 'View prototype',
      tech: ['Figma', 'UI/UX Design', 'Prototyping'],
      color: 'var(--green)'
    }
  ];

  // Which filter button is selected right now
  active = signal<Filter>('all');

  // The projects that match the selected filter
  visible = computed(() =>
    this.active() === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === this.active())
  );

  setFilter(key: Filter) {
    this.active.set(key);
  }

  // How many projects a filter has
  countOf(key: Filter): number {
    return key === 'all'
      ? this.projects.length
      : this.projects.filter(p => p.category === key).length;
  }

  // Turns 1 into "01", 2 into "02", and so on
  pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}