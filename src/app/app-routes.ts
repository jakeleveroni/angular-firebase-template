import { Route } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AuthGuard } from "./guards/auth.guard";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { ContestantsListComponent } from "./components/contestants-list/contestants-list.component";
import { UserManagerComponent } from "./components/user-manager/user-manager.component";
import { ContestantManagerComponent } from "./components/contestant-manager/contestant-manager.component";

export const siteRoutes: Array<Route> = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomePageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], children: [
        {path: 'users', component: UsersListComponent},
        {path: 'users/create', component: UserManagerComponent},        
        {path: 'contestants', component: ContestantsListComponent},
        {path: 'contestants/create', component: ContestantManagerComponent}
    ]}
]