chrome.contextMenus.removeAll(); // 避免多个contextMenu重复的错误
chrome.contextMenus.create({
	id: 'search_with_baidu',
	title: '使用百度搜索："%s"',
	contexts: ["selection"]
})

chrome.contextMenus.create({
	id: 'search_with_bilibili',
	title: '使用bilibili搜索："%s"',
	contexts: ["selection"]
})

chrome.contextMenus.onClicked.addListener(
	function (info, tab){
		// alert(JSON.stringify(info))
		if(info["menuItemId"] == "search_with_bilibili"){
		  // https://developer.chrome.com/apps/notifications
		  // chrome.notifications.create('test',{type:"basic",iconUrl:"icon.png",message:"ok",title:"here"},function(){})
		  chrome.tabs.create({index:tab.index+1,url: 'https://search.bilibili.com/all?keyword=' + encodeURI(info.selectionText)});
		}else if(info["menuItemId"] == "search_with_baidu"){
			chrome.tabs.create({index:tab.index+1,url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(info.selectionText)});
		}
	}
)

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		// console.warn("t2")
		// console.warn(JSON.stringify(request.data))
		// console.warn("t2")
		// if (request.contentScriptQuery == "fetchReply") {
		//     response = $.ajax({
		// 		type: 'POST',
		// 		async: false,
		// 		url: 'http://openapi.tuling123.com/openapi/api/v2',
		// 		data: JSON.stringify(request.data),
		// 		success: function(message){
		// 			sendResponse(message)
		// 		}
		// 	})
	 //    }
	}

)















