function Declaration(){
    return 2+3;
}
console.log("Result of Declaration: " + Declaration());

let Expression = function(){
    return 5+7;
}
console.log("Result of Expression: " + Expression());

function DeclarationwithParms(num1, num2){
    return num1+num2;
}
console.log("Result of DeclarationwithParms: " + DeclarationwithParms("Anh", "Le"));

let ArrowExpression = () => {
    return "Hoang Anh Le"
}
console.log(ArrowExpression());

(() => {
    console.log("Anonymous function")
})();

