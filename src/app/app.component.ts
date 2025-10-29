import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-root',
  imports: [HlmButtonImports,AddUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'token-poc';
}
