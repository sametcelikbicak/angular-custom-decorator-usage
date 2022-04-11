import { Component, OnInit, VERSION } from '@angular/core';
import { Log } from './decorators/log.decorator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = `Angular ${VERSION.major} Custom Decorator`;

  @Log()
  public ngOnInit(): void {
    this.sayHi('Hi', 'Samet');
  }

  @Log({ color: 'red' })
  public sayHi(message: string, name: string): void {
    console.log(message, name);
  }
}
