import { Component, Input, VERSION } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css'],
})
export class GreeterComponent {
  @Input() public name: string;
  @Input() public message: string;
}
