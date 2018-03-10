var Map = function() {
  var myself = this;
  this.construct = function() {
      for(var i = 0; i < Config.numColumn; i++) {
        var column = new Column(i);
      }
      var character = new Character();
  }
  this.construct();
}
