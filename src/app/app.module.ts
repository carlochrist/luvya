import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent, MatchDataDialog } from './game/game.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPwComponent } from './login/reset-pw/reset-pw.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { MustMatchDirective } from './helpers/must-match.directive';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfilePicturesComponent } from './profile/profile-pictures/profile-pictures.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxImageEditorModule } from "ngx-image-editor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HammerCardComponent } from './hammerjs/hammer-card/hammer-card.component';
import { HammertimeDirective } from './hammerjs/hammertime.directive';
import { AngularImgComponent } from './animations/angular-img/angular-img.component';
import { DatePipe } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MatchDialogComponent } from './game/match-dialog/match-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WebsocketService } from 'src/services/websocket.service';
import { ChatService } from 'src/services/chat.service';
import { MatchesComponent } from './chat/matches/matches.component';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // override hammerjs default configuration
    'swipe': { direction: Hammer.DIRECTION_ALL }
  }
}


@NgModule({
  exports: [
    MatDialogModule,
    MatInputModule,
    MatTableModule,
  ],
  entryComponents: [MatchDialogComponent],
  declarations: [
    AppComponent,
    GameComponent,
    StartComponent,
    HeaderComponent,
    NavbarComponent,
    ProfileComponent,
    ChatComponent,
    SettingsComponent,
    LoginComponent,
    ResetPwComponent,
    SignUpComponent,
    SignInComponent,
    MustMatchDirective,
    AdminComponent,
    MainComponent,
    MenuComponent,
    ProfileDetailComponent,
    ProfilePicturesComponent,
    HammerCardComponent,
    AngularImgComponent,
    MatchDataDialog,
    MatchDialogComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgxImageEditorModule,
    BrowserAnimationsModule,
    ImageCropperModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
    ChatService,
    WebsocketService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
