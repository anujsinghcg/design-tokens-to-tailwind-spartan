import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { hlmH1, hlmH2, hlmH3, hlmH4, hlmLead, hlmP, hlmSmall } from '@spartan-ng/helm/typography';

@Component({
  selector: 'app-typography',
  imports: [CommonModule],
  template: `
  <ng-container [ngSwitch]="level">
    <h1 *ngSwitchCase="'h1'" ngClass="${hlmH1}" [class]="class">{{ label }}</h1>
    <h2 *ngSwitchCase="'h2'" ngClass="${hlmH2}" [class]="class">{{ label }}</h2>
    <h3 *ngSwitchCase="'h3'" ngClass="${hlmH3}" [class]="class">{{ label }}</h3>
    <h4 *ngSwitchCase="'h4'" ngClass="${hlmH4}" [class]="class">{{ label }}</h4>
    <p *ngSwitchCase="'p'" ngClass="${hlmP}" [class]="class">{{ label }}</p>
    <p *ngSwitchCase="'hlmlead'" ngClass="${hlmLead}" [class]="class">{{ label }}</p>
    <p *ngSwitchCase="'psmall'" ngClass="${hlmSmall}" [class]="class">{{ label }}</p>
  </ng-container> 
  `,
  styleUrl: './typography.component.css'
})
export class TypographyComponent {
  @Input() level: 'h1' | 'h2' | 'h3' | 'h4' | 'p' = 'p';
  @Input() label: string = '';
  @Input() class = '';
  number = Number;
  hlmH1 = '';
  hlmH2 = '';
  hlmH3 = '';
  hlmH4 = '';
  hlmP = '';
  hlmLead = '';
  hlmSmall = '';
}
