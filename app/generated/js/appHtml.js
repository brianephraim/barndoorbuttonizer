;(function(global){
	// UglifyJS define hack.  Used for unit testing.
	if (typeof BARNDOORBUTTONIZER_APP_NOW === 'undefined') {
	  BARNDOORBUTTONIZER_APPHTML_NOW = function () {
	    return +new Date();
	  };
	}

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//EXPECTS <whatev class="catSlides"></whatev> in the DOM
	var app = function($,barndoorbuttonizer){
		var html = '<h1 align=center>Single-image barndoor button generator</h1><p>Click this image to use it as a sample: <img src="$@$rootPathReplaceString$@$cloud.png" class="cloud" /> . See if you can get the red, green, and blue lines to repeat!</p><DIV id="barndoorbuttonizerStatus">Or drag an image from you hard drive to the area below ...</DIV><DIV id="barndoorbuttonizerDrop">Drop files here.</DIV><DIV id="barndoorbuttonizerList"></DIV>';
		if(document.location.host === 'localhost:4000'){
			html = html.replace('$@$rootPathReplaceString$@$','http://localhost:8000/barndoorbuttonizer/')
		} else if (document.location.host === 'defualt.github.io'){
			html = html.replace('$@$rootPathReplaceString$@$','/barndoorbuttonizer/')
		} else if (document.location.origin === 'file://'){
			html = html.replace('$@$rootPathReplaceString$@$','')

		}
		return html;
	};


	if (typeof exports === 'object') {
		// nodejs
		module.exports = app($,barndoorbuttonizer);
	} else if (typeof define === 'function' && define.amd) {
		// AMD
		define([],function(){ 
			return app.apply(null,arguments);
		});
	} else if (typeof global.app === 'undefined') {
		// Browser: Make `Tweenable` globally accessible.
		global.app = app($,barndoorbuttonizer);
	}



})(this);


