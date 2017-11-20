$(document).ready(function(){

  $(".emoji").on("click", function(){
    var emojiName = $(this).attr("id");

    $(".emoji").removeClass("emoji-selected");
    $(this).addClass("emoji-selected");

    $(".icon").addClass("icon-hidden");

    $(".kylo-image").removeClass("shown");
    $(".subtitle").removeClass("shown");

    if (emojiName === "emoji-cake"){
      $(".cake").addClass("shown");

    }else if (emojiName === "emoji-house"){
      $(".house").addClass("shown");

    }else if (emojiName === "emoji-graduation"){
      $(".graduation").addClass("shown");

    }else if (emojiName === "emoji-beach"){
      $(".beach").addClass("shown");

    }else if (emojiName === "emoji-brother"){
      $(".brother").addClass("shown");

    }else if (emojiName === "emoji-nap"){
      $(".nap").addClass("shown");

    }else if (emojiName === "emoji-football"){
      $(".football").addClass("shown");

    }else if (emojiName === "emoji-bff"){
      $(".bff").addClass("shown");

    }else if (emojiName === "emoji-shirt"){
      $(".shirt").addClass("shown");

    }else if (emojiName === "emoji-family"){
      $(".family").addClass("shown");

    }else if (emojiName === "emoji-hug"){
      $(".hug").addClass("shown");

    }else if (emojiName === "emoji-robot"){
      $(".robot").addClass("shown");

    }else if (emojiName === "emoji-car"){
      $(".car").addClass("shown");

    }else if (emojiName === "emoji-cookie"){
      $(".cookie").addClass("shown");

    }else if (emojiName === "emoji-sun"){
      $(".sun").addClass("shown");

    }else if (emojiName === "emoji-lightbulb"){
      $(".lightbulb").addClass("shown");
    }
  });
});
