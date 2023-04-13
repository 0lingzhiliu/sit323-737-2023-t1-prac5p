var async =function () {
    setTimeout(function(){log("i am coming out later although i have been called before the next one")},2000)
}
var adder = function(first,second){
    var sum = first +second
}
var log =function(msg){
    console.log{"[log]:",msg}
}
async();
log("this is going to come out before the previous one")
log("the sum is"+adder(5,6))