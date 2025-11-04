import { Component, Input } from '@angular/core';
import { HlmInputImports } from '@spartan-ng/helm/input';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [HlmInputImports],
  template: `<input class="w-80" 
  [attr.id]="forwardedId" hlmInput [class]="class" [placeholder]="placeholder" />`,
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
@Input() placeholder = '';
@Input() class = '';
@Input({ alias: 'id' }) forwardedId: string | null = null;

}
