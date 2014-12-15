Multilanguage jQuery plugin
===========================

Author: Mihkel Oviir

## Changelog:
### Version 30.05.2012
* use optional jquery metadata plugin for parsing attr content
* doLanguage function uses now getText to get translation, what was I thinking before!?
* jquery version 1.7.2
 
### Version 03.01.2012
* getLanguage to getText
* note, that $(document) do not work in IE8
 
### Version 26.10.2011
* initial version as jquery plugin

## Usage
* HTML tag examples:
- a) regular string attribute

    <div lang="content_key">content</div>

- b) metadata attribute:
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
