import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer';
import { HomeComponent } from './pages/home/home';
import { DetalhesComponent } from "./pages/filme/detalhes";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
 imports: [HeaderComponent, FooterComponent, HomeComponent, DetalhesComponent, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'pw3-ingresso-ui';
}
