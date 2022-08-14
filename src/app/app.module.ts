import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { NetworksComponent } from './networks/networks.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { DataBaseComponent } from './data-base/data-base.component';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
  
{ path:'',
  component:LoginComponent
  
},

{
  path:'calendar',
  component:CalendarComponent
},
{
  path:'net',
  component:NetworksComponent
},
{
  path:'ds',
  component:DataStructureComponent
},
{
  path:'cyber',
  component:CyberSecurityComponent
}
,
{
  path:'db',
  component:DataBaseComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'login',
  component:LoginComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    CyberSecurityComponent,
    NetworksComponent,
    DataStructureComponent,
    DataBaseComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
