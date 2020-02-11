const assert = require('assert');
const Room = require('../room.js'); 

describe('Room', function(){

    beforeEach(function(){
        room = new Room(10);
    });

    it('it should have an area in meters squared', function(){
        const actual = room.area;
        const expected = 10;
        assert.strictEqual(actual, expected)
    });

    it('should start not painted', function(){
        const actual = room.painted
        const expected = 'not painted'
        assert.strictEqual(actual, expected)
    });
    
    it('should be able to be painted', function(){
        room.finish()
        const actual = room.painted
        const expected = 'painted'
        assert.strictEqual(actual, expected)
    });
});