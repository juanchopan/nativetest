"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var auth_component_1 = require("./auth.component");
var router_1 = require("nativescript-angular/router");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [auth_component_1.AuthComponent],
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule.forChild([
                    {
                        path: '',
                        component: auth_component_1.AuthComponent
                    }
                ]),
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule,
                shared_module_1.SharedModule
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLHdDQUFxRDtBQUVyRCx5REFBdUQ7QUFDdkQsbURBQWlEO0FBQ2pELHNEQUF1RTtBQWlCdkU7SUFBQTtJQUF5QixDQUFDO0lBQWIsVUFBVTtRQWZ0QixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzdCLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLFFBQVEsQ0FBQztvQkFDaEM7d0JBQ0UsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsU0FBUyxFQUFFLDhCQUFhO3FCQUN6QjtpQkFDRixDQUFDO2dCQUNGLCtCQUF1QjtnQkFDdkIsMkJBQW1CO2dCQUNuQiw0QkFBWTthQUNiO1NBQ0YsQ0FBQztPQUNXLFVBQVUsQ0FBRztJQUFELGlCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYixnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBdXRoQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50XG4gICAgICB9XG4gICAgXSksXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHt9XG4iXX0=