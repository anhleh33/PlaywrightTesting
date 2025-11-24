export class Mobile{
    private modelName: string;
    private modelNumber: number;
    readonly imei: string = "Anh Hoang"

    constructor(modelName: string, modelNumber: number){
        this.modelName = modelName;
        this.modelNumber = modelNumber;
    }

    public makeCall(): void{
        console.log('hey calling....')
    }
}

const myMobile = new Mobile('OnePlus', 3)
// console.log(myMobile.modelName)
myMobile.makeCall()