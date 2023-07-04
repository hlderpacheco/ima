import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {

  constructor( private router: Router )
  {}

  redirctTo()
  {
    return this.router.navigate(['/add-user']);
  }

}
