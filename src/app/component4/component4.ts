import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component4',
  imports: [],
  templateUrl: './component4.html',
  styleUrl: './component4.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component4 {
  count = 1;

  protected getLocalValue() {
    return this.count++;
  }
}
