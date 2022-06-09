import { Shape } from "./Shape";

export class Circle extends Shape{
    
    
    

    constructor(private _radius: number, x: number, y:number){
        super(x,y);
    }


    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }
    

    getInfo(): string {
        return super.getInfo()+" "+`radius=${this._radius}`
    }

    calculateArea(): number {
        return  Math.PI * Math.pow(this._radius,2);
    }
}