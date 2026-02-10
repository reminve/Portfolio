import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '../../components/svg-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SvgIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  getImageUrl(name: string): string {
    return `assets/${name}`;
  }
}
