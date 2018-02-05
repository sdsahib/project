import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app';
  property = 'navbar-primary';
  left :boolean = true;
  lArrow = '<i class="fas fa-chevron-circle-left"></i>';
  rArrow = '<i class="fas fa-chevron-circle-right"></i>';
  OnClick() : void{
    if(this.property == 'navbar-primary'){
      this.property = 'navbar-primary collapsed';
      this.left =true;
    }
    else if(this.property == 'navbar-primary collapsed'){
      this.property = 'navbar-primary';
      this.left =false;
    }
    
      console.log(this.property + this.left);
  }
}
