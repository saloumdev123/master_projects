import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SubscriptionService } from '../../services/subscription.service';
import { Router } from '@angular/router';
import { MiniSubscriber } from '../../interfaces/MiniSubscriber';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService, 
    private router: Router 
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    
    const subscriber: MiniSubscriber = {
      email: this.form.value.email
    };

    this.subscriptionService.simpleSubscribe(subscriber).subscribe({
      next: () => {
        console.log('Abonnement enregistré');
        this.form.reset();
      },
      error: (err) => console.error('Erreur :', err)
    });

    console.log('Soumission du formulaire de newsletter :', this.form.value.email);
    alert('Email ' + this.form.value.email + ' abonné ! (Simulation)');
    this.form.reset();
  }
}
