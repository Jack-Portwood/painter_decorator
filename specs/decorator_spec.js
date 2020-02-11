const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function(){
    beforeEach(function(){
        decorator = new Decorator();
        paint1 = new Paint(5);
        paint2 = new Paint(2);
        room = new Room(10);
    })

    it('start with empty paint stock', function(){
        const actual = decorator.paintStock.length;
        const expected = 0
        assert.strictEqual(actual, expected)

    })

    it('be able to add a can of paint to paint stock', function () {
        decorator.addPaint(paint1)
        const actual = decorator.paintStock.length;
        const expected = 1
        assert.strictEqual(actual, expected) 

    })

    it('be able to calculate total litres paint it has in stock', function () {
        
        decorator.addPaint(paint1)
        decorator.addPaint(paint2)
        decorator.addPaint(paint1)
        
        const actual = decorator.checkPaint()
        const expected = 12
        assert.strictEqual(actual, expected)
        

    })

    it('be able to calculate whether it has enough paint to paint a room', function () {

        decorator.addPaint(paint1)
        decorator.addPaint(paint2)
        decorator.addPaint(paint1)

        const actual = decorator.enoughPaint(room);
        const expected = true 
        assert.strictEqual(actual, expected)


    })

    it('be able to paint room if has enough paint in stock', function () {

        decorator.addPaint(paint1)
        decorator.addPaint(paint2)
        decorator.addPaint(paint1)

        decorator.paintRoom(room)

        const actual = room.painted
        const expected = 'painted'
        assert.strictEqual(actual, expected)

        
    })

    it('be able to paint room if has enough paint in stock(not enough)', function () {

        decorator.addPaint(paint1)
        decorator.paintRoom(room)

        const actual = room.painted
        const expected = 'not painted'
        assert.strictEqual(actual, expected)


    })
})