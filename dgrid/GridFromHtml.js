//>>built
define("dgrid/GridFromHtml",["./OnDemandGrid","dojo/_base/declare","put-selector/put"],function(f,l,m){var e=l([f],{configStructure:function(){if(!this._checkedTrs){this._checkedTrs=!0;for(var b=this.srcNodeRef,c=[],a=b.getElementsByTagName("tr"),d=a.length,n=e.utils.getColumnFromCell,g=0;g<d;g++){var j=[];c.push(j);for(var h=a[g],k=h.getElementsByTagName("th"),f=k.length,i=0;i<f;i++)j.push(n(k[i]))}h&&b.removeChild(h.parentNode);this.subRows=c}return this.inherited(arguments)},create:function(b,
c){var a=document.createElement("div"),d=c.id,e=c.getAttribute("style");if(d)this.id=d;a.className=c.className;e&&a.setAttribute("style",e);c.parentNode.replaceChild(a,c);(b=b||{}).srcNodeRef=c;this.inherited(arguments,[b,a]);m(c,"!")}});e.utils={getBoolFromAttr:function(b,c){var a=b.getAttribute(c);return a&&"false"!==a},getNumFromAttr:function(b,c){var a=b.getAttribute(c),a=a&&Number(a);return isNaN(a)?void 0:a},getPropsFromNode:function(b){var c,b=b.getAttribute("data-dgrid-column");if(!b)return{};
try{c=eval("("+b+")")}catch(a){throw Error("Error in data-dgrid-column {"+b+"}: "+a.toString());}return c},getColumnFromCell:function(b){var c=e.utils.getNumFromAttr,a,d;a=e.utils.getPropsFromNode(b);a.label=a.label||b.innerHTML;a.field=a.field||b.className||b.innerHTML;if(!a.className&&b.className)a.className=b.className;if(!a.rowSpan&&(d=c(b,"rowspan")))a.rowSpan=d;if(!a.colSpan&&(d=c(b,"colspan")))a.colSpan=d;return a}};return e});