var Character = function() {
  var myself = this;
  this.characterView;
  this.bullet;
  this.x;
  this.xR;
  this.y;
  this.yB;
  this.comet;
  this.construct = function() {

    var width = this.width = Math.ceil((document.getElementById(Config.domParent).offsetWidth-10)/10);
    var height = width;
    this.characterView = document.createElement('div');
    this.characterView.setAttribute('class' , 'character');
    this.characterView.setAttribute('id' , 'plane');
    this.characterView.style.left = 20 + 'px';
    this.characterView.style.width = width + 'px';
    this.characterView.style.height = height + 'px';

    document.getElementById(Config.domParent).appendChild(this.characterView);

    //Moove
    window.onkeydown = function(e) {
      var key = e.keycode || e.which;
      this.x = myself.characterView.offsetLeft;
      this.xR = myself.characterView.offsetLeft + width;
      this.y = myself.characterView.offsetTop;
      this.yB = myself.characterView.offsetTop + height;

      switch (key) {
        case 37://left
          myself.characterView.style.left = x - 15 +'px';
          break;
        case 39://right
          myself.characterView.style.left = x + 15 +'px';
          break;
        case 38://top
          myself.characterView.style.top = y - 15 +'px';
          break;
        case 40://bot
          myself.characterView.style.top = y + 15 +'px';
          break;
        case 32://bullet
          myself.bullet = document.createElement('div');
          myself.bullet.setAttribute('class','bullet');
          myself.characterView.appendChild(myself.bullet);
          break;
        default:

      }

      //Touched
      for (var i = 0; i < Config.bombe.length; i++) {
        var comet = $('#bomb'+i).offset();
        // console.log(comet);

        //bomba coordinante
        var top = comet.top;
        var bot = comet.top + height;
        var left = comet.left;
        var right = comet.left + width;
        // console.log('bomb: '+left + ' / ' + right + ' / ' + top + ' / '+ bot);

        var lDist = Math.abs(this.x - left );
        var rDist = Math.abs(this.xR - right );
        var tDist = Math.abs(this.y - top);
        var bDist = Math.abs(this.yB - bot);

        //point droite plane - gauche comet 0 si en contact
        var checkX = Math.abs(this.xR - left);

        //position hauteur
        var posCometY = top + (height/2);
        var posPlaneY = this.y + (height/2);
        //point midle comet - midle plane 0 si en contact
        var chekY = Math.abs(posCometY - posPlaneY);
        console.log(chekY);


          if( checkX < 20 && chekY < (height/2)) {
            document.getElementById('container').innerHTML ='<p class="looser">YOU LOOSE</p>';
          }

      }

      //Warning sorti de map
      var wCont = document.getElementById(Config.domParent).offsetWidth;
      var hCont = document.getElementById(Config.domParent).offsetHeight;
      console.log('Coordinate :'+ this.x + 'x ' + this.y + 'y');

      if (this.x <= 0 || this.y <= 0 || this.x >= wCont || this.y >= hCont) {
          console.log('danger');
          document.getElementById('warning').style.display = 'block';
      } else {
        document.getElementById('warning').style.display = 'none';
      }
    }


  }

  this.construct();
}
