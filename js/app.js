;(function(global){
	// UglifyJS define hack.  Used for unit testing.
	if (typeof BARNDOORBUTTONIZER_APP_NOW === 'undefined') {
	  BARNDOORBUTTONIZER_APP_NOW = function () {
	    return +new Date();
	  };
	}

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//EXPECTS <whatev class="catSlides"></whatev> in the DOM
	var app = function($,appHtml,barndoorbuttonizer){
		$(function(){
    		$('.barndoorbuttonizerWidgetFrame').append(appHtml);
    		var myBarndoorbuttonizer = new barndoorbuttonizer();
    		setTimeout(function(){$('.cloud').trigger('click')},10)
		});
		return 'Hi i am return app';
	};


	if (typeof exports === 'object') {
		// nodejs
		module.exports = app($,barndoorbuttonizer);
	} else if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jQuery','js/appHtml','js/barndoorbuttonizer'],function(){ 
			return app.apply(null,arguments);
		});
	} else if (typeof global.app === 'undefined') {
		// Browser: Make `Tweenable` globally accessible.
		global.app = app($,barndoorbuttonizer);
	}



})(this);


