function lefti(){
    document.getElementById("oneP").children[0].style.filter = "blur(0.5rem)";
    document.getElementById("oneP").children[1].style.display = "block";
}

function lefti2(){
    document.getElementById("oneP").children[0].style.filter = "none";
    document.getElementById("oneP").children[1].style.display = "none";
}

function righti(){
    document.getElementById("twoP").children[0].style.filter = "blur(0.5rem)";
    document.getElementById("twoP").children[1].style.display = "block";
}

function righti2(){
    document.getElementById("twoP").children[0].style.filter = "none";
    document.getElementById("twoP").children[1].style.display = "none";
}

var carName = [];
var carModel = [];
var carValue = [];

var products = [
    "Mercedes G500","Img/Mercedes.jpg",77,
    "Mercedes AMG GT R","Img/Mercedes2.jpg",23,

    "Luxury Villa","Img/Villa.jpg",83,
    "Skycraper", "Img/Skycraper.jpg",17,

    "Personal Jet And Super Car","Img/Jet.jpg",64,
    "Personal Yacht And Helicopter", "Img/Yacth.jpg",36,

    "Playstation 5","Img/Playstation5.jpg",50,
    "Gaming Computer","Img/Computer.jpg",50,

    "Ford Mustang 2021","Img/Mustang2021.jpg",49,
    "Ford Mustang 1969","Img/1969Mustang.gif",51,
];

var time = 6;
var nextNumber  = 3;
var innerTime = 0;
var innerModelTime1 = 1;
var innerModelTime2 = 4;
var innerNumber = 1;

