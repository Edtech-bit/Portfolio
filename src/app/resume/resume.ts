import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.html',
  styleUrls: ['./resume.css']
})
export class Resume {
  downloadResume() {
    // This assumes your PDF is in the assets folder
    window.open('assets/resume.pdf', '_blank');
  }
}