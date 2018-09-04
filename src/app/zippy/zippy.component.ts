import { animation, trigger, transition, state, style, animate } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse' , [
      state('collapsed', style({
        height: 0,
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        overflow: 'auto'
      })),
      transition('collapsed => expanded' , [
        animate('900ms ease-out')
      ]),
      transition('expanded => collapsed' , [
        animate('900ms ease-in')
      ])
    ])
  ]
})
export class ZippyComponent {

  @Input('title') title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
