import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showModal = signal(false);

  openImageModal(): void {
    this.showModal.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeImageModal(): void {
    this.showModal.set(false);
    document.body.style.overflow = 'auto';
  }
}
