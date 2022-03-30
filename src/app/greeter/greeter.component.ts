import { Component, Input, VERSION } from '@angular/core';
import { Required } from '../decorators/required.decorator';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css'],
})
export class GreeterComponent {
  @Input() @Required public name: string;
  @Input() public message: string;
}
