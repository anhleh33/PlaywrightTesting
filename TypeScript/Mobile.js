// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function() {
    function Mobile(modelName, modelNumber) {
        this.imei = "Anh Hoang";
        this.modelName = modelName;
        this.modelNumber = modelNumber;
    }
    Mobile.prototype.makeCall = function() {
        console.log('hey calling....');
    };
    return Mobile;
}());
exports.Mobile = Mobile;
var myMobile = new Mobile('OnePlus', 3);
// console.log(myMobile.modelName)
myMobile.makeCall();