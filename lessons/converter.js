//orgLink = "//lamp.cse.fau.edu/~zinthapanya2016/Website/Lesson2/Converter.php"

document.getElementById("b_to_d").onclick = function(){
    var Temp = document.getElementById("input").value;
    
    if (isNaN(Temp) === false){
        document.getElementById("Result").innerhtml = BtoD(Temp);
        alert("The result of the conversion is: " + document.getElementById("Result").innerhtml);
    }
};

document.getElementById("d_to_b").onclick = function(){
    var Temp = document.getElementById("input").value;
    
    if (isNaN(Temp) === false){
        document.getElementById("Result").innerhtml = DtoB(Temp);
        alert("The result of the conversion is: " + document.getElementById("Result").innerhtml);
    }
};

document.getElementById("h_to_d").onclick = function(){
    var Temp = document.getElementById("input").value;
    
    document.getElementById("Result").innerhtml = HtoD(Temp);
    alert("The result of the conversion is: " + document.getElementById("Result").innerhtml);
};

document.getElementById("d_to_h").onclick = function(){
    var Temp = document.getElementById("input").value;
    
    document.getElementById("Result").innerhtml = DtoH(Temp);
    alert("The result of the conversion is: " + document.getElementById("Result").innerhtml);
};

function BtoD(binary){
    var string = binary.toString();
    return parseInt(string, 2);
}

function DtoB(decimal){
    var num = Number(decimal);
    return (num).toString(2);
}

function HtoD(hexadecimal){
    return parseInt(hexadecimal, 16);
}

function DtoH(decimal){
    var num = Number(decimal);
    return (num).toString(16);
}
