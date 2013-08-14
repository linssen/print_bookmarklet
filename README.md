Print bookmarklet
----------------------------------------------------------------------

Drag this to your bookmark toolbar:

GitHub won't let me add the link here, but it's
`<a href='javascript:!function(a){var b=a.getElementsByTagName("link"),c="",d=0,e=b.length;for(d;e>d;d++)s=b[d],c=s.getAttribute("media"),s.setAttribute("media","print"===c||"all"===c?"screen":"print")}(document);'>Print view</a>`

There's a page you can use too.

Contribute / use locally
======================================================================

    $ git clone git@github.com:linssen/print_bookmarklet.git
    $ cd print_bookmarklet
    $ npm install
    $ grunt

The README is generated from the compiled and minified version of the JS.
