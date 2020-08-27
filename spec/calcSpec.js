describe("Calculator", function(){
    describe("Addition tests", function(){
        it("should return 42", function(){
            expect(addition(20, 22)).toBe(42);
        });
        it("should return 26", function(){
            expect(addition(7, 19)).toBe(26);
        })
        it("should return an error if we don't supply two numbers", function(){
            spyOn(window, "alert");
            addition("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        })
    });
    describe("Subtraction tests", function(){
        it("should return 6", function(){
            expect(subtraction(10,4)).toBe(6);
        })
    })
    describe("Multiplication tests", function(){
        it("should return 7488", () =>{
            expect(multiplication(78,96)).toBe(7488);
        })
    })
    describe("Division tests", function(){
        it("should return 2631", () =>{
            expect(division(7893,3)).toBe(2631);
        })
    })
});

    
