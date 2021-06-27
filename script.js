function compute()
{
    var principal = document.getElementById("principal").value;
    
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = principal*years*rate/100;
	
    var noOfYear = 2020 + years;
    var output = document.getElementById("result");

    if(principal == ""){
        alert("Amount should not be empty");
        document.getElementById("principal").focus();
        return false;
    }
    else if(principal <= 0 )
    {
        alert("Please enter a positive Amount");
        document.getElementById("principal").focus();
    }
    else
    {
        output.innerHTML="If you deposit "+"<mark>"+principal+"</mark>"+",<br>"+
        "at an interest rate of "+"<mark>"+rate+"%</mark>"+".<br>"
        +"You will receive an amount of "+"<mark>"+interest+"</mark>"
        +",<br>"+"in the year "+"<mark>"+noOfYear+"</mark>";
    }

}
function updateRate()
{
    var slider = document.getElementById("rate").value;
    var output = document.getElementById("rate_val");
    output.innerHTML = slider+"%";
}