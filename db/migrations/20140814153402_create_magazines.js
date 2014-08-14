var CreateMagazines = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('title', 'string');
          t.column('description', 'text');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('magazines', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('magazines', callback);
  };
};

exports.CreateMagazines = CreateMagazines;
