"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var challenges_routing_module_1 = require("./challenges-routing.module");
var challenge_tabs_component_1 = require("./challenge-tabs/challenge-tabs.component");
var current_challenge_component_1 = require("./current-challenge/current-challenge.component");
var today_component_1 = require("./today/today.component");
var shared_module_1 = require("../shared/shared.module");
var challenge_actions_module_1 = require("./challenge-actions/challenge-actions.module");
var ChallengesModule = /** @class */ (function () {
    function ChallengesModule() {
    }
    ChallengesModule = __decorate([
        core_1.NgModule({
            declarations: [
                challenge_tabs_component_1.ChallengeTabsComponent,
                current_challenge_component_1.CurrentChallengeComponent,
                today_component_1.TodayComponent
            ],
            imports: [
                common_1.NativeScriptCommonModule,
                challenges_routing_module_1.ChallengesRoutingModule,
                shared_module_1.SharedModule,
                challenge_actions_module_1.ChallengeActionsModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ChallengesModule);
    return ChallengesModule;
}());
exports.ChallengesModule = ChallengesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFsbGVuZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUseUVBQXNFO0FBQ3RFLHNGQUFtRjtBQUNuRiwrRkFBNEY7QUFDNUYsMkRBQXlEO0FBQ3pELHlEQUF1RDtBQUN2RCx5RkFBc0Y7QUFnQnRGO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixnQkFBZ0I7UUFkNUIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGlEQUFzQjtnQkFDdEIsdURBQXlCO2dCQUN6QixnQ0FBYzthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGlDQUF3QjtnQkFDeEIsbURBQXVCO2dCQUN2Qiw0QkFBWTtnQkFDWixpREFBc0I7YUFDdkI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csZ0JBQWdCLENBQUc7SUFBRCx1QkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDaGFsbGVuZ2VzUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY2hhbGxlbmdlcy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gJy4vY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSAnLi90b2RheS90b2RheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlQWN0aW9uc01vZHVsZSB9IGZyb20gJy4vY2hhbGxlbmdlLWFjdGlvbnMvY2hhbGxlbmdlLWFjdGlvbnMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCxcbiAgICBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxuICAgIFRvZGF5Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgQ2hhbGxlbmdlc1JvdXRpbmdNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIENoYWxsZW5nZUFjdGlvbnNNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZXNNb2R1bGUge31cbiJdfQ==