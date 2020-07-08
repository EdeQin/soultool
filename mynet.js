$(function(){
	$("#generate_balance_month").on('click',function(){
		req_data = {
			"reqType":0,
		    "perception": {
		        "inputText": {
		            "text": "附近的酒店"
		        },
		        "inputImage": {
		            "url": "imageUrl"
		        },
		        "selfInfo": {
		            "location": {
		                "city": "北京",
		                "province": "北京",
		                "street": "信息路"
		            }
		        }
		    },
		    "userInfo": {
		        "apiKey": "cac38cf5cb9047d2bdbd1d19ab54c9b5",
		        "userId": "320616"
		    }
		}

		chrome.runtime.sendMessage(
			{
				contentScriptQuery: "fetchReply",data: req_data
			},
			function(response){
				console.warn(JSON.stringify(response))
			}
		)

	})
})