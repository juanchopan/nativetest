"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var day_model_1 = require("./day.model");
var Challenge = /** @class */ (function () {
    function Challenge(title, description, year, month, _days) {
        if (_days === void 0) { _days = []; }
        this.title = title;
        this.description = description;
        this.year = year;
        this.month = month;
        this._days = _days;
        if (_days.length > 0) {
            return;
        }
        // this.currentYear = new Date().getFullYear();
        // this.currentMonth = new Date().getMonth();
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        for (var i = 1; i < daysInMonth + 1; i++) {
            var date = new Date(year, month, i);
            var dayInWeek = date.getDay();
            this._days.push({
                dayInMonth: i,
                dayInWeek: dayInWeek,
                date: date,
                status: day_model_1.DayStatus.Open
            });
        }
    }
    Object.defineProperty(Challenge.prototype, "currentDay", {
        get: function () {
            return this._days.find(function (d) { return d.dayInMonth === new Date().getDate(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Challenge.prototype, "days", {
        get: function () {
            return this._days.slice();
        },
        enumerable: true,
        configurable: true
    });
    return Challenge;
}());
exports.Challenge = Challenge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQTZDO0FBRTdDO0lBQ0UsbUJBQ1MsS0FBYSxFQUNiLFdBQW1CLEVBQ25CLElBQVksRUFDWixLQUFhLEVBQ1osS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxVQUFpQjtRQUpsQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBRXpCLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsK0NBQStDO1FBQy9DLDZDQUE2QztRQUM3QyxJQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUzRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDZCxVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsU0FBUztnQkFDcEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLHFCQUFTLENBQUMsSUFBSTthQUN2QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxzQkFBSSxpQ0FBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxVQUFVLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQUk7YUFBUjtZQUNFLE9BQVcsSUFBSSxDQUFDLEtBQUssU0FBRTtRQUN6QixDQUFDOzs7T0FBQTtJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERheSwgRGF5U3RhdHVzIH0gZnJvbSAnLi9kYXkubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcsXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIHllYXI6IG51bWJlcixcbiAgICBwdWJsaWMgbW9udGg6IG51bWJlcixcbiAgICBwcml2YXRlIF9kYXlzOiBEYXlbXSA9IFtdXG4gICkge1xuICAgIGlmIChfZGF5cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRoaXMuY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gdGhpcy5jdXJyZW50TW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF5c0luTW9udGggKyAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgaSk7XG4gICAgICBjb25zdCBkYXlJbldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgICAgdGhpcy5fZGF5cy5wdXNoKHtcbiAgICAgICAgZGF5SW5Nb250aDogaSxcbiAgICAgICAgZGF5SW5XZWVrOiBkYXlJbldlZWssXG4gICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIHN0YXR1czogRGF5U3RhdHVzLk9wZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjdXJyZW50RGF5KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXlzLmZpbmQoZCA9PiBkLmRheUluTW9udGggPT09IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKTtcbiAgfVxuXG4gIGdldCBkYXlzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy5fZGF5c107XG4gIH1cbn1cbiJdfQ==