$(function(){
    function sendRequest(reqData){
	    if(!$("#input").text()){
			chrome.runtime.sendMessage(
				{
					contentScriptQuery: "fetchReply",data: reqData
				},
				function(response){
					try{
					   // $("#input").text($("#input").text()+"ok")
					   $("#input").text(JSON.parse(response)["results"][0]["values"]["text"])
					   // $(".footer .button").click()
					}catch(err){
					   $("#input").text($("#input").text()+"快让小覃来修理下, 我吐出了一堆错误信息："+err+"")
					   // $(".footer .button").click()
					}
				}
			)
		}
    }

	function delayTime() {
	    var x = 10000; // 10到40秒
	    var y = 40000;
	    var rand = parseInt(Math.random() * (x - y + 1) + y);
	    return rand
	}


	let observer = new MutationObserver(mutations => {
	    for(let mutation of mutations) {
	    	// console.warn(JSON.stringify(mutations))
	    	// console.warn(typeof(mutation.addedNodes))
	        for(let addedNode of mutation.addedNodes) {
	            if ( addedNode.className == "message left" && $('div.list').children().last().text().trim()) {
					reqData = {
						"reqType":0,
					    "perception": {
					        "inputText": {
					            "text": $('div.list').children().last().text()
					        }
					    },
					    "userInfo": {
					        "apiKey": "cac38cf5cb9047d2bdbd1d19ab54c9b5",
					        "userId": "320616"
					    }
					}
					console.warn("t1")
					console.warn($('div.list').children().last().text())
					console.warn("t1")
					// sendRequest(reqData)
                    setTimeout(sendRequest,delayTime(),reqData)  //延时回复，避免频率过高

	            }
	        }
	    }
	    $(".footer .button").click()
	});
    observer.observe(document.body, { childList: true, subtree: true });
})




