import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/components/banner/banner';
import { EmCartazComponent } from '../../shared/components/em-cartaz/em-cartaz';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, EmCartazComponent, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
