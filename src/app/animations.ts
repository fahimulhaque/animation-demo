import { trigger, state, transition, style, animate, animation } from '@angular/animations';

export const fade = trigger('fade' , [
    state('void', style({opacity: 0})),
    transition('void <=> *' , [ // alias can be used as well for void => * (:enter) and * => void (:leave)
      animate(2000)
    ])
  ]);

  export const transform = trigger('transform' , [
    state('void', style({transform: 'translateX(-20px)'})),
    transition('void <=> *' , [ // alias can be used as well for void => * (:enter) and * => void (:leave)
      animate('0.5s ease-in')
    ])
  ]);



// Keyframe can  be used -- // TODO
// check animation function -- // TODO
