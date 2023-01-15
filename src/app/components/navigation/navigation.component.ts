import { Component, Input } from '@angular/core';
import { Machine } from 'src/app/models/machine';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() machines?: Machine[];
}
