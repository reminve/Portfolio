import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { SvgIconComponent } from '../../components/svg-icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SvgIconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  // Configuration EmailJS
  private readonly SERVICE_ID = 'service_e69tpoo';
  private readonly TEMPLATE_ID = 'template_jnh0c3y';
  private readonly PUBLIC_KEY = 'hOfLlYPnwXK6BTSSG';

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitting = signal(false);
  formSubmitted = signal(false);
  formError = signal(false);
  errorMessage = signal('Une erreur est survenue. Veuillez réessayer.');

  async submitForm(): Promise<void> {
    this.submitting.set(true);
    this.formError.set(false);
    
    try {
      const result = await emailjs.sendForm(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        this.contactForm.nativeElement,
        this.PUBLIC_KEY
      );

      console.log('Email envoyé avec succès!', result.text);
      
      // Réinitialisation du formulaire
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      this.formSubmitted.set(true);
      
      setTimeout(() => {
        this.formSubmitted.set(false);
      }, 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      this.formError.set(true);
      this.errorMessage.set("Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.");
      
      setTimeout(() => {
        this.formError.set(false);
      }, 5000);
    } finally {
      this.submitting.set(false);
    }
  }
}
