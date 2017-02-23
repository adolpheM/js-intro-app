var boxOneClick = 0
var boxTwoClick = 0
var boxThreeClick = 0

function clickAllBox(boxClick){
  if ((boxOneClick === 1) && (boxTwoClick === 1)  && (boxThreeClick === 0)){
    alert ("you win");
  }else if (boxClick === boxOneClick){
    console.log("Try Again");
    boxOneClick++;
  }else if (boxClick === boxTwoClick){
    console.log("Try Again");
    boxTwoClick++;
  }else if (boxClick === boxThreeClick){
    console.log("Try Again");
    boxThreeClick++;
  }
}