import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { TempComponent } from './temp/temp.component'; 
import { ReactComponent } from './react/react.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'form' , component: FormComponent , children:[
    { path: 'temp' , component: TempComponent },
    { path: 'react' , component: ReactComponent},
  ]},
  { path: 'home' , component: HomeComponent},

 { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule), canActivate: [AuthGuard] },
 { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) , canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
