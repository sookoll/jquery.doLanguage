var currLang = 'fi';// default language
var keyLang = 'lang';// attribute name that stores language key value

// Read a page's GET URL variables and return them as an associative array.
var URL = new function(){
	this.getVars = function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++){
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	this.getVar = function(name){
		return URL.getVars()[name];
	}
};

$(function(){
	// get language indicator from url if there is one
	currLang = URL.getVar('lang')?URL.getVar('lang'):currLang;
	
	// set language
	$.setLangParams({
		langObject:lang,
		language:currLang,
		keyAttr:keyLang
	});
	
	$('body').doLanguage();// not work in IE8, use $('#id').doLanguage();
	
	$('#nupp').click(function(){
		var html = '<div class="aken"><div lang="komm">Komm</div></div>';
		$('#content').append(html);
		$('.aken').doLanguage();
		alert($.getText('title'));
	});
	
	$('.change').click(function(e){
		e.preventDefault();
		currLang = $(this).attr('href');
		// set language
		$.setLangParams({
			language:currLang
		});
		$('body').doLanguage();
	});
});
