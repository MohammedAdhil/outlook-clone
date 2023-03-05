import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftComponent } from './components/draft/draft.component';
import { SendComponent } from './components/send/send.component';

const routes: Routes = [
  { path: '', component: SendComponent },
  { path: 'draft', component: DraftComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
