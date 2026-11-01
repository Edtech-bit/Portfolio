import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.html',
  styleUrls: ['./resume.css']
})
export class Resume {
  // The picture shown on the page (put your resume picture in the "public" folder).
  readonly preview = 'Resume.png';

  // What the Download button gives people.
  // To offer a PDF instead, put it in the "public" folder and change these two lines,
  // for example: file = 'CASTILLO_CV_2026.pdf' and downloadName = 'CASTILLO_CV_2026.pdf'
  readonly file = 'Resume.png';
  readonly downloadName = 'CASTILLO_CV_2026.png';
}