function RSVGElement(){
  //var paper = Raphael();
  this.fake = true;
  this.width = 1;
  this.height = 1;
  this.childNodes = [];
  
}

RSVGElement.prototype.setAttribute = function(attr, val){
  this[attr] = val;
 
  
}

RSVGElement.prototype.suspendRedraw = emptyFn //no op
RSVGElement.prototype.unsuspendRedraw = emptyFn //no op

RSVGElement.prototype.appendTo = function(el){
  //console.log("creating paper")
  this.paper = Raphael(el, this.width, this.height);
  //this.parentNode = el;
}

RSVGElement.prototype.appendChild = function(el){
  //create el
  if(!el) return; //do nothing if no element
  
  if(this.paper[el.tag]){
    ////console.log("Appending Shape ",el.tag)
    
    switch(el.tag){
      case "rect":
      el.shape = this.paper.rect(el.x, el.y, el.width, el.height);
      break;
      case 'ellipse':
      el.shape = this.paper.ellipse(el.cx, el.cy, el.rx, el.ry);
      break;
   
    }
    el.shape = this.paper[el.tag]();
  }
  
  this.childNodes.push(el)
  
  if(el.tag == "g"){
    if(!el.shape){
      el.shape = this.paper.set();
    }
    //no clue because g doesn't actually exist
  }
  
  el.parentNode = this; //am i doing it right?
  
  return el;
}

RSVGElement.prototype.removeChild = function(el){
  if(el.shape){
    el.shape.remove()
  }
}
