import Mobile from './Mobile.js';

const myMobile = new Mobile();
myMobile.sendSMS()
console.log(myMobile.phoneModel)
console.log(myMobile.getUnlockPIN())
myMobile.setUnlockPIN(2334)
console.log(myMobile.getUnlockPIN()) 