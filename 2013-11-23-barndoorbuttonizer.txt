---
layout: post
title: "Barndoorbuttonizer"
description: ""
category: 
tags: [dev]
git_widget_repo_name: "barndoorbuttonizer"
---

{% include JB/setup %}

It's the Barndoorbuttonizer!

{% include BE/github_widget %}

<link rel="stylesheet" href="{{ site.JB.WIDGET_PATH }}/barndoorbuttonizer/css/barndoorbuttonizer.css" media="screen" type="text/css" />
<link rel="stylesheet" href="{{ site.JB.WIDGET_PATH }}/barndoorbuttonizer/css/app.css" media="screen" type="text/css" />
<div class="barndoorbuttonizerBlogWidgetWrap widgetWrap">
	<div class="barndoorbuttonizerWidgetFrame"> </div>
</div>
<script> 
	inlineScript.barndoorbuttonizer = require.config({
		paths: {
	 		'jQuery': '{{ site.JB.WIDGET_PATH }}/barndoorbuttonizer/bower_components/jquery/jquery.min'
	 	},
	 	shim: {
	        'jQuery': {
	            exports: '$'
	        }
	    },
     	 context: "barndoorbuttonizer",
         baseUrl: "{{ site.JB.WIDGET_PATH }}/barndoorbuttonizer/"
    });
	inlineScript.barndoorbuttonizer(['js/app']);
</script>