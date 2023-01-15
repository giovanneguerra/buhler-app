import { Component, Input } from '@angular/core';
import { Machine } from 'src/app/models/machine';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() machines?: Machine[];

}
