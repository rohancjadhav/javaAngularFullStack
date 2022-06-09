export class Customer{
   

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



