import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path: 'main', 
    component: MainComponent,
    canActivate: [AuthGuard],
    
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      // { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
