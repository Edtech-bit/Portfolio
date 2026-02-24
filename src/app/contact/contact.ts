import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  onSubmit() {
    console.log('Form submitted');
    alert('Thank you for your message, Ed will get back to you soon!');
  }
}