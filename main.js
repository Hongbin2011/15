// q 키를 누르면 동작하는 함수
// App.addOnKeyDown
App.addOnKeyDown(81,function(player){
    if(player.sprite){
        player.hidden = true;
    }
    else {
        player.hidden = false;
    }
	player.sendUpdated();
});