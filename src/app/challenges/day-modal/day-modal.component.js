"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var day_model_1 = require("../day.model");
var DayModalComponent = /** @class */ (function () {
    function DayModalComponent(modalParams) {
        this.modalParams = modalParams;
        this.loadedStatus = null;
    }
    DayModalComponent.prototype.ngOnInit = function () {
        var parsedParams = this.modalParams.context;
        this.loadedDate = parsedParams.date;
        if (parsedParams.status === day_model_1.DayStatus.Completed) {
            this.loadedStatus = 'complete';
        }
        else if (parsedParams.status === day_model_1.DayStatus.Failed) {
            this.loadedStatus = 'fail';
        }
        else {
            this.loadedStatus = null;
        }
    };
    DayModalComponent.prototype.onHandleInput = function (action) {
        this.modalParams.closeCallback(action);
    };
    DayModalComponent = __decorate([
        core_1.Component({
            selector: 'ns-day-modal',
            templateUrl: './day-modal.component.html',
            styleUrls: ['./day-modal.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], DayModalComponent);
    return DayModalComponent;
}());
exports.DayModalComponent = DayModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRheS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBRXRFLDBDQUF5QztBQVF6QztJQUlFLDJCQUFvQixXQUE4QjtRQUE5QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFGbEQsaUJBQVksR0FBd0IsSUFBSSxDQUFDO0lBRVksQ0FBQztJQUV0RCxvQ0FBUSxHQUFSO1FBQ0UsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUdyQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxxQkFBUyxDQUFDLFNBQVMsRUFBRTtZQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztTQUNoQzthQUFNLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxxQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLE1BQWlCO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUF2QlUsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUtpQyxnQ0FBaUI7T0FKdkMsaUJBQWlCLENBd0I3QjtJQUFELHdCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuaW1wb3J0IHsgRGF5U3RhdHVzIH0gZnJvbSAnLi4vZGF5Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZGF5LW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RheS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RheS1tb2RhbC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgRGF5TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2FkZWREYXRlOiBEYXRlO1xuICBsb2FkZWRTdGF0dXM6ICdjb21wbGV0ZScgfCAnZmFpbCcgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxQYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHBhcnNlZFBhcmFtcyA9IHRoaXMubW9kYWxQYXJhbXMuY29udGV4dCBhcyB7XG4gICAgICBkYXRlOiBEYXRlO1xuICAgICAgc3RhdHVzOiBEYXlTdGF0dXM7XG4gICAgfTtcbiAgICB0aGlzLmxvYWRlZERhdGUgPSBwYXJzZWRQYXJhbXMuZGF0ZTtcbiAgICBpZiAocGFyc2VkUGFyYW1zLnN0YXR1cyA9PT0gRGF5U3RhdHVzLkNvbXBsZXRlZCkge1xuICAgICAgdGhpcy5sb2FkZWRTdGF0dXMgPSAnY29tcGxldGUnO1xuICAgIH0gZWxzZSBpZiAocGFyc2VkUGFyYW1zLnN0YXR1cyA9PT0gRGF5U3RhdHVzLkZhaWxlZCkge1xuICAgICAgdGhpcy5sb2FkZWRTdGF0dXMgPSAnZmFpbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGVkU3RhdHVzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvbkhhbmRsZUlucHV0KGFjdGlvbjogRGF5U3RhdHVzKSB7XG4gICAgdGhpcy5tb2RhbFBhcmFtcy5jbG9zZUNhbGxiYWNrKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==