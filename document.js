rshimdoc = {
  elements: {},
  eltree: {}
};

function emptyFn(){}

rshimdoc.createComment = emptyFn

rshimdoc.getElementById = function(id){
  //get by ID
  if(rshimdoc.elements[id]){
    ////console.log("Get Element By ID",id," SVG Shape")
    return rshimdoc.elements[id]
  }else{
    //console.log("Get Element By ID",id," HTML Element")
    return new RHTMLElement(document.getElementById(id));
  }
}


rshimdoc.createElement = function(tag){
  if(tag == "svg"){
    //console.log("Creating SVG Document")
    return new RSVGElement();
  }else{
    if(tag == "polyline")tag = 'path';
    
    ////console.log("Creating Shape",tag)
    return new RSVGShape(tag);
  }
}

rshimdoc.createElementNS = function(ns, tag){
  return rshimdoc.createElement(tag);
}


