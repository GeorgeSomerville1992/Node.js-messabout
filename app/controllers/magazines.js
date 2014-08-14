var Magazines = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Magazine.all(function(err, magazines) {
      if (err) {
        throw err;
      }
      self.respondWith(magazines, {type:'Magazine'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
    
    geddy.model.ToDo.all(function (err, data) {
      if (err) {
        throw err;
      }
      self.respond({params: params, toDos: data});
    });



  };

  this.create = function (req, resp, params) {
    var self = this
      , magazine = geddy.model.Magazine.create(params);

    if (!magazine.isValid()) {
      this.respondWith(magazine);
    }
    else {
      magazine.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(magazine, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Magazine.first(params.id, function(err, magazine) {
      if (err) {
        throw err;
      }
      if (!magazine) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(magazine);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Magazine.first(params.id, function(err, magazine) {
      if (err) {
        throw err;
      }
      if (!magazine) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(magazine);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Magazine.first(params.id, function(err, magazine) {
      if (err) {
        throw err;
      }
      magazine.updateProperties(params);

      if (!magazine.isValid()) {
        self.respondWith(magazine);
      }
      else {
        magazine.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(magazine, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Magazine.first(params.id, function(err, magazine) {
      if (err) {
        throw err;
      }
      if (!magazine) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Magazine.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(magazine);
        });
      }
    });
  };

};

exports.Magazines = Magazines;
