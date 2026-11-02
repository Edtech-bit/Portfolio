import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resume.html',
  styleUrls: ['./resume.css']
})
export class Resume {
  // The PDF that the Download button gives people.
  // Put your PDF in the "public" folder with exactly this name (or change the name here).
  readonly file = 'CASTILLO_CV_2026.pdf';
  readonly downloadName = 'CASTILLO_CV_2026.pdf';

  readonly overview =
    'Aspiring UI/UX Designer and Frontend Developer with a strong foundation in building responsive and ' +
    'user-centered web applications. Experienced in developing full-stack projects using modern technologies ' +
    'such as Angular, Node.js, and MongoDB, with a growing focus on creating intuitive and visually engaging ' +
    'user interfaces. Skilled in translating user needs into functional designs through wireframing and ' +
    'prototyping tools like Figma. Passionate about improving user experience, accessibility, and performance, ' +
    'while continuously learning and adapting to new design trends and frontend technologies.';

  // ----- Projects (edit the words here). "meta" is the small grey line under the name. -----
  readonly projects = [
    {
      name: 'Document Tracker',
      meta: 'Clark International Airport · OJT',
      color: 'var(--blue)',
      points: [
        'Built a document tracking web application for Clark International Airport during on-the-job training',
        'Used ReactJS for the frontend, C# for the backend, and MSSQL for the database',
        'Managed incoming and outgoing routed documents in one organized system',
        'Stored document records in a database for easy monitoring and retrieval'
      ]
    },
    {
      name: 'Risk Management System',
      meta: 'Clark International Airport · OJT',
      color: 'var(--pink)',
      points: [
        'Built a risk management web application for Clark International Airport during on-the-job training',
        'Used ReactJS for the frontend, C# for the backend, and MSSQL for the database, on the same server as the Document Tracker',
        'Recorded and monitored risks identified by each CIAC department',
        'Stored risk records in a database for organized tracking and review'
      ]
    },
    {
      name: 'Filsafe.shop',
      meta: 'Angular · Node.js · MongoDB',
      color: 'var(--yellow)',
      points: [
        'Built a full-stack product showcase web application',
        'Used Angular for frontend and Node.js + Express for backend APIs',
        'Implemented MongoDB for data storage and CRUD operations',
        'Ensured smooth frontend-backend integration and scalable architecture'
      ]
    },
    {
      name: 'Domore',
      meta: 'Vue.js · Node.js · MongoDB',
      color: 'var(--green)',
      points: [
        'Built a full-stack web planner with task management and file handling',
        'Developed backend using Node.js, Express, and MongoDB',
        'Designed a responsive frontend with Vue.js and Tailwind CSS',
        'Collaborated with a team on core system features'
      ]
    },
    {
      name: 'Edsurance',
      meta: 'Java',
      color: 'var(--orange)',
      points: [
        'Developed a Java-based CLI app for generating insurance quotations',
        'Applied OOP principles like classes and inheritance',
        'Structured code for scalability and maintainability'
      ]
    }
  ];

  // ----- Skills -----
  readonly skills = [
    { label: 'Frontend development', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web Design', 'Vue.js', 'Bootstrap'] },
    { label: 'Backend & databases', items: ['Node.js', 'Express.js', 'PHP', 'MongoDB', 'MySQL'] },
    { label: 'Tools', items: ['GitHub', 'WordPress', 'Canva'] }
  ];

  readonly softSkills = ['Clear Communications', 'Time Management', 'Teamwork', 'Adaptability'];

  readonly certifications = [
    { name: 'Responsive Web Design', year: '2024' },
    { name: 'Introduction to PHP', year: '2024' },
    { name: 'Introduction to Figma', year: '2024' },
    { name: 'Legacy JavaScript Algorithms & Data Structures', year: '2025' },
    { name: 'Backend Development and APIs', year: '2025' },
    { name: 'PostgreSQL Database Maintenance Course', year: '' },
    { name: 'Introduction to Cloud Computing', year: '' }
  ];
}