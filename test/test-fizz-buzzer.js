const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should determine fizz buzz value', function() {
    const normalCases = [
      { input: 3, expected: 'fizz' },
      { input: 5, expected: 'buzz' },
      { input: 15, expected: 'fizz-buzz' },
      { input: 17, expected: 17 }
    ];

    normalCases.forEach(test => {
      const answer = fizzBuzzer(test.input);
      expect(answer).to.equal(test.expected);
    });
  });

  it('should test edge cases of non-numerical input', function() {
    const badInputs = [ '1', 'a', false];

    badInputs.forEach(val => {
      expect(function() {
        fizzBuzzer(val);
      }).to.throw(Error);
    })
  })
});
