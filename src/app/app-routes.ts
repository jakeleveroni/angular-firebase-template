import { Route } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AuthGuard } from "./guards/auth.guard";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserManagerComponent } from "./components/user-manager/user-manager.component";
import { SurveysListComponent } from "./components/surveys-list/surveys-list.component";
import { SurveyManagerComponent } from "./components/survey-manager/survey-manager.component";

export const siteRoutes: Array<Route> = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomePageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], children: [
        {path: 'users', component: UsersListComponent},
        {path: 'users/create', component: UserManagerComponent},   
        {path: 'surveys', component: SurveysListComponent},
        {path: 'surveys/create', component: SurveyManagerComponent},
    ]}
]