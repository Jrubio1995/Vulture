// const fabric = require("fabric").fabric;

$(document).load("", function () {
    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkstf");
    ctx.drawImage(img, 0, 0);

    $("#renderChar").removeClass("masc").addClass("fem")
    $("#dollPartsf").hide();
    $("#dollPartsm").hide();
    $(".done").hide();
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

    $("#renderChar").removeClass("masc").addClass("fem")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkrf");
    ctx.drawImage(img, 0, 0);
});

$("#drkrm").click(function () {

    $("#renderChar").removeClass("fem").addClass("masc")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkrm");
    ctx.drawImage(img, 0, 0);
});

$("#drkf").click(function () {

    $("#renderChar").removeClass("masc").addClass("fem")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkf");
    ctx.drawImage(img, 0, 0);
});

$("#drkm").click(function () {

    $("#renderChar").removeClass("fem").addClass("masc")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drkm");
    ctx.drawImage(img, 0, 0);
});

$("#mdf").click(function () {

    $("#renderChar").removeClass("masc").addClass("fem")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mdf");
    ctx.drawImage(img, 0, 0);
});

$("#mdm").click(function () {

    $("#renderChar").removeClass("fem").addClass("masc")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mdm");
    ctx.drawImage(img, 0, 0);
});

$("#ltstf").click(function () {

    $("#renderChar").removeClass("masc").addClass("fem")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ltstf");
    ctx.drawImage(img, 0, 0);
});

$("#ltstm").click(function () {

    $("#renderChar").removeClass("fem").addClass("masc")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ltstm");
    ctx.drawImage(img, 0, 0);
});

$("#ltrf").click(function () {

    $("#renderChar").removeClass("masc").addClass("fem")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ltrf");
    ctx.drawImage(img, 0, 0);
});

$("#ltrm").click(function () {

    $("#renderChar").removeClass("fem").addClass("masc")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ltrm");
    ctx.drawImage(img, 0, 0);
});

$("#ltf").click(function () {

    $("#renderChar").removeClass("masc").addClass("fem")

    var canvas = document.getElementById("renderChar");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("renderChar");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ltf");
    ctx.drawImage(img, 0, 0);
});

$("#ltm").click(function () {

    $("#renderChar").removeClass("fem").addClass("masc")

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
        $(".done").show();
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

// Female parts
// Female hair

$("#fponyblk").click(function(){

    var canvas =document.getElementById("renderHair");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderHair");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fponyblk");
    ctx.drawImage(img, 0, 0);
  });

  $("#flongstrtblk").click(function(){

    var canvas =document.getElementById("renderHair");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderHair");
    var ctx = c.getContext("2d");
    var img = document.getElementById("flongstrtblk");
    ctx.drawImage(img, 0, 0);
  });

  $("#fshortblk").click(function(){

    var canvas =document.getElementById("renderHair");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderHair");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fshortblk");
    ctx.drawImage(img, 0, 0);
  });

  $("#fwavyblk").click(function(){

    var canvas =document.getElementById("renderHair");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderHair");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fwavyblk");
    ctx.drawImage(img, 0, 0);
  });
// Female eyes
  $("#fbrwneyes").click(function(){

    var canvas =document.getElementById("renderEyes");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderEyes");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fbrwneyes");
    ctx.drawImage(img, 0, 0);
  });

  $("#fblueyes").click(function(){

    var canvas =document.getElementById("renderEyes");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderEyes");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fblueyes");
    ctx.drawImage(img, 0, 0);
  });

  $("#fgrneyes").click(function(){

    var canvas =document.getElementById("renderEyes");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderEyes");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fgrneyes");
    ctx.drawImage(img, 0, 0);
  });

  $("#fgryeyes").click(function(){

    var canvas =document.getElementById("renderEyes");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderEyes");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fgryeyes");
    ctx.drawImage(img, 0, 0);
  });
//  Female clothes

$("#farmor").click(function(){

    var canvas =document.getElementById("renderCloth");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderCloth");
    var ctx = c.getContext("2d");
    var img = document.getElementById("farmor");
    ctx.drawImage(img, 0, 0);
  });
  $("#ftunic").click(function(){

    var canvas =document.getElementById("renderCloth");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderCloth");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ftunic");
    ctx.drawImage(img, 0, 0);
  });
  $("#fbard").click(function(){

    var canvas =document.getElementById("renderCloth");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderCloth");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fbard");
    ctx.drawImage(img, 0, 0);
  });
  $("#fwiz").click(function(){

    var canvas =document.getElementById("renderCloth");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderCloth");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fwiz");
    ctx.drawImage(img, 0, 0);
  });


// male parts
// male hair

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
// Male eyes
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
//   Male clothes

$("#marmor").click(function(){

    var canvas =document.getElementById("renderCloth");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderCloth");
    var ctx = c.getContext("2d");
    var img = document.getElementById("marmor");
    ctx.drawImage(img, 0, 0);
  });
  $("#mtunic").click(function(){

    var canvas =document.getElementById("renderCloth");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderCloth");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mtunic");
    ctx.drawImage(img, 0, 0);
  });
  $("#mbard").click(function(){

    var canvas =document.getElementById("renderCloth");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderCloth");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mbard");
    ctx.drawImage(img, 0, 0);
  });
  $("#mwiz").click(function(){

    var canvas =document.getElementById("renderCloth");
    var context =canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);

    var c = document.getElementById("renderCloth");
    var ctx = c.getContext("2d");
    var img = document.getElementById("mwiz");
    ctx.drawImage(img, 0, 0);
  });


  $(document).ready(function () {
    $(".done").click(function () {
        var canvas=document.getElementById('canvas0');
        var context=canvas.getContext('2d');
        
        context.drawImage(myImage,0,0);

        var canvas1=document.getElementById('renderChar');
        var canvas2=document.getElementById('renderEyes');
        var canvas3=document.getElementById('renderHair');
        var canvas4=document.getElementById('renderCloth');
        
        // merge 4 canvases (canvas1-canvas4) onto a single canvas
        // (this example assumes canvas1-4 are 100x100 -- adjust to your needs)
        context.drawImage(canvas1,500,1000);
        context.drawImage(canvas2,500,1000);
        context.drawImage(canvas3,500,1000);
        context.drawImage(canvas4,500,1000);
    });

});

var img=new Image();
img.onload=function(){
    document.body.appendChild(img);
}
img.src=dataURL;