// click event for gray button
$("#grayButton").on("click",switchGray);
// click event for white button
$("#whiteButton").on("click",switchWhite);

function switchGray() {
  let backgroundGray=$("body");
backgroundGray.css("background", "gray");
    // change background to gray
    backgroundGray.css("color", "white")

    // change font to white
}

function switchWhite() {
  let backgroundWhite=$("body");
backgroundWhite.css("background", "white");
backgroundWhite.css("color", "gray")
    // change background to white
    // change font to black
}
