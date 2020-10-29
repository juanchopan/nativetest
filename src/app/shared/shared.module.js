"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var action_bar_component_1 = require("./ui/action-bar/action-bar.component");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, router_1.NativeScriptRouterModule],
            declarations: [action_bar_component_1.ActionBarComponent],
            exports: [action_bar_component_1.ActionBarComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsNkVBQTBFO0FBQzFFLHNEQUF1RTtBQUN2RSxzREFBdUU7QUFPdkU7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQUx4QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsRUFBRSxpQ0FBd0IsQ0FBQztZQUM3RCxZQUFZLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztZQUNsQyxPQUFPLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztTQUM5QixDQUFDO09BQ1csWUFBWSxDQUFHO0lBQUQsbUJBQUM7Q0FBQSxBQUE1QixJQUE0QjtBQUFmLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi91aS9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtBY3Rpb25CYXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWN0aW9uQmFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge31cbiJdfQ==