import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Message envoyé :', this.contact);
    alert('Merci pour votre message !');
    // Reset form
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }

}
