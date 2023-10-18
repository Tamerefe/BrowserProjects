var number = new Array()

var dgk = 101010;
var number = dgk.toString().split('');
for (i = 0; i < number.length; i++) number[i] = +number[i] | 0;

var arraynumber = number.length;
var ii = 0;
var txt = 'True - False Generator Start...';
var speed = 12;

function typeWriter() {
	if (ii < txt.length) {
		document.getElementById("artist").innerHTML += txt.charAt(ii);
		ii++;
        setTimeout(typeWriter, speed);    
    }

    setTimeout(function(){ for (var n = 0; n < arraynumber; n++) {
        document.getElementById("codezhead").innerHTML = number;   
    } }, 500);

    setTimeout(function(){ for (var n = 0; n < arraynumber; n++) {
        document.getElementById("code"+ n).innerHTML = number[n] + " " + Boolean(number[n]);
    } }, 1000);

}

// function typeWriter() {
// 	if (ii < txt.length) {
// 		document.getElementById("artist").innerHTML += txt.charAt(ii);
// 		ii++;
//         setTimeout(typeWriter, speed);
        
//         for (var n = 0; n < arraynumber; n++) {
//             document.getElementById("code"+ n).innerHTML = number[n] + " " + Boolean(number[n]);
//         setTimeout(typeWriter, ss);
//         }
// 	}
// }


// console.log("code"+1);

// var arraynumber = number.length;
// for (var n = 0; n < arraynumber; n++) {
//     document.write(number[n] + "</br>" +Boolean(number[n])  + "</br>");
// }

// var arraynumber = number.length;
// for (var n = 0; n < arraynumber; n++) {
//     document.getElementById("code"++).innerHTML = number[];
// }

// var myCode2 = document.getElementById("code2").innerHTML = n1;
// var myCode3 = document.getElementById("code3").innerHTML = n2;
// var myCode4 = document.getElementById("code4").innerHTML = n3;
// var myCode5 = document.getElementById("code5").innerHTML = n4;
// var myCode6 = document.getElementById("code6").innerHTML = n5;
// var myCode7 = document.getElementById("code7").innerHTML = n6;

// for (i = 1; i < 6; i++){

//     document.write(number[1]+ "</br>");
// } 

//while(try1<0){
//     document.write(try1)
// }

// var try1 = Boolean(number[1]);

// var myCode2 = document.getElementById("code2").innerHTML = try1;

