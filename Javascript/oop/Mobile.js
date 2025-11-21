class Mobile {
    phoneModel = "OnePlus"
    #unlockPIN = 1234

    makeCall = () => {
        console.log("Calling someone...")
    }
    sendSMS(){
        console.log("Sending SMS...")
    }
    sendSMS(){
        console.log("Sending duplicate method...")
    }
    getUnlockPIN(){
        return this.#unlockPIN;
    }
    setUnlockPIN = (value) => {
        this.#unlockPIN = value
    }
}
export default Mobile;