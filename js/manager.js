var Manager = function(pDomParent) {
  var myself = this;
  this.domParent = pDomParent;
  this.map;
  this.construct = function() {
    //container push dans le Config
    Config.domParent = this.domParent;
    this.map = new Map();
  }
  this.construct();
}
