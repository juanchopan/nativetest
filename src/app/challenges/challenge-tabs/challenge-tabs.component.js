"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var challenge_service_1 = require("../challenge.service");
var ChallengeTabsComponent = /** @class */ (function () {
    function ChallengeTabsComponent(router, active, page, challengeService) {
        this.router = router;
        this.active = active;
        this.page = page;
        this.challengeService = challengeService;
        this.isLoading = false;
    }
    ChallengeTabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.challengeService.fetchCurrentChallenge().subscribe(function (res) {
            console.log('Fetched challenge...');
            _this.isLoading = false;
            _this.loadTabRoutes();
        }, function (err) {
            console.log(err);
            _this.isLoading = false;
            _this.loadTabRoutes();
        });
        this.page.actionBarHidden = true;
    };
    ChallengeTabsComponent.prototype.loadTabRoutes = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate([
                {
                    outlets: {
                        currentChallenge: ['current-challenge'],
                        today: ['today']
                    }
                }
            ], {
                relativeTo: _this.active
            });
        }, 10);
    };
    ChallengeTabsComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-tabs',
            templateUrl: './challenge-tabs.component.html',
            styleUrls: ['./challenge-tabs.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_2.RouterExtensions,
            router_1.ActivatedRoute,
            page_1.Page,
            challenge_service_1.ChallengeService])
    ], ChallengeTabsComponent);
    return ChallengeTabsComponent;
}());
exports.ChallengeTabsComponent = ChallengeTabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFDL0QsaURBQWdEO0FBRWhELDBEQUF3RDtBQVF4RDtJQUdFLGdDQUNVLE1BQXdCLEVBQ3hCLE1BQXNCLEVBQ3RCLElBQVUsRUFDVixnQkFBa0M7UUFIbEMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFONUMsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU9mLENBQUM7SUFFSix5Q0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLENBQUMsU0FBUyxDQUNyRCxVQUFBLEdBQUc7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRU8sOENBQWEsR0FBckI7UUFBQSxpQkFnQkM7UUFmQyxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEI7Z0JBQ0U7b0JBQ0UsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQixFQUFFLENBQUMsbUJBQW1CLENBQUM7d0JBQ3ZDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQztxQkFDakI7aUJBQ0Y7YUFDRixFQUNEO2dCQUNFLFVBQVUsRUFBRSxLQUFJLENBQUMsTUFBTTthQUN4QixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBNUNVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1lBQzdDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUtrQix5QkFBZ0I7WUFDaEIsdUJBQWM7WUFDaEIsV0FBSTtZQUNRLG9DQUFnQjtPQVBqQyxzQkFBc0IsQ0E2Q2xDO0lBQUQsNkJBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlU2VydmljZSB9IGZyb20gJy4uL2NoYWxsZW5nZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtY2hhbGxlbmdlLXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgYWN0aXZlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSBjaGFsbGVuZ2VTZXJ2aWNlOiBDaGFsbGVuZ2VTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5jaGFsbGVuZ2VTZXJ2aWNlLmZldGNoQ3VycmVudENoYWxsZW5nZSgpLnN1YnNjcmliZShcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGVkIGNoYWxsZW5nZS4uLicpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRUYWJSb3V0ZXMoKTtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRUYWJSb3V0ZXMoKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIGxvYWRUYWJSb3V0ZXMoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG91dGxldHM6IHtcbiAgICAgICAgICAgICAgY3VycmVudENoYWxsZW5nZTogWydjdXJyZW50LWNoYWxsZW5nZSddLFxuICAgICAgICAgICAgICB0b2RheTogWyd0b2RheSddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmVcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LCAxMCk7XG4gIH1cbn1cbiJdfQ==