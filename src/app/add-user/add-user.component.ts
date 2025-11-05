import { Component, Renderer2 } from '@angular/core';
import { hlmH1, hlmH2, hlmH3, hlmH4, hlmP, HlmTypographyImports } from '@spartan-ng/helm/typography';

import { HlmFormFieldImports } from '@spartan-ng/helm/form-field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmLabelImports } from '@spartan-ng/helm/label';

import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSwitch } from '@spartan-ng/helm/switch';

import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { HlmCalendarImports } from '@spartan-ng/helm/calendar';
import { ThemeService } from '../theme.service';
import { BrnPopoverImports } from '@spartan-ng/brain/popover';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { HlmDatePickerImports, provideHlmDatePickerConfig } from '@spartan-ng/helm/date-picker';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { MyButtonComponent } from '../my-button/my-button.component';
import { SkeletonPreview } from '../skeleton/skeleton.component';
import { UserAvatarComponent } from '../avatar/avatar.component';
import { SpartanUiLibModule } from '../../../../git-repo-31-10/spartan-ui-component-library/projects/spartan-ui-component-lib/src/lib/spartan-ui-lib.module';
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [SpartanUiLibModule,UserAvatarComponent,SkeletonPreview,MyButtonComponent,HlmButtonImports,DatepickerComponent,HlmPopoverImports,BrnPopoverImports,HlmDatePickerImports,HlmFormFieldImports, HlmCalendarImports,HlmInputImports, HlmCheckboxImports, HlmLabelImports, HlmLabel, HlmSwitch, BrnSelectImports, HlmSelectImports,HlmTypographyImports],
  templateUrl: './add-user.component.html',
  providers: [
		provideHlmDatePickerConfig({
		autoCloseOnSelect: true,
		}),
	],
  //styleUrl: './add-user.component.css'
//   template:`
//   <div class="bg-gray-50 bg-(--colors-light-grey) text-(--color-togglelight) dark:bg-(--colors-font-tertiary) dark:text-[var(--colors-dark-white)]" >
//     <div class="grid grid-cols-6" >
//     <div class="col-start-2 col-span-4 ">
//         <label class="flex items-center add-usertoggle hlmLabel text-[var(--colors-light-blacktext)] bg-background dark:text-[var(--colors-dark-subtext)]">
// 			<hlm-switch class="mr-2" (click)="toggleTheme()"/>
// 			Change mode
// 		</label>        
         
//         <h1 class="${hlmH1} text-center mt-8 text-[var(--color-primary)] dark:text-[var(--color-secondary)]">Add A User</h1>
//         <p class="${hlmP} text-center">The Court - Sesion 1</p>
//         <div class="calender flex justify-end grid grid-cols-12 mb-3">
//           <p class="${hlmP} col-span-12 text-end">Subscription Date</p>
//           <brn-select class="flex inline-block col-span-12 justify-end" placeholder="Select an option">
//             <hlm-select-trigger class="bg-white rounded-[6px] w-56">
//               <hlm-select-value />
//             </hlm-select-trigger>
//             <hlm-select-content>
//               <hlm-option value="Refresh">Refresh</hlm-option>
//               <hlm-option value="Settings">Settings</hlm-option>
//             </hlm-select-content>
//           </brn-select>
          
