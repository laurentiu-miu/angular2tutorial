import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { PlayerListComponent } from './player-list/player-list.component';
import { PlayersRoutingModule } from './players.routing';
import { SharedModule } from '../shared/shared.module';
import { PlayersProfileComponent } from './players-profile/players-profile.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule(
  {
    imports: [ BrowserModule, ReactiveFormsModule, PlayersRoutingModule, SharedModule ],
    declarations: [ PlayerListComponent, PlayersProfileComponent, RegistrationComponent ]
  }
)
export class PlayerModule {}
