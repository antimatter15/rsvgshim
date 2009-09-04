About/Warning (from my blog):
For like an hour (so, not a really long time, and nothing near SVGWeb) or so, I was working on a new SVG shim similar to SVGWeb except that it renders to VML and SVG through Raphael rather than Flash (so now I can actually brag about not having *any* plugins :P). Using it is somewhat simpler than SVGWeb, except that you need some replacing, but no need for a server, htcs, etc. Plus, the file is only 3.2 kb uncompressed, only 740 bytes gzipped and YUI'd. Also, it only works with rectangles and ellipses but could be somewhat easily modified to support anything that raphael does. While probably it does not work on IE (as I use linux and have no way to test), it's an interesting concept.

It only works with pages where a SVG element is added dynamically after the page is loaded (contrasting to SVGWeb which only allows a SVG element to be added in code).

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
