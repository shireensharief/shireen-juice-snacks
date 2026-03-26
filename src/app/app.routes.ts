import { Routes } from '@angular/router';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
  { path: '', component: QrCodeComponent },
  { path: 'menu', component: MenuComponent },
];
