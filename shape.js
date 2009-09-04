

function RSVGShape(tag){
  this.tag = tag;
  var shape = this;
  
  if(tag == "g"){
    this.set = null;
  }
  
  this.transform = {
    baseVal: {
      numberOfItems: 1,
      getItem: function(idx){
        return {
          type: 4,
          angle: shape.shape.attr("rotation")
        }
      }
    }
  }
}

RSVGShape.prototype.appendChild = function(el){
  var shape = el.parentNode.appendChild(el);
  this.shape.push(el);
  return shape;
}

RSVGShape.prototype.getBBox = function(){
  return this.shape.getBBox()
}

RSVGShape.prototype.setAttribute = function(attr, val){
  ////console.log("Shape Set Attr", attr, val, this);
  if(attr == "id"){
    rshimdoc.elements[val] = this;
  }
  this[attr] = val;
  this.setAttrs()
}

RSVGShape.prototype.setAttrs = function(){
  if(this.shape){
    for(var attr in this){
      if(typeof this[attr] != "function"){
        this.shape.attr(attr, this[attr])
        if(attr == "display"){
          
          this[attr]=="none"?this.shape.hide():this.shape.show();
          
        }
      }
    }
    
  }
}

RSVGShape.prototype.getAttribute = function(attr){
  return this[attr];
}

RSVGShape.prototype.getAttributeNS = function(ns,attr){
  return this.getAttribute(attr)
}

RSVGShape.prototype.removeAttribute = function(attr){
  delete this[attr];
}

RSVGShape.prototype.setAttributeNS = function(ns, attr, val){
  return this.setAttribute(attr, val);
}


