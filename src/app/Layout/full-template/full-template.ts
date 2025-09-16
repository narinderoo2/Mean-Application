import { Component } from '@angular/core';
import { Header } from '../../Modules/Header-Footer/header/header';
import { Footer } from '../../Modules/Header-Footer/footer/footer';
import { Sidebar } from '../../Modules/Header-Footer/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-full-template',
  imports: [Header, Footer, Sidebar,RouterOutlet],
  templateUrl: './full-template.html',
  styleUrl: './full-template.scss'
})
export class FullTemplate {

}
