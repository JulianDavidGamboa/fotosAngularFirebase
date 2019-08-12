import { Routes, RouterModule, Router } from '@angular/router';
import { FotosComponent } from './app/components/fotos/fotos.component';
import { CargaComponent } from './app/components/carga/carga.component';

const RUTAS: Routes = [
    { path: 'fotos', component: FotosComponent },
    { path: 'carga', component: CargaComponent },
    { path: '**', pathMatch: 'full', redirectTo:'fotos' }
];

export const APP_ROUTES = RouterModule.forRoot( RUTAS );