$(function(){


  let observer = new MutationObserver(mutations => {
    for(let mutation of mutations) {
         for(let addedNode of mutation.addedNodes) {
         	console.warn(addedNode)
         	console.warn($('div.list').children().last().hasClass("left"))
             if ($('div.list').children().last().hasClass("left")) {
						req_data = {
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

					

						// chrome.runtime.sendMessage(
						// 	{
						// 		contentScriptQuery: "fetchReply",data: req_data
						// 	},
						// 	function(response){
						// 		try{
						// 		   console.warn(JSON.parse(response)["results"][0]["values"]["text"])
						// 		   $("#input").text(JSON.parse(response)["results"][0]["values"]["text"])
						// 		   $(".footer .button").click()

						// 		}catch(err){
						// 		   $("#input").text("快让小覃来修理下, 我吐出了一堆错误信息："+err+"")
						// 		   $(".footer .button").click()
						// 		}

						// 	}
						// )

              }
          }
     }
  });


  observer.observe(document.querySelector("#app > div > div.chat-panel > div.chat > div > div > div.list-panel.show > div.list"), { childList: true, subtree: true });

})




