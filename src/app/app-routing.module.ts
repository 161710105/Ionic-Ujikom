import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'karyawan', loadChildren: './karyawan/karyawan.module#KaryawanPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'jabatan', loadChildren: './jabatan/jabatan.module#JabatanPageModule' },
  { path: 'divisi', loadChildren: './divisi/divisi.module#DivisiPageModule' },
  { path: 'departemen', loadChildren: './departemen/departemen.module#DepartemenPageModule' },
  { path: 'gaji', loadChildren: './gaji/gaji.module#GajiPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
