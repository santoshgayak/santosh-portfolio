import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from "./components/hero/hero";
import { ValueProposition } from "./components/value-proposition/value-proposition";
import { WorkProcess } from "./components/work-process/work-process";
import { Projects } from "./components/projects/projects";
import { WhatYouGet } from "./components/what-you-get/what-you-get";
import { AboutMe } from "./components/about-me/about-me";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, ValueProposition, WorkProcess, Projects, WhatYouGet, AboutMe, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My_Portfolio_Website');
}
