var abc = new XMLHttpRequest();
abc.open("GET", "https://restcounties.eu/rest/v2/all");
function xxx(values){
    console.log(values);
}
abc.onload = function(){
    var t = JSON.parse(this.response);
    xxx(t);
}
abc.error = function(){
    console.log("Error",this.statustext);
};
abc.send();