const { Person} = require("../src/person");
let person = new Person('Ryan',30,'male',['being a hardarse',' agile', 'ssd hard drives'] )

describe("Person object",function(){   
    it("should output the persons name",function(){
        expect(person.name).toBe('Ryan')
    });
    it("should output the persons name",function(){
        expect(person.age).toBe(30)
    });
    it("should output the persons gender",function(){
        expect(person.gender).toBe('male')
    });
    it("should output the persons intrest",function(){
        expect(person.interest).toEqual(['being a hardarse',' agile', 'ssd hard drives'])
    });
    it("should display the disired gretting", function(){
        expect(person.hello()).toBe("Hello,my name is Ryan and I am 30 years old. My intrest are being a hardarse, agile and ssd hard drives.")
    })
})