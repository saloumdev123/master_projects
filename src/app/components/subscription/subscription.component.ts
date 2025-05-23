import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubscriptionService } from '../../services/subscription.service';
import { Subscriber } from '../../interfaces/subscriber';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
 form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService,
    private router: Router 
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: [''],
      message: ['']
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const subscriber: Subscriber = {
      id: 0, 
      job: { id: 1},
      ...this.form.value,
      dateCreated: ''
    };

    this.subscriptionService.createSubscription(subscriber).subscribe({
      next: (res) => {
        console.log('Subscription created:', res);
        this.form.reset();
        this.router.navigate(['/home']); 
      },
      error: (err) => console.error('Error:', err)
    });
  }
}
