"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UIService = /** @class */ (function () {
    function UIService() {
        this._drawerState = new rxjs_1.BehaviorSubject(null);
    }
    Object.defineProperty(UIService.prototype, "drawerState", {
        get: function () {
            return this._drawerState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UIService.prototype.toggleDrawer = function () {
        this._drawerState.next(null);
    };
    UIService.prototype.setRootVCRef = function (vcRef) {
        this._rootVCRef = vcRef;
    };
    UIService.prototype.getRootVCRef = function () {
        return this._rootVCRef;
    };
    UIService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], UIService);
    return UIService;
}());
exports.UIService = UIService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkJBQXVDO0FBR3ZDO0lBREE7UUFFVSxpQkFBWSxHQUFHLElBQUksc0JBQWUsQ0FBTyxJQUFJLENBQUMsQ0FBQztJQWtCekQsQ0FBQztJQWZDLHNCQUFJLGtDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFZLEdBQVosVUFBYSxLQUF1QjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBbEJVLFNBQVM7UUFEckIsaUJBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixTQUFTLENBbUJyQjtJQUFELGdCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBVSVNlcnZpY2Uge1xuICBwcml2YXRlIF9kcmF3ZXJTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8dm9pZD4obnVsbCk7XG4gIHByaXZhdGUgX3Jvb3RWQ1JlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICBnZXQgZHJhd2VyU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RyYXdlclN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgdG9nZ2xlRHJhd2VyKCkge1xuICAgIHRoaXMuX2RyYXdlclN0YXRlLm5leHQobnVsbCk7XG4gIH1cblxuICBzZXRSb290VkNSZWYodmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLl9yb290VkNSZWYgPSB2Y1JlZjtcbiAgfVxuXG4gIGdldFJvb3RWQ1JlZigpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdFZDUmVmO1xuICB9XG59XG4iXX0=