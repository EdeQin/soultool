var count=0;

chrome.contextMenus.create({
	id: 'search_with_baidu',
	title: '使用百度搜索： "%s"',
	contexts: ["selection"]
})

chrome.contextMenus.onClicked.addListener(
	function(info, tab){
		// alert(JSON.stringify(info))
		// alert(JSON.stringify(tab))
		chrome.tabs.create({index:tab.index+1,url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(info.selectionText)});
	}

)