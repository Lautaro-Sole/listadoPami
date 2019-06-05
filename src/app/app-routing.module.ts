import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportAffiliatesComponent } from './pages/import-affiliates/import-affiliates.component';

const routes: Routes = [
  { path: 'importarafiliados', component: ImportAffiliatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
