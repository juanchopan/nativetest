"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var challenge_tabs_component_1 = require("./challenge-tabs/challenge-tabs.component");
var today_component_1 = require("./today/today.component");
var current_challenge_component_1 = require("./current-challenge/current-challenge.component");
var routes = [
    {
        path: 'tabs',
        component: challenge_tabs_component_1.ChallengeTabsComponent,
        children: [
            { path: 'today', component: today_component_1.TodayComponent, outlet: 'today' },
            {
                path: 'current-challenge',
                component: current_challenge_component_1.CurrentChallengeComponent,
                outlet: 'currentChallenge'
            }
        ]
    },
    {
        path: ':mode',
        loadChildren: '~/app/challenges/challenge-edit/challenge-edit.module#ChallengeEditModule'
    },
    { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full' }
];
var ChallengesRoutingModule = /** @class */ (function () {
    function ChallengesRoutingModule() {
    }
    ChallengesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ChallengesRoutingModule);
    return ChallengesRoutingModule;
}());
exports.ChallengesRoutingModule = ChallengesRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlcy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYWxsZW5nZXMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLHNGQUFtRjtBQUNuRiwyREFBeUQ7QUFDekQsK0ZBQTRGO0FBRTVGLElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsaURBQXNCO1FBQ2pDLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO1lBQzdEO2dCQUNFLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLFNBQVMsRUFBRSx1REFBeUI7Z0JBQ3BDLE1BQU0sRUFBRSxrQkFBa0I7YUFDM0I7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFlBQVksRUFDViwyRUFBMkU7S0FDOUU7SUFDRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7Q0FDaEUsQ0FBQztBQU1GO0lBQUE7SUFBc0MsQ0FBQztJQUExQix1QkFBdUI7UUFKbkMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3BDLENBQUM7T0FDVyx1QkFBdUIsQ0FBRztJQUFELDhCQUFDO0NBQUEsQUFBdkMsSUFBdUM7QUFBMUIsMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9kYXlDb21wb25lbnQgfSBmcm9tICcuL3RvZGF5L3RvZGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IH0gZnJvbSAnLi9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICd0YWJzJyxcbiAgICBjb21wb25lbnQ6IENoYWxsZW5nZVRhYnNDb21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgcGF0aDogJ3RvZGF5JywgY29tcG9uZW50OiBUb2RheUNvbXBvbmVudCwgb3V0bGV0OiAndG9kYXknIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdjdXJyZW50LWNoYWxsZW5nZScsXG4gICAgICAgIGNvbXBvbmVudDogQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCxcbiAgICAgICAgb3V0bGV0OiAnY3VycmVudENoYWxsZW5nZSdcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnOm1vZGUnLFxuICAgIGxvYWRDaGlsZHJlbjpcbiAgICAgICd+L2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0Lm1vZHVsZSNDaGFsbGVuZ2VFZGl0TW9kdWxlJ1xuICB9LFxuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2NoYWxsZW5nZXMvdGFicycsIHBhdGhNYXRjaDogJ2Z1bGwnIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZXNSb3V0aW5nTW9kdWxlIHt9XG4iXX0=