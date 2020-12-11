// const fabric = require("fabric").fabric;

$(document).load("", function () {
    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkstf");
    ctx.drawImage(img, 0, 0);

    $("#dollPartsf").hide();
    $("#dollPartsm").hide();
});


$("#drkstf").click(function () {

    $("#renderChar").removeClass("masc").addClass("fem")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkstf");
    ctx.drawImage(img, 0, 0);
});

$("#drkstm").click(function () {

    $("#renderChar").removeClass("fem").addClass("masc")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkstm");
    ctx.drawImage(img, 0, 0);
});

$("#drkrf").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkrf");
    ctx.drawImage(img, 0, 0);
});

$("#drkrm").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkrm");
    ctx.drawImage(img, 0, 0);
});

$("#drkf").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkf");
    ctx.drawImage(img, 0, 0);
});

$("#drkm").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkm");
    ctx.drawImage(img, 0, 0);
});

$("#mdf").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mdf");
    ctx.drawImage(img, 0, 0);
});

$("#mdm").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mdm");
    ctx.drawImage(img, 0, 0);
});

$("#ltstf").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ltstf");
    ctx.drawImage(img, 0, 0);
});

$("#ltstm").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ltstm");
    ctx.drawImage(img, 0, 0);
});

$("#ltrf").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ltrf");
    ctx.drawImage(img, 0, 0);
});

$("#ltrm").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ltrm");
    ctx.drawImage(img, 0, 0);
});

$("#ltf").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ltf");
    ctx.drawImage(img, 0, 0);
});

$("#ltm").click(function () {

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ltm");
    ctx.drawImage(img, 0, 0);
});

$(document).ready(function () {
    $("#ok").click(function () {
        $("#choose-body").hide();
        $("#ok").hide();
        $("h2").hide();
        if ($('#renderChar').hasClass('fem')) {
            $("#dollPartsf").show();
        } else {
            $("#dollPartsm").show();
        }
    });

});


// // $("#mpmdrblk).click(function () {
//     var canvas =document.getElementById("renderHair")
//     var context =canvas.getContext("2d");
//     context.clearRect(0,0,canvas.width,canvas.height);


//     $(function(){
//         var i=0, images = [
//             "<img src='./img/DM/hair/mpmdrblk.png' />",
//             "<img src='img/DM/hair/mshortblk.png' />",
//             "<img src='img/DM/hair/mtprblk.png' />",
//             "<img src='img/DM/hair/mwavyblk.png' />"
//         ];
    
//         $('#mpmdrblk').on("click", function(){
//             var canvas =document.getElementById("renderHair")
//             var context =canvas.getContext("2d");
//             context.clearRect(0,0,canvas.width,canvas.height);
//             // console.log('hi');
//             if (i>=images.length) return;
//             $('#text-center').append(images[i++]);
//         });
//     });


// // });



  $("#mpmdrblk").click(function(){

    var canvas =document.getElementById("renderHair");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderHair");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mpmdrblk");
    ctx.drawImage(img, 0, 0);
  });

  $("#mshortblk").click(function(){

    var canvas =document.getElementById("renderHair");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderHair");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mshortblk");
    ctx.drawImage(img, 0, 0);
  });

  $("#mtprblk").click(function(){

    var canvas =document.getElementById("renderHair");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderHair");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mtprblk");
    ctx.drawImage(img, 0, 0);
  });

  $("#mwavyblk").click(function(){

    var canvas =document.getElementById("renderHair");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderHair");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mwavyblk");
    ctx.drawImage(img, 0, 0);
  });

  $("#mbrneyes").click(function(){

    var canvas =document.getElementById("renderEyes");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderEyes");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mbrneyes");
    ctx.drawImage(img, 0, 0);
  });

  $("#mblueyes").click(function(){

    var canvas =document.getElementById("renderEyes");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderEyes");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mblueyes");
    ctx.drawImage(img, 0, 0);
  });

  $("#mgrneyes").click(function(){

    var canvas =document.getElementById("renderEyes");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderEyes");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mgrneyes");
    ctx.drawImage(img, 0, 0);
  });

  $("#mgryeyes").click(function(){

    var canvas =document.getElementById("renderEyes");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderEyes");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mgryeyes");
    ctx.drawImage(img, 0, 0);
  });



