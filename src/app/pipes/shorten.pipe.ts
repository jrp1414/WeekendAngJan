import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value:string):any{
        if(value.length<=10){
            return value;
        }
        return value.substr(0,10)+ "...";
    }

}


// interface IBook{
//     Name:string;
//     Desc:string;
//     GetPrice(param1:string):void;
// }

// class Book implements IBook {
//     Name: string;
//     Desc: string;
//     GetPrice(param1: string): void {
//         console.log('Test');
//     }


// }