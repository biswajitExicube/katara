import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageModule } from './home/home.module';
import { ComponentsModule } from '../components/components.module';
import { WhatsOnPageModule } from './whats-on/whats-on.module';
import { RestaurantsCafesPageModule } from './restaurants-cafes/restaurants-cafes.module';
import { ChildPageModule } from './child/child.module';
import { CommunitiesPageModule } from './communities/communities.module';
import { CarFinderPageModule } from './car-finder/car-finder.module';
import { BeachPageModule } from './beach/beach.module';
import { AboutPageModule } from './about/about.module';
import { UpcomingDevelopmentPageModule } from './upcoming-development/upcoming-development.module';
import { VolunteersClubPageModule } from './volunteers-club/volunteers-club.module';
import { StrategicPartnersPageModule } from './strategic-partners/strategic-partners.module';
import { NewsPageModule } from './news/news.module';
import { VisitingKataraPageModule } from './visiting-katara/visiting-katara.module';
import { AdmissionOpentimePageModule } from './admission-opentime/admission-opentime.module';
import { GettingHerePageModule } from './getting-here/getting-here.module';
import { HallReservationPageModule } from './hall-reservation/hall-reservation.module';
import { VenuesLandmarksPageModule } from './venues-landmarks/venues-landmarks.module';
import { PhotographyVideographyPageModule } from './photography-videography/photography-videography.module';
import { PreferencesPageModule } from './preferences/preferences.module';
import { FaqPageModule } from './faq/faq.module';


import { TranslateModule } from '@ngx-translate/core';
import { NewsDetailsPageModule } from './news-details/news-details.module';
import { EventDetailPageModule } from './event-detail/event-detail.module';
import { WhatsOnCategoryListPageModule } from './whats-on-category-list/whats-on-category-list.module';
import { CarFinderModalPageModule } from './car-finder-modal/car-finder-modal.module';
import { StoreModule } from '../redux/store/all_module';
import { NgReduxModule } from '@angular-redux/store';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomePageModule,
    WhatsOnPageModule,
    RestaurantsCafesPageModule,
    ChildPageModule,
    CommunitiesPageModule,
    CarFinderPageModule,
    BeachPageModule,
    AboutPageModule,
    UpcomingDevelopmentPageModule,
    VolunteersClubPageModule,
    StrategicPartnersPageModule,
    NewsPageModule,
    VisitingKataraPageModule,
    AdmissionOpentimePageModule,
    GettingHerePageModule,
    HallReservationPageModule,
    VenuesLandmarksPageModule,
    PhotographyVideographyPageModule,
    PreferencesPageModule,
    FaqPageModule,
    NewsDetailsPageModule,
    EventDetailPageModule,
    WhatsOnCategoryListPageModule,
    CarFinderModalPageModule,

    TranslateModule.forRoot(),
    StoreModule,
    NgReduxModule
  ],
  providers : [
  ]
})
export class CommonPageModule {}
