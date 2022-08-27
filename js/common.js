// // ツイートボタン
// function twitText() {
// 	var s, url;
// 	s = "JSでTweetしてみるよ！　%23SUNABACO %23すなぷろ14th";
// 	url = document.location.href;
	
// 	if (s != "") {
// 		if (s.length > 140) {
// 			//文字数制限
// 			alert("テキストが140字を超えています");
// 		} else {
// 			//投稿画面を開く
// 			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
// 			window.open(url,"_blank","width=600,height=300");
// 		}
// 	}
// }
// // ツイートする


// console.log("JSではろわー");
// console.log("私の名前は"+"けいこ");
// console.log("SUNABACO KOZA".split(" "));
// console.log(100-44);
// console.log(100*44);
// console.log(44/100);
// console.log(2%3);
// console.log("1986-01-23");

// var fruit ="マンゴー"
// console.log(fruit);
// fruit = "パイナップル"
// console.log(fruit);

// // フルーツジュースを作る
// console.log(fruit+"の皮を剥いて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をミキサーにかけて");
// console.log(fruit+"ジュースので出来上がり");

// fruit = "マンゴー"
// console.log(fruit+"の皮を剥いて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をミキサーにかけて");
// console.log(fruit+"ジュースので出来上がり");

// function fruitjuice(fruit){
// console.log(fruit+"の皮を剥いて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をミキサーにかけて");
// console.log(fruit+"ジュースので出来上がり");
// }

// fruitjuice("りんご");
// fruitjuice("バナナ");
// fruitjuice("スイカ");

// var students = ["けいこさん","ゆっこさん","みやぎさん"]

// console.log(students);

// console.log(students[2]);

// var teacher= {"昼":"すずか","夜":"あき"}
// console.log(teacher["夜"]);

// // 新しくtotalという名前の関数を作ってみましょう！
// // total関数では、2つの数字を引数として
// // 受け取れるようにしてくだい（引数名はaとb）

// // 関数の中で
// // ２つの数字を足し算する処理を書いてください。

// function total (a,b){
//     var ab = a+b;
//     return ab
// }

// console.log (total(2,3));

// var a = 1;
// var b = "1";

// console.log(a===b);

// var menkyo =0;
// var money=1000;

// if(menkyo==1){
//     console.log("車の運転していいよ");
// }else if(money>550){
//     console.log("バスで帰っていいよ");
// }else{
//     console.log("歩いて帰ってね");
// }

// var time = 10;
// var getup = 12;

// if(time < getup){
//     console.log("遅刻です");
// }else if(time==getup){
//     console.log("ギリギリセーフ！");
// }else{
//     console.log("よく頑張りました！");
// }
// console.log("マンゴージュース");

// for(var i=1;i<11;i++){
//     console.log("マンゴージュース"+i+"杯目");
// }

// i= i+1;

// // for(var i=100;i>0;i--){
// //     console.log(i+"回目");
// // }

// // var text_h1 =document.getElementById("text");
// // console.log(text_h1);
// // console.log(text_h1.textContent);

// // text_h1.textContent = "わーい";

// var btn_node = document.getElementById("btn");
// btn_node.addEventListener("click",changeText);

// var i = 1;

// function changeText(){
// 	var text_h1 =document.getElementById("text");
// 	text_h1.textContent = "ワー"
	
// 	console.log(i+"かい");
// 	i++
// }

// 
$(function(){  //jQueryの約束

	// $("#text").text("わーい");

	$("#btn").on("click",function(){
		$("#text").text("わーい");
		//$("header").css("color","red")
		//$("#gallery img").attr("src","./img/hiroko-yoshii-9y7y26C-l4Y-unsplash.jpg")
		//$("a").attr("href","https://sunabaco.com/")
		//$("header").toggle();
		//$("body").addClass("red");
		//$("body").toggleClass("blue");
	})


})  //jQueryの約束
