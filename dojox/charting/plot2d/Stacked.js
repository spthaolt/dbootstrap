//>>built
define("dojox/charting/plot2d/Stacked",["dojo/_base/declare","./Default","./commonStacked"],function(f,j,g){return f("dojox.charting.plot2d.Stacked",j,{getSeriesStats:function(){var a=g.collectStats(this.series);this._maxRunLength=a.hmax;return a},buildSegments:function(a,d){for(var e=this.series[a],f=d?Math.min(e.data.length-1,Math.ceil(this._hScaler.bounds.to-this._hScaler.bounds.from)):e.data.length-1,c=null,i=[],b=0;b<=f;b++){var h=d?g.getIndexValue(this.series,a,b):g.getValue(this.series,a,e.data[b]?
e.data[b].x:null);if(null!=h&&(d||null!=h.y))c||(c=[],i.push({index:b,rseg:c})),c.push(h);else if(!this.opt.interpolate||d)c=null}return i}})});