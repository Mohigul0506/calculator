const me = document.getElementById("me");
function appendToDisplay(input){
    me.value+=input;
}
function  clearDisplay(){
    me.value="";

}
  
function calculate(){
    try{
        me.value=eval(me.value);
    }
    catch(error){
         me.value="error"
    }
}