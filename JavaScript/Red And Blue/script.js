("button").click(function () {
    clicked = true;
    if (clicked) {
      (this).toggleClass('active');
      clicked = true;
    } else {
      (this).removeClass('active');
      clicked =true;
    }
  });
  
(".btn").click(function() {
  
    var lable = $(".btn").text().trim();
 
    if(lable == "hide") {
      (".btn").text("show");
      (".mytext").hide();
    }
    else {
      (".btn").text("hide");
      (".mytext").show();
    }
     
   });
   $(document).ready(function(){
    $(".btn1").click(function(){
      $("p").hide();
    });
    $(".btn2").click(function(){
      $("p").show();
    });
  });