function buttonV(buttonValue){  
    var modal = document.getElementById("myModal");
    var valueOfmodel = buttonValue.value;

    //This is bullshit
        //Someday you will find the solution 

    if(valueOfmodel == 1){
        carName.push(products[0]);
        carModel.push(products[1]);
        carValue.push(products[2]);
        modelChange = products[2];
    }else if(valueOfmodel == 2){
        carName.push(products[3]);
        carModel.push(products[4]);
        carValue.push(products[5]);
        modelChange = products[5];
    }else if(valueOfmodel == 3){
        carName.push(products[6]);
        carModel.push(products[7]);
        carValue.push(products[8]);
        modelChange = products[8];
    }else if(valueOfmodel == 4){
        carName.push(products[9]);
        carModel.push(products[10]);
        carValue.push(products[11]);
        modelChange = products[11];
    }else if(valueOfmodel == 5){
        carName.push(products[12]);
        carModel.push(products[13]);
        carValue.push(products[14]);
        modelChange = products[14];
    }else if(valueOfmodel == 6){
        carName.push(products[15]);
        carModel.push(products[16]);
        carValue.push(products[17]);
        modelChange = products[17];
    }else if(valueOfmodel == 7){
        carName.push(products[18]);
        carModel.push(products[19]);
        carValue.push(products[20]);
        modelChange = products[20];
    }else if(valueOfmodel == 8){
        carName.push(products[21]);
        carModel.push(products[22]);
        carValue.push(products[23]);
        modelChange = products[23];
    }else if(valueOfmodel == 9){
        carName.push(products[24]);
        carModel.push(products[25]);
        carValue.push(products[26]);
        modelChange = products[26];
    }else if(valueOfmodel == 10){
        carName.push(products[27]);
        carModel.push(products[28]);
        carValue.push(products[29]);
        modelChange = products[29];
    }
    

    console.log(carName);
    console.log(carModel);
    console.log(carValue);

    modal.style.display = "block";
    document.getElementById("modal-percent").innerHTML = modelChange;

    setTimeout(function() {
    modal.style.display = "none"; 

    if(products[time] !== undefined){
    document.getElementById("HeadT").children[0].innerHTML = products[time];
    time++
    document.getElementById("oneP").children[0].src = products[time];
    time++
    document.getElementById("oneP").children[1].children[0].value = nextNumber;
    time++
    nextNumber++

    document.getElementById("HeadT").children[1].innerHTML = products[time];
    time++
    document.getElementById("twoP").children[0].src = products[time];
    time++
    document.getElementById("twoP").children[1].children[0].value = nextNumber;
    time++
    nextNumber++


    // Odd Number Check
    console.log(valueOfmodel);
    function isOdd(num) { return num % 2;}
    var trynum = isOdd(valueOfmodel);


    const ccItem = document.createElement('div');

    if(trynum == 1){
        if(carValue[innerTime] < 50){
            ccItem.innerHTML = 
            `<div id="oneF" class="column" style="margin-left: 32%;">
                <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: red;">%${carValue[innerTime]}</span></h3>
                <div class="container">
                    <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                    <img class="overlay"src="Img/Okey.png" width="10%" style="right: 340px;">
                    <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                    <img class="overlay"src="Img/Flase.png" width="10%" style="right: 20px;">
                </div>
            </div>`;
        }
        else if(carValue[innerTime] > 50){
            ccItem.innerHTML = 
            `<div id="oneF" class="column" style="margin-left: 32%;">
                <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: green;">%${carValue[innerTime]}</span></h3>
                <div class="container">
                    <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                    <img class="overlay"src="Img/Okey.png" width="10%" style="right: 340px;">
                    <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                    <img class="overlay"src="Img/Flase.png" width="10%" style="right: 20px;">
                </div>
            </div>`;
        }
    }else if(trynum == 0){
        if(carValue[innerTime] < 50){
            ccItem.innerHTML = 
            `<div id="oneF" class="column" style="margin-left: 32%;">
                <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: red;">%${carValue[innerTime]}</span></h3>
                <div class="container">
                    <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                    <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
                    <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                    <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
                </div>
            </div>`;
        }
        else if(carValue[innerTime] > 50){
            ccItem.innerHTML = 
            `<div id="oneF" class="column" style="margin-left: 32%;">
                <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: green;">%${carValue[innerTime]}</span></h3>
                <div class="container">
                    <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                    <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
                    <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                    <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
                </div>
            </div>`;
        }
        else{
            ccItem.innerHTML = 
            `<div id="oneF" class="column" style="margin-left: 32%;">
                <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: gray;">%${carValue[innerTime]}</span></h3>
                <div class="container">
                    <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                    <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
                    <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                    <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
                </div>
            </div>`; 
        }
    }

        innerNumber++
        
        innerModelTime1 += 6;
        innerModelTime2 += 6;

        const selectE = document.getElementById("addMe");
        selectE.insertBefore(ccItem, selectE.childNodes[innerTime]);

        innerTime++

    }else{
        document.getElementById("HeadT").innerHTML = "The choices you make all through the game"
        document.getElementById("oneP").remove();
        document.getElementById("twoP").remove();

        // Top row Copy Paste
        const ccItem = document.createElement('div');

        function isOdd(num) { return num % 2;}
        var trynum = isOdd(valueOfmodel);

        if(trynum == 1){
            if(carValue[innerTime] < 50){
                ccItem.innerHTML = 
                `<div id="oneF" class="column" style="margin-left: 32%;">
                    <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: red;">%${carValue[innerTime]}</span></h3>
                    <div class="container">
                        <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                        <img class="overlay"src="Img/Okey.png" width="10%" style="right: 340px;">
                        <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                        <img class="overlay"src="Img/Flase.png" width="10%" style="right: 20px;">
                    </div>
                </div>`;
            }
            else if(carValue[innerTime] > 50){
                ccItem.innerHTML = 
                `<div id="oneF" class="column" style="margin-left: 32%;">
                    <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: green;">%${carValue[innerTime]}</span></h3>
                    <div class="container">
                        <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                        <img class="overlay"src="Img/Okey.png" width="10%" style="right: 340px;">
                        <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                        <img class="overlay"src="Img/Flase.png" width="10%" style="right: 20px;">
                    </div>
                </div>`;
            }
        }else if(trynum == 0){
            if(carValue[innerTime] < 50){
                ccItem.innerHTML = 
                `<div id="oneF" class="column" style="margin-left: 32%;">
                    <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: red;">%${carValue[innerTime]}</span></h3>
                    <div class="container">
                        <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                        <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
                        <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                        <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
                    </div>
                </div>`;
            }
            else if(carValue[innerTime] > 50){
                ccItem.innerHTML = 
                `<div id="oneF" class="column" style="margin-left: 32%;">
                    <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: green;">%${carValue[innerTime]}</span></h3>
                    <div class="container">
                        <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                        <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
                        <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                        <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
                    </div>
                </div>`;
            }
            else{
               ccItem.innerHTML = 
                `<div id="oneF" class="column" style="margin-left: 32%;">
                    <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: gray;">%${carValue[innerTime]}</span></h3>
                    <div class="container">
                        <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                        <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
                        <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
                        <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
                    </div>
                </div>`; 
            }
        }
        
        document.getElementById("addMe").insertBefore(ccItem, document.getElementById("addMe").childNodes[innerTime]);

        document.getElementById("addMe").style.display = "block";
    }
  
    },1200)
}