var typeWords = document.getElementById("typeWords");
var i = 0, j=0, timer, flag = 1;
// var str1 = "岂曰无衣，与子同袍";
var str2 = "2018级1班 任锐媛";

function typing1(){
	if(flag){
			timer = setInterval(function(){
					typeWords.innerHTML = str2.slice(0, i++) + "|";
					if(i == str2.length+1){
						clearInterval(timer);
						flag = 0;
						//typing1();
					}
			}, 150)
	}
	// else{
	// 	timer = setInterval(function(){
	// 		typeWords.innerHTML = str2.slice(0, i--) + "|";
	// 		if(i == 0){
	// 			clearInterval(timer);
	// 			flag = 1;
	// 			typing2();
	// 		}
	// 	}, 100)
	// }
}

// function typing2(){
// 	if(flag){
// 			timer = setInterval(function(){
// 					typeWords.innerHTML = str1.slice(0, i++) + "|";
// 					if(i == str1.length){
// 						clearInterval(timer);
// 						flag = 0;
// 						typing2();
// 					}
// 			}, 100)
// 	}
// 	else{
// 		timer = setInterval(function(){
// 			typeWords.innerHTML = str1.slice(0, i--) + "|";
// 			if(i == 0){
// 				clearInterval(timer);
// 				flag = 1;
// 				typing1();
// 			}
// 		}, 100)
// 	}
// }
window.onload = typing1;