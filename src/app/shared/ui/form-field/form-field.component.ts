import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmFormFieldImports } from '@spartan-ng/helm/form-field';
import { HlmInputImports } from '@spartan-ng/helm/input';

@Component({
  selector: 'app-form-field',
  imports: [HlmInputImports, HlmFormFieldImports, ReactiveFormsModule],
  template: `
  <hlm-form-field>
			<input class="w-80" hlmInput [formControl]="control" type="email" [placeholder]="placeholder" />
			<hlm-hint>This is your email address.</hlm-hint>
			<hlm-error>The email is required.</hlm-error>
		</hlm-form-field>
    `,
  styleUrl: './form-field.component.css'
})
export class FormFieldComponent {
public control = new FormControl('', Validators.required);
@Input() placeholder = '';
}