//         </div>
//         <div class="form-wrap bg-white p-[26px] mb-[71px] border border-gray-300 rounded-md">
//         <div class="grid grid-cols-12 gap-4 pb-[26px]">
//             <div class="col-span-6">
//             <hlm-form-field>
//                 <input class="w-80" hlmInput type="text" placeholder="First Name" />
//             </hlm-form-field>
//             </div>
//             <div class="col-span-6">
//             <hlm-form-field>
//                 <input class="w-80" hlmInput type="text" placeholder="Last Name" />
//             </hlm-form-field>
//             </div>
//             <div class="col-span-6">
//             <hlm-form-field>
//                 <input class="w-80" hlmInput type="email" placeholder="Email" />
//             </hlm-form-field>
//             </div>
//             <div class="col-span-6">
//             <hlm-form-field>
//                 <input class="w-80" hlmInput type="text" placeholder="Job Title" />
//             </hlm-form-field>
//             </div>
//             <div class="col-span-6">
//             <hlm-form-field>
//                 <input class="w-80" hlmInput type="text" placeholder="Phone" />
//             </hlm-form-field>
//             </div>
//         </div>
//         <h4 class="${hlmH4} pb-[26px]">Optional Settings</h4>
//         <div class="col-span-12 space-y-2 pb-[26px]">
//           <div class="flex items-center gap-3">
//                 <hlm-checkbox id="comp1" />
//                 <label hlmLabel for="comp1">Make the user a company admin</label>
//             </div>
//         </div>
//         <div class="col-span-12 space-y-2">
//             <div class="flex items-center gap-3">
//                 <hlm-checkbox id="comp2" />
//                 <label hlmLabel for="comp2">User is an Account Payable user</label>
//             </div>
//         </div>
//         </div>
//         <div class="form-wrap bg-white p-[26px] mb-[71px] border border-gray-300 rounded-md">
//             <h4 class="${hlmH4} pb-[26px]">Department Access</h4>
//             <div class="grid grid-cols-3 gap-x-[70px]">
//               <div class="flex flex-col gap-6">
//                   <div class="flex items-center gap-3">
//                       <hlm-checkbox id="terms1" />
// 				              <label hlmLabel for="terms1">Accept terms and conditions</label>
//                   </div>
//               </div>
//               <div class="flex flex-col gap-6">
//                   <div class="flex items-center gap-3">
//                       <hlm-checkbox id="terms2" />
// 				              <label hlmLabel for="terms2">Accept terms and conditions</label>
//                   </div>
//               </div>
//               <div class="flex flex-col gap-6">
//                   <div class="flex items-center gap-3">
//                       <hlm-checkbox id="terms3" />
// 				              <label hlmLabel for="terms3">Accept terms and conditions</label>
//                   </div>
//               </div>
//             </div>
//         </div>
//         <div class="form-wrap bg-white p-[26px] border border-gray-300 rounded-md">
//           <h4 class="${hlmH4} pb-[26px]">Sections & Permissions</h4>
//           <div class="grid grid-rows-2 grid-flow-col flex items-center justify-between rounded-[16px] mb-4 px-3 py-4 shadow-sm border border-slate-300">
//             <div class="col-span-2 ...">
//               <h4 class="${hlmH4}">Project</h4>
//             </div>
//             <div class="row-span-2 col-span-2 ...">
//               <p>Can View</p>
//             </div>
//             <div class="row-span-3 ..."><label class="flex items-center" hlmLabel>
// 			<hlm-switch class="mr-2" /></label></div>
//           </div>

//           <div class="grid grid-rows-2 grid-flow-col flex items-center justify-between rounded-[16px] mb-4 px-3 py-4 shadow-sm border border-slate-300">
//             <div class="col-span-2 ...">
//               <h4 class="${hlmH4}">Service Request</h4>
//             </div>
//             <div class="row-span-2 col-span-2 ...">
//               <p>Receive emails about your account security.</p>
//             </div>
//             <div class="row-span-3 ..."><label class="flex items-center" hlmLabel>
// 			<hlm-switch class="mr-2" /></label></div>
//           </div>

//         </div>
//       </div>
//     </div>
// </div>`
})
export class AddUserComponent {
  public minDate = new Date(2023, 0, 1);
showUserInfo = true;
showCard = true;
	/** The maximum date */
	public maxDate = new Date(2030, 11, 31);
selectedDate = new Date(2025, 5, 1); // June 01, 2025
 hlmH1 = hlmH1;
constructor(private themeService: ThemeService, private renderer:Renderer2) {}

ngOnInit() {
  this.themeService.initTheme();
  const isLight = document.documentElement.classList.contains('light');
  this.themeService.toggleDarkMode(isLight);
}

toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  this.themeService.toggleDarkMode(!isDark);
  const themeElement = document.querySelector('.theme');
    if (themeElement?.classList.contains('dark')) {
      this.renderer.removeClass(themeElement, 'dark');
    } else {
      this.renderer.addClass(themeElement, 'dark');
    }
}
}
