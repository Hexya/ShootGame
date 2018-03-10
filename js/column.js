var Column = function(pNum) {
  var myself = this;
  this.columnView;
  //valeur i de la column
  this.num = pNum;
  //interval decalement column
  this.interval;
  this.width;

  this.construct = function() {
    //hauteur et largeur des column divisé par 10 car 10 column
    var width = this.width = Math.ceil((document.getElementById(Config.domParent).offsetWidth-10)/10);
    var height = document.getElementById(Config.domParent).offsetHeight-10;

    //vue de l'objet
    this.columnView = document.createElement('div');
    this.columnView.style.width = width + 'px';
    this.columnView.style.height = height + 'px';
    this.columnView.style.left = this.num*width +'px';
    this.columnView.setAttribute('class','column');

    //injection de la vue dans le dom
    document.getElementById(Config.domParent).appendChild(this.columnView);

    //hauteur des cube
    var limite = Math.ceil(height/width)
    //mise en place des cube
    for(var i = 0; i < limite; i++) {
      var cube = new Case(width,i,this.columnView);
    }

    //deplacement des columns
    this.interval = setInterval(this.move,10);
  }
  //Methodes qui déplace les column
  this.move = function() {
    var left = parseFloat(myself.columnView.offsetLeft);
    myself.columnView.style.left = left - Config.speed +'px';
    if(myself.columnView.offsetLeft <= -myself.width) {
      myself.columnView.style.left = myself.width*15+'px';
    }
  }

  this.construct();
}
