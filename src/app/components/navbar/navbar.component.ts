import { Component, OnInit } from '@angular/core';
import { TokenomicsComponent } from '../tokenomics/tokenomics.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  btnClick=function () {
    this.router.navigateByUrl('./tokenomics.component.html');
};
}
