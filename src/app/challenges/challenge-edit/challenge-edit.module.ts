import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChallengeEditComponent } from './challenge-edit.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ChallengeEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    // NativeScriptRouterModule,
    RouterModule.forChild([
      { path: '', component: ChallengeEditComponent }
    ]),
    SharedModule
  ]
})
export class ChallengeEditModule {}
