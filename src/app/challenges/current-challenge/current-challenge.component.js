"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var day_modal_component_1 = require("../day-modal/day-modal.component");
var ui_service_1 = require("~/app/shared/ui.service");
var challenge_service_1 = require("../challenge.service");
var day_model_1 = require("../day.model");
var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent(modalDialog, vcRef, uiService, challengeService) {
        this.modalDialog = modalDialog;
        this.vcRef = vcRef;
        this.uiService = uiService;
        this.challengeService = challengeService;
        this.weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }
    CurrentChallengeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.curChallengeSub = this.challengeService.currentChallenge.subscribe(function (challenge) {
            _this.currentChallenge = challenge;
        });
    };
    CurrentChallengeComponent.prototype.getIsSettable = function (dayInMonth) {
        return dayInMonth <= new Date().getDate();
    };
    CurrentChallengeComponent.prototype.getRow = function (index, day) {
        var startRow = 1;
        var weekRow = Math.floor(index / 7);
        var firstWeekDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
        var irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
        return startRow + weekRow + irregularRow;
    };
    CurrentChallengeComponent.prototype.onChangeStatus = function (day) {
        var _this = this;
        if (!this.getIsSettable(day.dayInMonth)) {
            return;
        }
        this.modalDialog
            .showModal(day_modal_component_1.DayModalComponent, {
            fullscreen: true,
            viewContainerRef: this.uiService.getRootVCRef()
                ? this.uiService.getRootVCRef()
                : this.vcRef,
            context: { date: day.date, status: day.status }
        })
            .then(function (status) {
            if (status === day_model_1.DayStatus.Open) {
                return;
            }
            _this.challengeService.updateDayStatus(day.dayInMonth, status);
        });
    };
    CurrentChallengeComponent.prototype.ngOnDestroy = function () {
        if (this.curChallengeSub) {
            this.curChallengeSub.unsubscribe();
        }
    };
    CurrentChallengeComponent = __decorate([
        core_1.Component({
            selector: 'ns-current-challenge',
            templateUrl: './current-challenge.component.html',
            styleUrls: [
                './_current-challenge.component.common.scss',
                './current-challenge.component.scss'
            ],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            ui_service_1.UIService,
            challenge_service_1.ChallengeService])
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
}());
exports.CurrentChallengeComponent = CurrentChallengeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBQy9FLGtFQUF1RTtBQUd2RSx3RUFBcUU7QUFDckUsc0RBQW9EO0FBQ3BELDBEQUF3RDtBQUV4RCwwQ0FBOEM7QUFXOUM7SUFLRSxtQ0FDVSxXQUErQixFQUMvQixLQUF1QixFQUN2QixTQUFvQixFQUNwQixnQkFBa0M7UUFIbEMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVI1QyxhQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQVM1QyxDQUFDO0lBRUosNENBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUNyRSxVQUFBLFNBQVM7WUFDUCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELGlEQUFhLEdBQWIsVUFBYyxVQUFrQjtRQUM5QixPQUFPLFVBQVUsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCwwQ0FBTSxHQUFOLFVBQU8sS0FBYSxFQUFFLEdBQThDO1FBQ2xFLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFNLG1CQUFtQixHQUFHLElBQUksSUFBSSxDQUNsQyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUN4QixJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUNyQixDQUFDLENBQ0YsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpFLE9BQU8sUUFBUSxHQUFHLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDM0MsQ0FBQztJQUVELGtEQUFjLEdBQWQsVUFBZSxHQUFRO1FBQXZCLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVc7YUFDYixTQUFTLENBQUMsdUNBQWlCLEVBQUU7WUFDNUIsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7Z0JBQzdDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2QsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUU7U0FDaEQsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLE1BQWlCO1lBQ3RCLElBQUksTUFBTSxLQUFLLHFCQUFTLENBQUMsSUFBSSxFQUFFO2dCQUM3QixPQUFPO2FBQ1I7WUFDRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQTdEVSx5QkFBeUI7UUFUckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUU7Z0JBQ1QsNENBQTRDO2dCQUM1QyxvQ0FBb0M7YUFDckM7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FPdUIsaUNBQWtCO1lBQ3hCLHVCQUFnQjtZQUNaLHNCQUFTO1lBQ0Ysb0NBQWdCO09BVGpDLHlCQUF5QixDQThEckM7SUFBRCxnQ0FBQztDQUFBLEFBOURELElBOERDO0FBOURZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF5TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9kYXktbW9kYWwvZGF5LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvdWkuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhbGxlbmdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlIH0gZnJvbSAnLi4vY2hhbGxlbmdlLm1vZGVsJztcbmltcG9ydCB7IERheSwgRGF5U3RhdHVzIH0gZnJvbSAnLi4vZGF5Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtY3VycmVudC1jaGFsbGVuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9fY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmNvbW1vbi5zY3NzJyxcbiAgICAnLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB3ZWVrRGF5cyA9IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddO1xuICBjdXJyZW50Q2hhbGxlbmdlOiBDaGFsbGVuZ2U7XG4gIHByaXZhdGUgY3VyQ2hhbGxlbmdlU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbERpYWxvZzogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB1aVNlcnZpY2U6IFVJU2VydmljZSxcbiAgICBwcml2YXRlIGNoYWxsZW5nZVNlcnZpY2U6IENoYWxsZW5nZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3VyQ2hhbGxlbmdlU3ViID0gdGhpcy5jaGFsbGVuZ2VTZXJ2aWNlLmN1cnJlbnRDaGFsbGVuZ2Uuc3Vic2NyaWJlKFxuICAgICAgY2hhbGxlbmdlID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2hhbGxlbmdlID0gY2hhbGxlbmdlO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBnZXRJc1NldHRhYmxlKGRheUluTW9udGg6IG51bWJlcikge1xuICAgIHJldHVybiBkYXlJbk1vbnRoIDw9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICB9XG5cbiAgZ2V0Um93KGluZGV4OiBudW1iZXIsIGRheTogeyBkYXlJbk1vbnRoOiBudW1iZXI7IGRheUluV2VlazogbnVtYmVyIH0pIHtcbiAgICBjb25zdCBzdGFydFJvdyA9IDE7XG4gICAgY29uc3Qgd2Vla1JvdyA9IE1hdGguZmxvb3IoaW5kZXggLyA3KTtcbiAgICBjb25zdCBmaXJzdFdlZWtEYXlPZk1vbnRoID0gbmV3IERhdGUoXG4gICAgICBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICBuZXcgRGF0ZSgpLmdldE1vbnRoKCksXG4gICAgICAxXG4gICAgKS5nZXREYXkoKTtcbiAgICBjb25zdCBpcnJlZ3VsYXJSb3cgPSBkYXkuZGF5SW5XZWVrIDwgZmlyc3RXZWVrRGF5T2ZNb250aCA/IDEgOiAwO1xuXG4gICAgcmV0dXJuIHN0YXJ0Um93ICsgd2Vla1JvdyArIGlycmVndWxhclJvdztcbiAgfVxuXG4gIG9uQ2hhbmdlU3RhdHVzKGRheTogRGF5KSB7XG4gICAgaWYgKCF0aGlzLmdldElzU2V0dGFibGUoZGF5LmRheUluTW9udGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubW9kYWxEaWFsb2dcbiAgICAgIC5zaG93TW9kYWwoRGF5TW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy51aVNlcnZpY2UuZ2V0Um9vdFZDUmVmKClcbiAgICAgICAgICA/IHRoaXMudWlTZXJ2aWNlLmdldFJvb3RWQ1JlZigpXG4gICAgICAgICAgOiB0aGlzLnZjUmVmLFxuICAgICAgICBjb250ZXh0OiB7IGRhdGU6IGRheS5kYXRlLCBzdGF0dXM6IGRheS5zdGF0dXMgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKChzdGF0dXM6IERheVN0YXR1cykgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBEYXlTdGF0dXMuT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYWxsZW5nZVNlcnZpY2UudXBkYXRlRGF5U3RhdHVzKGRheS5kYXlJbk1vbnRoLCBzdGF0dXMpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jdXJDaGFsbGVuZ2VTdWIpIHtcbiAgICAgIHRoaXMuY3VyQ2hhbGxlbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=