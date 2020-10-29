import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';

import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html'
})
export class ChallengeEditComponent implements OnInit {
  isCreating = true;
  title = '';
  description = '';
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private challengeService: ChallengeService
  ) {}

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe(paramMap => {
    //   console.log(paramMap.get('mode'));
    // });

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('mode')) {
        this.isCreating = true;
      } else {
        this.isCreating = paramMap.get('mode') !== 'edit';
      }
      if (!this.isCreating) {
        this.challengeService.currentChallenge
          .pipe(
            take(1),
            switchMap(curChallenge => {
              if (!curChallenge) {
                this.isLoading = true;
                return this.challengeService.fetchCurrentChallenge();
              }
              return of(curChallenge);
            })
          )
          .subscribe(challenge => {
            if (challenge) {
              this.title = challenge.title;
              this.description = challenge.description;
            }
            this.isLoading = false;
          });
      } else {
        this.title = '';
        this.description = '';
      }
    });
  }

  onSubmit(title: string, description: string) {
    // ...
    if (this.isCreating) {
      this.challengeService
        .createNewChallenge(title, description)
        .subscribe(res => {
          this.router.navigate(['/challenges/current-challenge']);
        });
    } else {
      this.challengeService
        .updateChallenge(title, description)
        .subscribe(res => {
          this.router.navigate(['/challenges/current-challenge']);
        });
    }
  }
}
