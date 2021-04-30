"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log('Detta är en TypeScript app');
var x = 15; // datatypen Number
// x = 'Hallå';   <- inte okej! x får bara vara ett Number
var y;
// let dataFromApi = "nisse"  // hoppsan! en bug i koden
var dataFromApi = [
    { name: 'Nisse', loves: 'sågspån' },
    { name: 'Stina', loves: 'citron' }
];
// Dags att använda datan
dataFromApi.forEach(function (hamster) {
    console.log('Hamster: ', hamster.name);
});
// Om man använder "any" så har man ingen nytta av TypeScript
var z = 1;
z = true;
z = 'hej';
z = {};
var input = '123'; // explicit data type
var parsed = Number(input); // explicit data type
var implicit = 15; // implicit data type
function f1(param1) {
    console.log(param1);
}
function f2(param1) {
    if (param1 === void 0) { param1 = 'hej'; }
}
f2();
f2('hej');
function add(x, y) {
    return x + y;
    // "1" + 2    <- Vad blir detta?
    // "1" + "2"  <- rätt
    // 1 + 2      <- fel
    // Exempel:
    // Number("1") + 2 == 1 + 2 == 3
}
var answer = add(1, 2);
console.log('Answer: ' + answer);
function maybeGetObject() {
    if (Math.random() < 0.5) {
        return { name: 'example', value: 156, price: 200, id: '123' };
    }
    else {
        return null;
    }
}
/*
Automatisk typomvandling
string + number -> string + string    <-- superviktig!
string + boolean -> string + string
boolean + string -> string + string
number + boolean -> number + number
string + object -> string + string
2 + 4 + "sträng"
6 + "sträng"
"6" + "sträng"
"6sträng"
string - string -> number - number
"15" + "1"  ->  "151"
"15" - "1"  ->  15 - 1  ->  14
"10" - "fem"  ->  10 - NaN  ->  NaN
1 + 2 * 3 + 4
1 + 6 + 4
7 + 4
11
*/
function testAsync() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('example')];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
