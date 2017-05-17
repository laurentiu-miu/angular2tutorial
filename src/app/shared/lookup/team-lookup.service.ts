import { Injectable } from '@angular/core';
import {MOCK_TEAM_LOOKUP} from './mock-teams-lookup';
import {TeamLookup} from './team-lookup';

@Injectable()
export class TeamLookupService {

  getTeamsLookup(): TeamLookup[] {
    return MOCK_TEAM_LOOKUP;
  }

}
