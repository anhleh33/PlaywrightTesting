let add = (a, b) => a+b;
let sub = (a, b) => a-b;

describe('Calculator', () => { //suite
    beforeAll(() => {
        console.log("I must run only once before")
    })
    afterAll(() => {
        console.log("I must run only once after")
    })
    beforeEach(() => {
        console.log("Im before every each")
    })
    afterEach(() => {
        console.log("Im after every each")
    })

    it('Add 2 numbers', ()=> {
        // expect(add(1, 2)).toBe(3)
        console.log(add(10, 25))
    })
    
    it('Sub 2 numbers', ()=> {
        console.log(sub(10, 25))
    })
});