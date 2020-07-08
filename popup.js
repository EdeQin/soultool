
$(function(){
	var state = $("#state");
	$("#send").click(function(){
		chrome.tabs.query({active:true,currentWindow:true},function(tab){
			chrome.tabs.sendMessage(tab[0].id,{
				action: "send",
				keyword: $("#keyword").val()
			},function(response){
				console.log(response);
				state.html(response.state)
			})
		})
	})
	$("#submit").click(function(){
		chrome.tabs.query({active:true,currentWindow:true},function(tab){
			chrome.tabs.sendMessage(tab[0].id,{
				action: "submit"
			},function(response){
				console.log(response);
				state.html(response.state)
			})
		})
	})
})