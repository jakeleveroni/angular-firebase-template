import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { siteRoutes } from './app-routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatToolbarModule, MatFormFieldModule, MatInputModule, 
  MatCardModule, MatButtonModule, MatDialogModule, 
  MatIconModule, MatProgressSpinnerModule, MatMenuModule, MatSidenavModule, MatRadioModule, MatListModule 
} from '@angular/material';
import { UserFormSchemaService } from './services/form-schemas/user-form-schema.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateAccountModalComponent } from './components/modals/create-account-modal/create-account-modal.component';
import { AuthenticationService } from './services/firestore/firebase-authentication.service';
import { FirestoreService } from './services/firestore/firestore.service';
import { LoadingOverlayModalComponent } from './components/modals/loading-overlay-modal/loading-overlay-modal.component';
import { UtilityService } from './services/utility.service';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { LoadingService } from './services/loading.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { EditorComponent } from './components/editor/editor.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { DynamicSurveyModule } from './modules/dynamic-surveys-module/survey.module';
import { UserDataService } from './services/data-services/user-data.service';
import { SurveyManagerComponent } from './components/survey-manager/survey-manager.component';
import { SurveysListComponent } from './components/surveys-list/surveys-list.component';
import { SurveyDataService } from './services/data-services/survey-data.service';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(siteRoutes, 
      // {enableTracing: true}
    ),
    AngularFireModule.initializeApp(environment.firebase, 'super-nova-root'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    DynamicSurveyModule
  ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    HomePageComponent,
    LoginPageComponent,
    CreateAccountModalComponent,
    LoadingOverlayModalComponent,
    LoginModalComponent,
    AdminDashboardComponent,
    EditorComponent,
    UsersListComponent,
    UserManagerComponent,
    SurveyManagerComponent,
    SurveysListComponent,
    TruncatePipe,
  ],
  providers: [
    UserFormSchemaService,
    AuthenticationService,
    FirestoreService,
    UtilityService,
    LoadingService,
    AuthGuard,
    UserDataService,
    SurveyDataService
  ],
  entryComponents: [
    CreateAccountModalComponent,
    LoadingOverlayModalComponent,
    LoginModalComponent,
    EditorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
