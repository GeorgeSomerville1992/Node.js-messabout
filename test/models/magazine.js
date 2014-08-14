var assert = require('assert')
  , tests
  , Magazine = geddy.model.Magazine;

tests = {

  'after': function (next) {
    // cleanup DB
    Magazine.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var magazine = Magazine.create({});
    magazine.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
