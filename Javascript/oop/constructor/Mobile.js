class Mobile{
    #PIN

    constructor(pin){
        this.#PIN = pin
    }

    makeCall(){
        console.log("hey calling......")
    }
    openBankApp(){
        if(this.#PIN == 1234){
            console.log("Open app")
        }
        else if(this.#PIN != undefined){
            console.log(typeof this.#PIN)
            console.log("Access denied")
        }
    }
}

const mobile = new Mobile(1234)
mobile.openBankApp()