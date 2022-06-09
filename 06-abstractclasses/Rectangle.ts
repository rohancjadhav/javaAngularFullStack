import {Shape} from './Shape'
export class Rectangle extends Shape{
    
   
   

    constructor(private _length: number,private _breadth: number,x:number,y:number){
        super(x,y);
    }


    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    public get breadth(): number {
        return this._breadth;
    }
    public set breadth(value: number) {
        this._breadth = value;
    }


    getInfo(): string {
        return  super.getInfo()+" "+`breadth=${this._breadth}`+" "+ `length=${this._length}`;
    }

    calculateArea(): number {
        return this._breadth*this._length;
    }
}