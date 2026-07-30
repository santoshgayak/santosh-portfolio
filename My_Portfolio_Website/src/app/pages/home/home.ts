import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { ValueProposition } from '../../components/value-proposition/value-proposition';
import { WhatYouGet } from '../../components/what-you-get/what-you-get';
import { Projects } from '../../components/projects/projects';
import { WorkProcess } from '../../components/work-process/work-process';
import { AboutMe } from '../../components/about-me/about-me';
import { Contact } from '../../components/contact/contact';
import { Skills } from '../../components/skills/skills';


@Component({
  selector: 'app-home',
  imports: [ RouterLink,
      Navbar,
      Hero,
      ValueProposition,
      WhatYouGet,
      Projects,
      WorkProcess,
      AboutMe,
      Skills,
      Contact

    ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
