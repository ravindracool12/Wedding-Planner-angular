import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { StaticContentService } from './static-content.service';
import { CareersComponent } from './static/careers.component';
import { ServicesComponent } from './services/services.component';
import { ServicesTypeComponent } from './services/services-type.component';
import { ServicestwoComponent } from './servicestwo/servicestwo.component';
import { PricingComponent } from './static/pricing.component';
import { HowToBecomePartnerComponent } from './static/how-to-become-partner.component';
import { FaqComponent } from './static//faq.component';
import { TermsConditionsComponent } from './static/terms-conditions.component';
import { PrivacyPolicyComponent } from './static/privacy-policy.component';
import { AboutusStaticComponent } from './contactus/aboutus-static.component';
import { CountactusStaticComponent } from './contactus/countactus-static.component';
import { CreateAlbumComponent } from './album/create-album.component';
import { ListAlbumComponent } from './album/list-album.component';
import { FullpageComponent } from './homepage/fullpage.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { PortfoliofrontComponent } from './portfolio/portfoliofront.component';
import { OccasionTypeComponent } from './occasions/occasion-type.component';
import { OccasionstwoComponent } from './occasionstwo/occasionstwo.component';
import { ThemeComponent } from './occasions/theme.component';
import { PageComponent } from './page/page.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile/profile-details.component';
import { ReviewComponent } from './review/review.component';
import { OcassionsStaticpageComponent } from './occasions/occasions-staticpage.component';
import { LoginComponent } from './login/login.component';
import { LocationsComponent } from './locations/locations.component';
import { RegisterComponent } from './register/register.component';
import { BlogComponent } from './blog/blog.component';
import { AuthGuard } from './auth.guard';
import { VendorsComponent } from './vendors/vendors.component';
// import { VendorsSrviceSelectionComponent } from './vendors/service-selection.component';


const routes: Routes = [
  { path: 'todos', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'locations', component: LocationsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'servicestwo', component: ServicestwoComponent},
  { path: 'services-type', component: ServicesTypeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'aboutus', component: AboutusStaticComponent},
  { path: 'ourstory', component: OurStoryComponent},
  { path: 'countactus', component: CountactusStaticComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile-details', component: ProfileDetailsComponent},
  { path: 'review', component: ReviewComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'terms-conditions', component: TermsConditionsComponent},
  { path: 'partner-with-us', component: HowToBecomePartnerComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: FullpageComponent},
  { path: 'gallery', component: GalleryComponentComponent},
  { path: 'occasions', component: OcassionsStaticpageComponent},
  { path: 'occasionstwo', component: OccasionstwoComponent},
  { path: 'occasion-type', component: OccasionTypeComponent},
  { path: 'theme', component: ThemeComponent},
  { path: 'page', component: PageComponent},
  { path: 'home', component: PortfoliofrontComponent, canActivate: [AuthGuard]},
  { path: 'portfolio', component: PortfoliofrontComponent, canActivate: [AuthGuard]},
  { path: 'list', component: ListAlbumComponent, canActivate: [AuthGuard]},
  { path: 'create', component: CreateAlbumComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'vendors', component: VendorsComponent},
  // { path: 'vendors-service-selection', component: VendorsServiceSelectionComponent},


// { path: 'login', component: LoginComponent}
  // otherwise redirect to home
  // { path: '**', redirectTo: 'todos' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
