import { Component, Input } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [HlmButtonImports],
  template: `
    <button hlmBtn [variant]="variant" [size]="size">
      <ng-content></ng-content>
    </button>
  `,
})
export class MyButtonComponent {
  @Input() variant: 'default' | 'outline' | 'ghost' = 'default';
 
  @Input() size: 'default' | 'sm' | 'lg' | 'icon' = 'default';
}