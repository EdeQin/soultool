var turin_token="cac38cf5cb9047d2bdbd1d19ab54c9b5";

chrome.contextMenus.create({
	id: 'search_with_baidu',
	title: '使用百度搜索："%s"',
	contexts: ["selection"]
})

chrome.contextMenus.onClicked.addListener(
	function(info, tab){
		// alert(JSON.stringify(info))
		// alert(JSON.stringify(tab))
		chrome.tabs.create({index:tab.index+1,url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(info.selectionText)});
	}

)

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		console.warn("t2")
		console.warn(JSON.stringify(request.data))
		console.warn("t2")
		if (request.contentScriptQuery == "fetchReply") {
		    response = $.ajax({
				type: 'POST',
				async: false,
				url: 'http://openapi.tuling123.com/openapi/api/v2',
				data: JSON.stringify(request.data),
				success: function(message){
					sendResponse(message)
				}
			})
	    }
	}

)














