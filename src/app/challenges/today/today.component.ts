import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChallengeService } from '../challenge.service';
import { Day, DayStatus } from '../day.model';

@Component({
  selector: 'ns-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit, OnDestroy {
  currentDay: Day;
  isLoading = false;
  private curChallengeSub: Subscription;

  constructor(private challengeService: ChallengeService) {}

  ngOnInit() {
    this.curChallengeSub = this.challengeService.currentChallenge.subscribe(
      challenge => {
        if (challenge) {
          this.currentDay = challenge.currentDay;
        }
      }
    );
    this.isLoading = true;

    this.challengeService.fetchCurrentChallenge().subscribe(
      res => {
        console.log('Fetched challenge...');
        this.isLoading = false;
      },
      err => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  onActionSelected(action: DayStatus) {
    this.challengeService.updateDayStatus(this.currentDay.dayInMonth, action);
  }

  getActionName() {
    if (this.currentDay.status === DayStatus.Completed) {
      return 'complete';
    }
    if (this.currentDay.status === DayStatus.Failed) {
      return 'fail';
    }
    return null;
  }

  ngOnDestroy() {
    if (this.curChallengeSub) {
      this.curChallengeSub.unsubscribe();
    }
  }
}
