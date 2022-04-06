import { Component, VERSION } from '@angular/core';
import { Log } from './decorators/log.decorator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Log()
export class AppComponent {
  public title = `Angular ${VERSION.major} Custom Decorator`;
}
