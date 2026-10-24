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
  readonly email = 'castilloed7899@gmail.com';

  name = '';
  senderEmail = '';
  message = '';
  sent = false;

  // Opens the visitor's email app with the message filled in.
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