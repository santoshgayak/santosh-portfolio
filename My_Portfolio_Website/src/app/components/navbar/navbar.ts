import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgClass, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  showMenu = false;
  constructor(){

  }

  toggle() {
    this.showMenu = !this.showMenu;
    console.log('Clicked');
  }
  closeMenu() {
  this.showMenu = false;
}
}