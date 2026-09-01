import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { EmCartazComponent } from './shared/components/em-cartaz/em-cartaz';
import { DetalhesComponent } from './pages/filme/detalhes';
import { NotFoundComponent } from './shared/components/not-found/not-found';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'filmes/em-cartaz' , component: EmCartazComponent},
    {path: 'filmes/detalhes/:id', component: DetalhesComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', component: NotFoundComponent}


];
