"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var day_model_1 = require("../day.model");
var ChallengeActionsComponent = /** @class */ (function () {
    function ChallengeActionsComponent() {
        this.actionSelect = new core_1.EventEmitter();
        this.cancelText = 'Cancel';
        this.chosen = null;
        this.startDone = false;
        this.action = null;
        this.done = false;
    }
    ChallengeActionsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.chosen) {
            this.action = changes.chosen.currentValue;
            if (changes.chosen.currentValue === null) {
                this.done = false;
            }
        }
        if (changes.startDone) {
            if (changes.startDone.currentValue) {
                this.done = true;
            }
        }
    };
    ChallengeActionsComponent.prototype.ngOnInit = function () { };
    ChallengeActionsComponent.prototype.onAction = function (action) {
        this.done = true;
        var status = day_model_1.DayStatus.Open;
        if (action === 'complete') {
            status = day_model_1.DayStatus.Completed;
            this.action = 'complete';
        }
        else if (action === 'fail') {
            status = day_model_1.DayStatus.Failed;
            this.action = 'fail';
        }
        else if (action === 'cancel') {
            this.action = null;
            this.done = false;
        }
        this.actionSelect.emit(status);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ChallengeActionsComponent.prototype, "actionSelect", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChallengeActionsComponent.prototype, "cancelText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ChallengeActionsComponent.prototype, "chosen", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChallengeActionsComponent.prototype, "startDone", void 0);
    ChallengeActionsComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-actions',
            templateUrl: './challenge-actions.component.html',
            styleUrls: ['./challenge-actions.component.scss'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [])
    ], ChallengeActionsComponent);
    return ChallengeActionsComponent;
}());
exports.ChallengeActionsComponent = ChallengeActionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBUXVCO0FBRXZCLDBDQUF5QztBQVF6QztJQVFFO1FBUFUsaUJBQVksR0FBRyxJQUFJLG1CQUFZLEVBQWEsQ0FBQztRQUM5QyxlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLFdBQU0sR0FBd0IsSUFBSSxDQUFDO1FBQ25DLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsV0FBTSxHQUF3QixJQUFJLENBQUM7UUFDbkMsU0FBSSxHQUFHLEtBQUssQ0FBQztJQUVFLENBQUM7SUFFaEIsK0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBRTFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNuQjtTQUNGO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3JCLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2xCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsNENBQVEsR0FBUixjQUFZLENBQUM7SUFFYiw0Q0FBUSxHQUFSLFVBQVMsTUFBc0M7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxNQUFNLEdBQUcscUJBQVMsQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxxQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztTQUMxQjthQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUM1QixNQUFNLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7YUFBTSxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBeENTO1FBQVQsYUFBTSxFQUFFOzttRUFBOEM7SUFDOUM7UUFBUixZQUFLLEVBQUU7O2lFQUF1QjtJQUN0QjtRQUFSLFlBQUssRUFBRTs7NkRBQW9DO0lBQ25DO1FBQVIsWUFBSyxFQUFFOztnRUFBbUI7SUFKaEIseUJBQXlCO1FBTnJDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7WUFDakQsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7O09BQ1cseUJBQXlCLENBMENyQztJQUFELGdDQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXlTdGF0dXMgfSBmcm9tICcuLi9kYXkubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jaGFsbGVuZ2UtYWN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFsbGVuZ2UtYWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYWxsZW5nZS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlQWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQE91dHB1dCgpIGFjdGlvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF5U3RhdHVzPigpO1xuICBASW5wdXQoKSBjYW5jZWxUZXh0ID0gJ0NhbmNlbCc7XG4gIEBJbnB1dCgpIGNob3NlbjogJ2NvbXBsZXRlJyB8ICdmYWlsJyA9IG51bGw7XG4gIEBJbnB1dCgpIHN0YXJ0RG9uZSA9IGZhbHNlO1xuICBhY3Rpb246ICdjb21wbGV0ZScgfCAnZmFpbCcgPSBudWxsO1xuICBkb25lID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5jaG9zZW4pIHtcbiAgICAgIHRoaXMuYWN0aW9uID0gY2hhbmdlcy5jaG9zZW4uY3VycmVudFZhbHVlO1xuXG4gICAgICBpZiAoY2hhbmdlcy5jaG9zZW4uY3VycmVudFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zdGFydERvbmUpIHtcbiAgICAgIGlmIChjaGFuZ2VzLnN0YXJ0RG9uZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgb25BY3Rpb24oYWN0aW9uOiAnY29tcGxldGUnIHwgJ2ZhaWwnIHwgJ2NhbmNlbCcpIHtcbiAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgIGxldCBzdGF0dXMgPSBEYXlTdGF0dXMuT3BlbjtcbiAgICBpZiAoYWN0aW9uID09PSAnY29tcGxldGUnKSB7XG4gICAgICBzdGF0dXMgPSBEYXlTdGF0dXMuQ29tcGxldGVkO1xuICAgICAgdGhpcy5hY3Rpb24gPSAnY29tcGxldGUnO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnZmFpbCcpIHtcbiAgICAgIHN0YXR1cyA9IERheVN0YXR1cy5GYWlsZWQ7XG4gICAgICB0aGlzLmFjdGlvbiA9ICdmYWlsJztcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmFjdGlvblNlbGVjdC5lbWl0KHN0YXR1cyk7XG4gIH1cbn1cbiJdfQ==