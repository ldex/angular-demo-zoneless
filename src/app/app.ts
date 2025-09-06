import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Component1 } from "./component1/component1";
import { Component2 } from "./component2/component2";
import { Component3 } from "./component3/component3";
import { Component4 } from "./component4/component4";

@Component({
  selector: 'app-root',
  imports: [Component1, Component2, Component3, Component4],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {


}
