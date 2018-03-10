var Case = function(pWidth,pNum,pColumn) {
  var myself = this;
  this.caseView;
  //on recup les argument
  this.width = pWidth;
  this.num = pNum;
  this.column = pColumn;
  this.construct = function() {
    //hauteur et largeur des cube
    var width = this.width;
    var height = this.width;

    //vue de l'objet
    this.caseView = document.createElement('div');
    this.caseView.setAttribute('class','cube');
    this.caseView.style.width = width + 'px';
    this.caseView.style.height = height + 'px';
    this.caseView.style.left = 0;
    this.caseView.style.top = this.num*width +'px';
    this.random();

    //injection de la vue dans le dom
    this.column.appendChild(this.caseView);


  }
  //random de bomba sur les case
  this.random = function() {
    if(Math.random() > 0.9) {
      this.bomba = new Bomba(this.caseView);
      Config.bombe.push(this.bomba);
    }

  }

  this.construct();
}

//bombe objet
//case se cré math random pour savoir si la case est flingué ou non
//when position left = 0 -largeur on repasse a 14fois la largeur
//materialiser un hero au centre de la scene et pouvoir le deplacer
//si touche bombe perdu detection de colision
//demande a verif si une des bombes en contact avec div du hero
//si dans le cadre de left du hero potentielement en contact a verif si hauteur est égale aussi
