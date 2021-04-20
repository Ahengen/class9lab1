$(document).ready(function () {
    $("button").click(runLoops);
});

function runLoops() {
    // Clear out all existing images from divs
    $("div.imageHolder").empty();

    // Get the number from the box
    let num = parseInt($("input#numPics").val());

    // Print the desired number of images for each loop
    $("span#while-num").text(num + 1);
    $("span#do-while-num").text(num - 1);
    $("span#for-num").text(num);


    /*
     Create a while loop that runs "num + 1" times.

     The body of the loop should contain the statement:

        addImageToDiv("#while-loop");
    */
    let start = 0;
    let end = num + 1;
    let ball = start;
    while (ball < end)
    {
        ball++; //move the ball toward the end
        addImageToDiv("#while-loop");
    }



    /*
     Create a do-while loop that runs "num - 1" times.

     The body of the loop should contain the statement:

        addImageToDiv("#do-while-loop");
    */
    let start2 = 0;
    let end2 = num - 1;
    let ball2 = start2;

    do {
        addImageToDiv("#do-while-loop");
        ball2++;
    } while(ball2 < end2);


    /*
     Create a for loop that runs exactly "num" times.

     The body of the loop should contain the statement:

        addImageToDiv("#for-loop");
    */
    let start3 = 0;
    let end3 = num;
    for (let ball3 = start3; ball3 < end3; ball3++) {
        addImageToDiv("#for-loop");
    }




}

function addImageToDiv(divId) {
    let fileName = $(":radio[name='pictureSelect']:checked").val();
    // Create a new image element
    let imageElement = $("<img>");
    // Set its source attribute
    imageElement.attr("src", `img/${fileName}`);
    // Add it as a child of another element
    $(divId).append(imageElement);
}