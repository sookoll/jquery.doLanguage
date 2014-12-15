/*
 * Multilanguage jQuery plugin
 * Author: Mihkel Oviir
 * 
 * * * * * * * * * * * * * * * * * * * * * * * 
 * Version 30.05.2012
 * - use optional jquery metadata plugin for parsing attr content
 * - doLanguage function uses now getText to get translation, what was I thinking before!?
 * - jquery version 1.7.2
 * 
 * Version 03.01.2012
 * - getLanguage to getText
 * - note, that $(document) do not work in IE8
 * 
 * Version 26.10.2011
 * - initial version as jquery plugin
 * 
 * * * * * * * * * * * * * * * * * * * * * * * 
 * HTML tag examples:
 * a) regular string attribute
 * <div lang="content_key">content</div>
 * 
 * b) metadata attribute:
 * <div lang="{html:'content_key',title:'title_key'}" title="Title">Content</div>
 * 
 * Language strings object example:
 * 
 * var lang = {
 * 	title: {
 * 		fi:'finnish title',
 * 		en:'english title'
 * 	},
 * 	text: {
 * 		fi:'finnish text',
 * 		en:'english text'
 * 	}
 * }
 * 
 * Usage:
 * 
 * $.setLangParams({
 *		langObject:lang,
 *		language:'fi',
 *		keyAttr:'lang'
 * });
 * 
 * $(parent_element).doLanguage();
 * var title = $.getText('title');
 * 
 */

(function($) {
	
	var params = {
		langObject:null,// mandatory, language object, stores all language strings
		language:'en',// language indicator
		keyAttr:'lang'// attribute name, to read language key from this value
	};
	
	$.setLangParams = function(p){
		//apply default properties
		params = $.extend(params,p);
		
		// test metadata
		if($.metadata)
			// set metadata attribute
			$.metadata.setType("attr", params.keyAttr);
	};
	
	$.fn.doLanguage = function(){
		return this.find('['+params.keyAttr+']').each(function(){
			
			var attrValue;
			var html;
			
			// test metadata
			try {
				attrValue = $(this).metadata();
				
				for(var attr in attrValue){
					
					// replace tag's content
					if(attr == 'html' && $.getText(attrValue[attr]))
						$(this).html($.getText(attrValue[attr]));
					
					// replace tag's attributes
					else if($(this).attr(attr) && $.getText(attrValue[attr]))
						$(this).attr(attr,$.getText(attrValue[attr]));
				}
			}
			// if plain text, then use it as tag content
			catch(e){
				attrValue = $(this).attr(params.keyAttr);
				console.log($.getText(attrValue));
				if($.getText(attrValue)){
					
					$(this).html($.getText(attrValue));
				}
					
			}
			
		});
	};
	
	$.getText = function(key){
		if(key in params.langObject){
			if(params.langObject[key][params.language])
				return params.langObject[key][params.language];
			else
				return false;
		}
		else return false;
	};
	
})(jQuery);