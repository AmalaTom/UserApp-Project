import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
//define path for each component
//EmployeesListComponent
{
  path:'',component:EmployeesListComponent
},
//ViewEmployeeComponent
{
  path:'view-employee',component:ViewEmployeeComponent
},
//AddEmployeeComponent
{
  path:'add-employee',component:AddEmployeeComponent
},
//UpdateEmployeeComponent
{
  path:'update-employee',component:UpdateEmployeeComponent
},
//DeleteEmployeeComponent
{
  path:'delete-employee',component:DeleteEmployeeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
