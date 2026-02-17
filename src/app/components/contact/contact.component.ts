import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;

  contactInfo = [
    {
      type: 'Email',
      value: 'tdvishnu04@gmail.com',
      link: 'mailto:tdvishnu04@gmail.com'
    },
    {
      type: 'Phone',
      value: '+916363510347',
      link: 'tel:+916363510347'
    },
    {
      type: 'Location',
      value: 'Kannur | Kerala | India',
      link: '#'
    }
  ];

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vishnu-t-d-38bb301a6/',
      icon: 'linkedin'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.contactForm.value);
      this.isSubmitting = false;
      this.isSubmitted = true;
      this.contactForm.reset();

      setTimeout(() => {
        this.isSubmitted = false;
      }, 5000);
    }, 1500);
  }
}
