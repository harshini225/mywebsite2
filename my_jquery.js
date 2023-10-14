// $(document).ready(function() {
//   $('a').click(function(event) {
//     event.preventDefault();
//     $(this).hide("slow");
//   });
// });

$(document).ready(function() {
    console.log("hello");

    // first try 
    // $(document).click(function(e) {
    //     console.log("pressed");

    //     $( ".image" ).css("display", "flex");

    //     let w = $('.image')[0];

    //     let clientWidth = w.clientWidth;
    //     let clientHeight = w.clientHeight;

    //     var relX = e.pageX - (0.5 * clientWidth);
    //     var relY = e.pageY - (0.5 * clientHeight);

    //     $( ".image" ).css("top", relY);
    //     $( ".image" ).css("left", relX);
    //     $( "body" ).css("cursor", "crosshair");   
    // });

    // uncomment for cool animation LOL
    // $(document).click(function(e) {
    //     console.log("something")
    //     var image = document.createElement("img");
    //     var imageParent = document.getElementsByClassName("content")[0];
    //     image.id = "fish0";
    //     image.className = "image";
    //     image.src = "fish.jpeg";            // image.src = "IMAGE URL/PATH"
    //     imageParent.appendChild(image);

    //     $( ".image" ).css("display", "flex");
    //     let w = $('.image')[0];

    //     let clientWidth = w.clientWidth;
    //     let clientHeight = w.clientHeight;

    //     var relX = e.pageX - (0.5 * clientWidth);
    //     var relY = e.pageY - (0.5 * clientHeight);

    //     $( ".image" ).css("top", relY);
    //     $( ".image" ).css("left", relX);
    //     $( "body" ).css("cursor", "crosshair");
    // });

    $(document).click(function(e) {
        console.log("something")
        var image = document.createElement("img");
        var imageParent = document.getElementsByClassName("content")[0];
        image.id = "fish0";
        image.className = "image";
        image.src = "fish.jpeg";            // image.src = "IMAGE URL/PATH"
        imageParent.appendChild(image);

        $( ".image" ).css("display", "flex");
        let w = document.getElementsByClassName("invis")[0];

        let clientWidth = w.clientWidth;
        let clientHeight = w.clientHeight;

        var relX = e.pageX - (0.5 * clientWidth);
        var relY = e.pageY - (0.5 * clientHeight);
        
        console.log(w)
        console.log(e.pageX)
        console.log(clientWidth)
        console.log(e.pageY)
        console.log(clientHeight)

        $( image ).css("top", relY);
        $( image ).css("left", relX);
        $( "body" ).css("cursor", "crosshair");
    });

    $(document).keydown(function(e) {
        if (e.keyCode == 13) {
            window.location.href = "https://harshini.me"; 
        }
    });

    // $(document.createElement("img"))
    //     .attr({ src: 'fish.jpeg', title: 'Fish' })
    //     .addClass(".image")
    //     .appendTo(document.getElementById("content"))
    //     .click(function(f){
    //         console.log("something");
    //         $( ".image" ).css("display", "flex");

    //         let w = $('.image')[0];

    //         let clientWidth = w.clientWidth;
    //         let clientHeight = w.clientHeight;

    //         var relX = f.pageX - (0.5 * clientWidth);
    //         var relY = f.pageY - (0.5 * clientHeight);

    //         $( ".image" ).css("top", relY);
    //         $( ".image" ).css("left", relX);
    //         $( "body" ).css("cursor", "crosshair");  
    //     });
});
