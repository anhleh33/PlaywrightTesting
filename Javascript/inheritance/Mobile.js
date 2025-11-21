class Mobile{ 
    constructor(brandName){
        this.brandName = brandName
    }
    makeCall(){
        console.log("Voice call")
    }
    
    sendSMS(){
        console.log("Text SMS")
    }
}

class OnePlus extends Mobile{
    constructor(brandName, year){
        super(brandName)
        this.year = year
    }
    makeCall(){ //override
        super.sendSMS()
        console.log("Make call & video call")
    }
    zenMode(){
        console.log("maintain work-life balance")
    }
}

const oneplus = new OnePlus("OnePlus 32", 2025)
console.log(oneplus.brandName)
console.log(oneplus.year)
oneplus.makeCall()
oneplus.zenMode()