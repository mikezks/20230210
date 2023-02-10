import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ManageComponent } from '@flight-demo/checkin/feature-manage';

@Component({
  standalone: true,
  imports: [CommonModule, ManageComponent],
  selector: 'flight-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  @Input() name = 'string';
  title = 'checkin';
}
