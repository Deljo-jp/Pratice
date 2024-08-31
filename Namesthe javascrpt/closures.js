// Closures




function p(){
    var b = 400;
    function x(){
        var a = 10;
        function y(){
            console.log(a,b);
        } 
        y();
    }
    x();
}
p();