Print bookmarklet
----------------------------------------------------------------------

Drag this to your bookmark toolbar:

<a href="javascript:!function(a){var b=a.getElementsByTagName("link"),c="",d=0,e=b.length;for(d;e>d;d++)s=b[d],c=s.getAttribute("media"),s.setAttribute("media","print"===c||"all"===c?"screen":"print")}(document);">Print view</a>