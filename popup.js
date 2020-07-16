
$(function(){

    var bg = chrome.extension.getBackgroundPage();

	$("#piggy").on("click",function(){
		alert("别戳啦，再戳小覃要来骂你啦！！！")
	})



    $("#confirm").on("click",function(){
        bg.turin_token = $("#turin_token").val()
    })







































})