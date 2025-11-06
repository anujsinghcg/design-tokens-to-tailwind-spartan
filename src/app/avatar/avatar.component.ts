import { Component, Input } from '@angular/core';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  imports: [CommonModule, HlmAvatarImports],
  template: `
    <div hlmAvatar class="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
      <img
        *ngIf="showImage"
        [src]="src"
        [alt]="alt"
        hlmAvatarImage
        class="w-full h-full object-cover"
        (error)="showImage = false"
      />
      <span *ngIf="!showImage" hlmAvatarFallback class="bg-[#FD005B] text-white">
        {{ fallbackText }}
      </span>
    </div>
  `
})
export class UserAvatarComponent {
  @Input() src!: string;
  @Input() alt: string = 'Avatar image';
  @Input() fallbackText: string = '??';
  showImage = true;
}