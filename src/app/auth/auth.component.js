"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("nativescript-angular/router");
var auth_service_1 = require("./auth.service");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true;
        this.isLogin = true;
        this.isLoading = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new forms_1.FormGroup({
            email: new forms_1.FormControl(null, {
                updateOn: 'blur',
                validators: [forms_1.Validators.required, forms_1.Validators.email]
            }),
            password: new forms_1.FormControl(null, {
                updateOn: 'blur',
                validators: [forms_1.Validators.required, forms_1.Validators.minLength(6)]
            })
        });
        this.form.get('email').statusChanges.subscribe(function (status) {
            _this.emailControlIsValid = status === 'VALID';
        });
        this.form.get('password').statusChanges.subscribe(function (status) {
            _this.passwordControlIsValid = status === 'VALID';
        });
    };
    AuthComponent.prototype.onSubmit = function () {
        var _this = this;
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();
        if (!this.form.valid) {
            return;
        }
        var email = this.form.get('email').value;
        var password = this.form.get('password').value;
        this.form.reset();
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true;
        this.isLoading = true;
        if (this.isLogin) {
            this.authService.login(email, password).subscribe(function (resData) {
                _this.isLoading = false;
                _this.router.navigate(['/challenges']);
            }, function (err) {
                console.log(err);
                _this.isLoading = false;
            });
        }
        else {
            this.authService.signUp(email, password).subscribe(function (resData) {
                _this.isLoading = false;
                _this.router.navigate(['/challenges']);
            }, function (err) {
                console.log(err);
                _this.isLoading = false;
            });
        }
    };
    AuthComponent.prototype.onDone = function () {
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();
    };
    AuthComponent.prototype.onSwitch = function () {
        this.isLogin = !this.isLogin;
    };
    __decorate([
        core_1.ViewChild('passwordEl'),
        __metadata("design:type", core_1.ElementRef)
    ], AuthComponent.prototype, "passwordEl", void 0);
    __decorate([
        core_1.ViewChild('emailEl'),
        __metadata("design:type", core_1.ElementRef)
    ], AuthComponent.prototype, "emailEl", void 0);
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'ns-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            auth_service_1.AuthService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSx3Q0FBb0U7QUFDcEUsc0RBQStEO0FBRy9ELCtDQUE2QztBQVE3QztJQVNFLHVCQUNVLE1BQXdCLEVBQ3hCLFdBQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVGxDLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQiwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFPZixDQUFDO0lBRUosZ0NBQVEsR0FBUjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUN4QixLQUFLLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRTtnQkFDM0IsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFVBQVUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsS0FBSyxDQUFDO2FBQ3BELENBQUM7WUFDRixRQUFRLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRTtnQkFDOUIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFVBQVUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNELENBQUM7U0FDSCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuRCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxLQUFLLE9BQU8sQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVI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O1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVdrQix5QkFBZ0I7WUFDWCwwQkFBVztPQVh2QixhQUFhLENBb0Z6QjtJQUFELG9CQUFDO0NBQUEsQUFwRkQsSUFvRkM7QUFwRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtYXV0aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0aC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgZW1haWxDb250cm9sSXNWYWxpZCA9IHRydWU7XG4gIHBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICBpc0xvZ2luID0gdHJ1ZTtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ3Bhc3N3b3JkRWwnKSBwYXNzd29yZEVsOiBFbGVtZW50UmVmPFRleHRGaWVsZD47XG4gIEBWaWV3Q2hpbGQoJ2VtYWlsRWwnKSBlbWFpbEVsOiBFbGVtZW50UmVmPFRleHRGaWVsZD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCB7XG4gICAgICAgIHVwZGF0ZU9uOiAnYmx1cicsXG4gICAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXVxuICAgICAgfSksXG4gICAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKG51bGwsIHtcbiAgICAgICAgdXBkYXRlT246ICdibHVyJyxcbiAgICAgICAgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIHRoaXMuZm9ybS5nZXQoJ2VtYWlsJykuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcbiAgICAgIHRoaXMuZW1haWxDb250cm9sSXNWYWxpZCA9IHN0YXR1cyA9PT0gJ1ZBTElEJztcbiAgICB9KTtcblxuICAgIHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcbiAgICAgIHRoaXMucGFzc3dvcmRDb250cm9sSXNWYWxpZCA9IHN0YXR1cyA9PT0gJ1ZBTElEJztcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuZW1haWxFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnBhc3N3b3JkRWwubmF0aXZlRWxlbWVudC5kaXNtaXNzU29mdElucHV0KCk7XG5cbiAgICBpZiAoIXRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5mb3JtLmdldCgnZW1haWwnKS52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWU7XG4gICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgdGhpcy5lbWFpbENvbnRyb2xJc1ZhbGlkID0gdHJ1ZTtcbiAgICB0aGlzLnBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0xvZ2luKSB7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKGVtYWlsLCBwYXNzd29yZCkuc3Vic2NyaWJlKFxuICAgICAgICByZXNEYXRhID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NoYWxsZW5nZXMnXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25VcChlbWFpbCwgcGFzc3dvcmQpLnN1YnNjcmliZShcbiAgICAgICAgcmVzRGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jaGFsbGVuZ2VzJ10pO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvbkRvbmUoKSB7XG4gICAgdGhpcy5lbWFpbEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnBhc3N3b3JkRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMucGFzc3dvcmRFbC5uYXRpdmVFbGVtZW50LmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgfVxuXG4gIG9uU3dpdGNoKCkge1xuICAgIHRoaXMuaXNMb2dpbiA9ICF0aGlzLmlzTG9naW47XG4gIH1cbn1cbiJdfQ==