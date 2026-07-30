import { Component } from '@angular/core';
import { Skills } from "../skills/skills";

@Component({
  selector: 'app-about-me',
  imports: [Skills],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {}
