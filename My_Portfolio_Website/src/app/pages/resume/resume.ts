import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-resume',
  imports: [RouterLink, Navbar],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {}
