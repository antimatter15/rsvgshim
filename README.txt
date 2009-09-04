To Use:

Just replace all instances of document. with rshimdoc. 
Any time you use DOM from the svg object, you need to
add a var_name = new RHTMLElement(var_name); to mask it
magically.

Including:
<script type="text/javascript" src="document.js"></script>
<script type="text/javascript" src="html.js"></script>
<script type="text/javascript" src="svg.js"></script>
<script type="text/javascript" src="shape.js"></script>

Example:
var svgroot = rshimdoc.createElementNS(null, "svg");
svgroot.setAttribute("width", 100);
svgroot.setAttribute("height", 100);
var container = rshimdoc.getElementById("containerdiv");
container.appendChild(svgroot);

var rect = rshimdoc.createElement("rect");
rect.setAttribute("x", 178);
rect.setAttribute("y", 62);
rect.setAttribute("width", 62);
rect.setAttribute("height", 285);

svgroot.appendChild(rect);

Not Implemented:
Anything other than Rects and Ellipses
