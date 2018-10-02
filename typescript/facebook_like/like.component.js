"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likeCount, _isSeleted) {
        this._likeCount = likeCount;
        this._isSeleted = _isSeleted;
    }
    LikeComponent.prototype.onClick = function () {
        // if(this._isSeleted == true) {
        //     this._likeCount --;
        //     this._isSeleted = false
        // } else {
        //     this._likeCount ++;
        //     this._isSeleted = true
        // }
        this._likeCount += (this._isSeleted) ? -1 : +1;
        this._isSeleted = !(this._isSeleted);
    };
    LikeComponent.prototype.getStatus = function () {
        return 'Total Like :' + this._likeCount + ' and isSelected :' + this._isSeleted;
    };
    Object.defineProperty(LikeComponent.prototype, "likeCount", {
        get: function () {
            return this._likeCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSeleted", {
        get: function () {
            return this._isSeleted;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
