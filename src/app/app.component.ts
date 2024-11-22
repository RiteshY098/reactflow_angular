import {  Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WFDesignerComponent } from './WFDesignerContainer/WFDesignerContainer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WFDesignerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myangularapp';

}

