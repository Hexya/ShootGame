var Bomba = function(pColumn) {
  var myself = this;
  this.column = pColumn;
  this.bomba;
  this.construct = function() {
    //creation de la bombe
    this.bomba = document.createElement('div');
    this.bomba.setAttribute('class','bomba');
    this.bomba.setAttribute('id','bomba'+ Math.random());
    this.column.appendChild(this.bomba);

  }
  this.construct();
}
