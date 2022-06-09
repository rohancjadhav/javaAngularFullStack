var Customer = /** @class */ (function () {
    function Customer() {
    }
    //CONSTUCTORS USAGE
    // constructor(theFirst:string,theLast:string){
    //     this.firstName=theFirst;
    //     this.lastName=theLast;
    // }
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
// let myCustomer= new Customer("pooja","rohan"); CREATING OBJECT USING CONSTRUCTORS
// myCustomer.firstName="rohan";
// myCustomer.lastName="pooja";
// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);
var myCustomer = new Customer();
//using method setters and getters
// myCustomer.setLastName("jadhav");
// myCustomer.setFirstName("pooja");
// console.log(myCustomer.getFirstName()+" "+myCustomer.getLastName());
//using accessors get and set
myCustomer.setFirst = "rohan";
myCustomer.setLast = "poo";
console.log(myCustomer.getFirst + " " + myCustomer.getLast);
