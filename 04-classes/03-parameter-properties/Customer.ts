class Customer{
//    private firstName:string;
//    private lastName:string;

   //CONSTUCTORS USAGE
    constructor(private firstName:string,private lastName:string){
        
    }

    //traditional getter and setter methods
    public setFirstName(value:string):void{
        this.firstName=value;
    }
    public getFirstName():string{
        return this.firstName;
    }

    public getLastName():string{
        return this.lastName;
    }
    public setLastName(value:string) : void {
        this.lastName=value;
    }

    //get set ACCESSORS

    public get getFirst():string{
        return this.firstName;
    }
    public set setFirst(value:string){
        this.firstName=value;
    }

    public get getLast():string{
        return this.lastName;
    }
    public set setLast(value:string){
        this.lastName=value;
    }

}


let myCustomer= new Customer("pooja","rohan"); //CREATING OBJECT USING CONSTRUCTORS

// myCustomer.firstName="rohan";
// myCustomer.lastName="pooja";

// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);


// let myCustomer = new Customer();
//using method setters and getters
// myCustomer.setLastName("jadhav");
// myCustomer.setFirstName("pooja");
// console.log(myCustomer.getFirstName()+" "+myCustomer.getLastName());

//using accessors get and set

// myCustomer.setFirst="rohan";
// myCustomer.setLast="poo";

console.log(myCustomer.getFirst+" "+myCustomer.getLast);
