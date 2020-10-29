"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var challenge_model_1 = require("./challenge.model");
var auth_service_1 = require("../auth/auth.service");
var ChallengeService = /** @class */ (function () {
    function ChallengeService(http, authService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this._currentChallenge = new rxjs_1.BehaviorSubject(null);
        this.userSub = this.authService.user.subscribe(function (user) {
            if (!user) {
                _this._currentChallenge.next(null);
            }
        });
    }
    Object.defineProperty(ChallengeService.prototype, "currentChallenge", {
        get: function () {
            return this._currentChallenge.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ChallengeService.prototype.fetchCurrentChallenge = function () {
        var _this = this;
        return this.authService.user.pipe(operators_1.take(1), operators_1.switchMap(function (currentUser) {
            if (!currentUser || !currentUser.isAuth) {
                return rxjs_1.of(null);
            }
            console.log("https://ns-ng-course.firebaseio.com/challenge/" + currentUser.id + ".json?auth=" + currentUser.token);
            return _this.http.get("https://ns-ng-course.firebaseio.com/challenge/" + currentUser.id + ".json?auth=" + currentUser.token);
        }), operators_1.tap(function (resData) {
            if (resData) {
                var loadedChallenge = new challenge_model_1.Challenge(resData.title, resData.description, resData.year, resData.month, resData._days);
                _this._currentChallenge.next(loadedChallenge);
            }
        }));
    };
    ChallengeService.prototype.createNewChallenge = function (title, description) {
        var newChallenge = new challenge_model_1.Challenge(title, description, new Date().getFullYear(), new Date().getMonth());
        this.saveToServer(newChallenge);
        this._currentChallenge.next(newChallenge);
    };
    ChallengeService.prototype.updateChallenge = function (title, description) {
        var _this = this;
        this._currentChallenge.pipe(operators_1.take(1)).subscribe(function (challenge) {
            var updatedChallenge = new challenge_model_1.Challenge(title, description, challenge.year, challenge.month, challenge.days);
            _this.saveToServer(updatedChallenge);
            _this._currentChallenge.next(updatedChallenge);
        });
    };
    ChallengeService.prototype.updateDayStatus = function (dayInMonth, status) {
        var _this = this;
        this._currentChallenge.pipe(operators_1.take(1)).subscribe(function (challenge) {
            if (!challenge || challenge.days.length < dayInMonth) {
                return;
            }
            var dayIndex = challenge.days.findIndex(function (d) { return d.dayInMonth === dayInMonth; });
            challenge.days[dayIndex].status = status;
            _this._currentChallenge.next(challenge);
            _this.saveToServer(challenge);
        });
    };
    ChallengeService.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe();
    };
    ChallengeService.prototype.saveToServer = function (challenge) {
        var _this = this;
        this.authService.user
            .pipe(operators_1.take(1), operators_1.switchMap(function (currentUser) {
            if (!currentUser || !currentUser.isAuth) {
                return rxjs_1.of(null);
            }
            return _this.http.put("https://ns-ng-course.firebaseio.com/challenge/" + currentUser.id + ".json?auth=" + currentUser.token, challenge);
        }))
            .subscribe(function (res) {
            console.log(res);
        });
    };
    ChallengeService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient, auth_service_1.AuthService])
    ], ChallengeService);
    return ChallengeService;
}());
exports.ChallengeService = ChallengeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFsbGVuZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRDtBQUN0RCw2Q0FBa0Q7QUFDbEQsNkJBQXlEO0FBQ3pELDRDQUFzRDtBQUV0RCxxREFBOEM7QUFFOUMscURBQW1EO0FBR25EO0lBSUUsMEJBQW9CLElBQWdCLEVBQVUsV0FBd0I7UUFBdEUsaUJBTUM7UUFObUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDlELHNCQUFpQixHQUFHLElBQUksc0JBQWUsQ0FBWSxJQUFJLENBQUMsQ0FBQztRQUkvRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDakQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUksOENBQWdCO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFFRCxnREFBcUIsR0FBckI7UUFBQSxpQkFxQ0M7UUFwQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQy9CLGdCQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AscUJBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDbkIsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZDLE9BQU8sU0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FDVCxtREFDRSxXQUFXLENBQUMsRUFBRSxtQkFDRixX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LENBQUMsVUFBQSxXQUFXO1lBQ25CLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN2QyxPQUFPLFNBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtZQUNELE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLG1EQUNFLFdBQVcsQ0FBQyxFQUFFLG1CQUNGLFdBQVcsQ0FBQyxLQUFPLEVBQ2pDLFNBQVMsQ0FDVixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFySFUsZ0JBQWdCO1FBRDVCLGlCQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7eUNBS1AsaUJBQVUsRUFBdUIsMEJBQVc7T0FKM0QsZ0JBQWdCLENBc0g1QjtJQUFELHVCQUFDO0NBQUEsQUF0SEQsSUFzSEM7QUF0SFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlIH0gZnJvbSAnLi9jaGFsbGVuZ2UubW9kZWwnO1xuaW1wb3J0IHsgRGF5U3RhdHVzLCBEYXkgfSBmcm9tICcuL2RheS5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY3VycmVudENoYWxsZW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2hhbGxlbmdlPihudWxsKTtcbiAgcHJpdmF0ZSB1c2VyU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgIHRoaXMudXNlclN1YiA9IHRoaXMuYXV0aFNlcnZpY2UudXNlci5zdWJzY3JpYmUodXNlciA9PiB7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRDaGFsbGVuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBmZXRjaEN1cnJlbnRDaGFsbGVuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UudXNlci5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcChjdXJyZW50VXNlciA9PiB7XG4gICAgICAgIGlmICghY3VycmVudFVzZXIgfHwgIWN1cnJlbnRVc2VyLmlzQXV0aCkge1xuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBgaHR0cHM6Ly9ucy1uZy1jb3Vyc2UuZmlyZWJhc2Vpby5jb20vY2hhbGxlbmdlLyR7XG4gICAgICAgICAgICBjdXJyZW50VXNlci5pZFxuICAgICAgICAgIH0uanNvbj9hdXRoPSR7Y3VycmVudFVzZXIudG9rZW59YFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDx7XG4gICAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgIG1vbnRoOiBudW1iZXI7XG4gICAgICAgICAgeWVhcjogbnVtYmVyO1xuICAgICAgICAgIF9kYXlzOiBEYXlbXTtcbiAgICAgICAgfT4oXG4gICAgICAgICAgYGh0dHBzOi8vbnMtbmctY291cnNlLmZpcmViYXNlaW8uY29tL2NoYWxsZW5nZS8ke1xuICAgICAgICAgICAgY3VycmVudFVzZXIuaWRcbiAgICAgICAgICB9Lmpzb24/YXV0aD0ke2N1cnJlbnRVc2VyLnRva2VufWBcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgdGFwKHJlc0RhdGEgPT4ge1xuICAgICAgICBpZiAocmVzRGF0YSkge1xuICAgICAgICAgIGNvbnN0IGxvYWRlZENoYWxsZW5nZSA9IG5ldyBDaGFsbGVuZ2UoXG4gICAgICAgICAgICByZXNEYXRhLnRpdGxlLFxuICAgICAgICAgICAgcmVzRGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlc0RhdGEueWVhcixcbiAgICAgICAgICAgIHJlc0RhdGEubW9udGgsXG4gICAgICAgICAgICByZXNEYXRhLl9kYXlzXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQobG9hZGVkQ2hhbGxlbmdlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlTmV3Q2hhbGxlbmdlKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdDaGFsbGVuZ2UgPSBuZXcgQ2hhbGxlbmdlKFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG5ldyBEYXRlKCkuZ2V0TW9udGgoKVxuICAgICk7XG4gICAgdGhpcy5zYXZlVG9TZXJ2ZXIobmV3Q2hhbGxlbmdlKTtcbiAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQobmV3Q2hhbGxlbmdlKTtcbiAgfVxuXG4gIHVwZGF0ZUNoYWxsZW5nZSh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShjaGFsbGVuZ2UgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlZENoYWxsZW5nZSA9IG5ldyBDaGFsbGVuZ2UoXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhbGxlbmdlLnllYXIsXG4gICAgICAgIGNoYWxsZW5nZS5tb250aCxcbiAgICAgICAgY2hhbGxlbmdlLmRheXNcbiAgICAgICk7XG4gICAgICB0aGlzLnNhdmVUb1NlcnZlcih1cGRhdGVkQ2hhbGxlbmdlKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UubmV4dCh1cGRhdGVkQ2hhbGxlbmdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZURheVN0YXR1cyhkYXlJbk1vbnRoOiBudW1iZXIsIHN0YXR1czogRGF5U3RhdHVzKSB7XG4gICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShjaGFsbGVuZ2UgPT4ge1xuICAgICAgaWYgKCFjaGFsbGVuZ2UgfHwgY2hhbGxlbmdlLmRheXMubGVuZ3RoIDwgZGF5SW5Nb250aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkYXlJbmRleCA9IGNoYWxsZW5nZS5kYXlzLmZpbmRJbmRleChcbiAgICAgICAgZCA9PiBkLmRheUluTW9udGggPT09IGRheUluTW9udGhcbiAgICAgICk7XG4gICAgICBjaGFsbGVuZ2UuZGF5c1tkYXlJbmRleF0uc3RhdHVzID0gc3RhdHVzO1xuICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KGNoYWxsZW5nZSk7XG4gICAgICB0aGlzLnNhdmVUb1NlcnZlcihjaGFsbGVuZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51c2VyU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIHNhdmVUb1NlcnZlcihjaGFsbGVuZ2U6IENoYWxsZW5nZSkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UudXNlclxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIHN3aXRjaE1hcChjdXJyZW50VXNlciA9PiB7XG4gICAgICAgICAgaWYgKCFjdXJyZW50VXNlciB8fCAhY3VycmVudFVzZXIuaXNBdXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgICAgICAgYGh0dHBzOi8vbnMtbmctY291cnNlLmZpcmViYXNlaW8uY29tL2NoYWxsZW5nZS8ke1xuICAgICAgICAgICAgICBjdXJyZW50VXNlci5pZFxuICAgICAgICAgICAgfS5qc29uP2F1dGg9JHtjdXJyZW50VXNlci50b2tlbn1gLFxuICAgICAgICAgICAgY2hhbGxlbmdlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=