const assert = require('assert');
const Math = require('../main.js');

console.log(typeof Math)

describe('Math class',function(){
    it('Sum two numbers', function(){
        const math = new Math();

        assert.equal(math.sum(3,5),8);
    })
});