var assert = require('assert');
var { sampleProviceData } = require('./data');
var Province = require('./Province');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProviceData())
        assert.equal(asia.shortfall, 5)
    })
})

describe('no producers', function() {
    let noProducers
    beforeEach(function() {
        const data = {
            name: 'no producers',
            producers: [],
            demand: 30,
            price: 20
        }
        noProducers = new Province(data)
    })
    it('shortfall', function() {
        assert.equal(noProducers.shortfall, 30)
    })
    it('profit', function() {
        assert.equal(noProducers.profit, 0)
    })
})
