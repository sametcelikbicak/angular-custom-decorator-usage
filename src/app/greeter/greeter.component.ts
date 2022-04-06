import { Component, Input } from '@angular/core';
import { Log } from '../decorators/log.decorator';
import { Required } from '../decorators/required.decorator';

@Component({
  selector: 'app-greeter[message]',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css'],
})
@Log()
export class GreeterComponent {
  @Input() @Required public name: string;
  @Input() public message: string;
}
