function add(a: number, b: number): number;
function add(a: string, b?: string): string ;
function add(a: any , b: any): any{
    if(b) return a+b
    else return a
}

console.log(add(1, 2))
console.log(add('d'))