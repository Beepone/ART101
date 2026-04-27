let money = 0;

$("daButton").click(whatDaButtonDo)


function whatDaButtonDo(){
    money = money + 1;
    $("#daMoney").html("You have " + money + " monies...");
}