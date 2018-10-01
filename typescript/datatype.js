var a;
var b;
var c;
var d;
var e;
var e1 = [1, 3, 4.5];
var f = [1, 'String', true];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
;
console.log('Color :' + Color.Blue);
