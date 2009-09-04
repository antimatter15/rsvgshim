
function RHTMLElement(html_element){
  //console.log("Masking HTML Element")
  this.el = html_element;
  this.ownerDocument = rshimdoc;
  this.parentNode = html_element.parentNode;
  
}

RHTMLElement.prototype.appendChild = function(el){
  if(el.fake){
    el.appendTo(this.el)
  }else{
    this.el.appendChild(el)
  }
}

