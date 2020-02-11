const assert = require('assert');
const Paint = require('../paint.js'); 


describe('Paint', function(){

    beforeEach(function(){
        paint = new Paint(5)
    });

    it ("should have a number of litres",function(){

    const actual = paint.litres
    const expected = 5
    assert.strictEqual(actual,expected)
});



    it('should be able to empty itself', function (){
        paint.empty();
        const actual = paint.litres
        const expected = 0
        assert.strictEqual(actual,expected)
    });


    it("it should be able to check its empty", function (){
        const actual = paint.checkIfEmpty()
        const expected = false 
        assert.strictEqual(actual,expected)
    })

    it('it should be able to check its empty(is empty)', function (){
        paint.empty();
        const actual = paint.checkIfEmpty()
        const expected = true
        assert.strictEqual(actual, expected) 
    })

})