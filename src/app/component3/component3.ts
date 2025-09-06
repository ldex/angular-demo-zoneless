import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Component2 } from '../component2/component2';

@Component({
  selector: 'app-component3',
  imports: [Component2],
  templateUrl: './component3.html',
  styleUrl: './component3.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component3 {

  count = 1;

  protected getLocalValue() {
    return this.count++;
  }
}
