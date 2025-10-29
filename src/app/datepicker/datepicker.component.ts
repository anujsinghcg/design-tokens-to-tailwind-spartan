import { Component } from '@angular/core';
import { BrnPopoverImports } from '@spartan-ng/brain/popover';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { HlmDatePickerImports, provideHlmDatePickerConfig } from '@spartan-ng/helm/date-picker';
@Component({
  selector: 'app-datepicker',
  imports: [HlmPopoverImports,BrnPopoverImports,HlmDatePickerImports],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {
  public minDate = new Date(2023, 0, 1);
  public maxDate = new Date(2030, 11, 31);
}
