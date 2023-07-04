import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActiveScenesComponent } from './components/active-scenes/active-scenes.component';
import { CreateProjectsComponent } from './components/create-projects/create-projects.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ScoresComponent } from './components/scores/scores.component';
import { SplashComponent } from './components/splash/splash.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { UsersComponent } from './components/users/users.component';
import { UserDialogComponent } from './components/users/users.component';
import { AddUserComponent } from './components/forms/add-user/add-user.component';
import { EditUserComponent } from './components/forms/edit-user/edit-user.component';
import { SideNavbarComponent } from './components/global-components/side-navbar/side-navbar.component';
import { ToolBarComponent } from './components/global-components/tool-bar/tool-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatTooltipModule} from "@angular/material/tooltip"; 
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    ActiveScenesComponent,
    CreateProjectsComponent,
    LoginComponent,
    ProjectsComponent,
    ScoresComponent,
    SplashComponent,
    TicketsComponent,
    UsersComponent,
    UserDialogComponent,
    AddUserComponent,
    EditUserComponent,
    SideNavbarComponent,
    ToolBarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRippleModule,
    FontAwesomeModule,
    MatSelectModule,
    MatMenuModule,
    LayoutModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
