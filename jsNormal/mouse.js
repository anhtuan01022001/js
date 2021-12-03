function Mouse(color){
    this.color = color;
    this.dead = false;
  };
  
  Mouse.prototype.die = function(){
    this.dead = true;
  };
  
  module.exports = Mouse; // 1 file mouse.js là 1 module. Nó exports ra constructor function Mouse 