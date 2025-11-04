import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
  selector: 'app-checkbox',
  standalone: true, 
  imports: [CommonModule, FormsModule, HlmLabelImports, HlmCheckboxImports],
  template: `
  <div class="flex flex-col gap-6">
      <div class="flex items-center gap-3">
				<hlm-checkbox id="{{ id }}" name="{{ name }}" />
				<label hlmLabel for="{{ id }}">{{ label }}</label>
			</div>
  </div>  
  `,
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() checked: boolean = false;
}
