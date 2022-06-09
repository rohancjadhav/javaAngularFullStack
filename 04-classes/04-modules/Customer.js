"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    //CONSTUCTORS USAGE
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //traditional getter and setter methods
    Customer.prototype.setFirstName = function (value) {
        this.firstName = value;
    };
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setLastName = function (value) {
        this.lastName = value;
    };
    Object.defineProperty(Customer.prototype, "getFirst", {
        //get set ACCESSORS
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setFirst", {
        set: function (value) {
            this.firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "getLast", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setLast", {
        set: function (value) {
            this.lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
