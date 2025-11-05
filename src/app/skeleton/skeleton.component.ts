import { Component, Input } from '@angular/core';
import { HlmSkeletonImports } from '@spartan-ng/helm/skeleton';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'spartan-skeleton-preview',
	imports: [HlmSkeletonImports,CommonModule],
  standalone: true,
// 	template: `
// 		<ng-container [ngSwitch]="skeletonType">

//   <!-- User Info Skeleton -->
//   <ng-container *ngSwitchCase="'user'">
//     <div class="flex items-center space-x-4">
//       <hlm-skeleton class="size-12 rounded-full" />
//       <div class="space-y-2">
//         <hlm-skeleton class="h-4 w-[250px]" />
//         <hlm-skeleton class="h-4 w-[200px]" />
//       </div>
//     </div>
//   </ng-container>

//   <!-- Card Skeleton -->
//   <ng-container *ngSwitchCase="'card'">
//     <div class="flex flex-col space-y-3">
//       <hlm-skeleton class="h-[125px] w-[250px] rounded-xl" />
//       <div class="space-y-2">
//         <hlm-skeleton class="h-4 w-[250px]" />
//         <hlm-skeleton class="h-4 w-[200px]" />
//       </div>
//     </div>
//   </ng-container>

//   <!-- Default fallback -->
//   <ng-container *ngSwitchDefault>
//     <p>No skeleton type selected.</p>
//   </ng-container>

// </ng-container>
// 	`,
template: ``
})
export class SkeletonPreview {
   @Input() skeletonType: 'user' | 'card' = 'user'; // default to 'user'
}