import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from '../to-do/to-do.component';
import { SuggestComponent } from '../suggest/suggest.component';

const routes: Routes = [
  { path: '', component: ToDoComponent, },
  { path: 'suggest', component: SuggestComponent, }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
