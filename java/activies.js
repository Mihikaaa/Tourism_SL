let btnSubmit=document.getElementById("submit");

let fAdults = document.getElementById("no1");

btnSubmit.addEventListener("click",submit);

function submit(event){

    //Foreigner
    event.preventDefault();//prevents page from reloading

    let optActivities =document.getElementById("activities");
    let activities =optActivities.options[optActivities.selectedIndex].value;
    console.log("Activities:"+activities);

    console.log("No. Of Tickets Foreigner(no0f_adul):",document.getElementById("no1").value);
    /console.log("No. Of Tickets Foreigner(noof_child):",document.getElementById("no2").value);/

    let timef=document.querySelector("input[name='timef']:checked");
    console.log("Duration:"+timef);

    console.log("Extras Annual Pass:",document.getElementById("ex1").value);
    console.log("Extras Food Token:",document.getElementById("xx1").value); 
}

let btnSubmit1=document.getElementById("submit1");
btnSubmit.addEventListener("click",submit1);

function submit1(){

    //Local
    let optActivities1 =document.getElementById("activities1");
    let activities1 =optActivities1.options[optActivities1.selectedIndex].value;
    console.log("Activities:"+activities1);

    console.log("No. Of Tickets Local (Adult)",document.getElementById("no4").value);
    console.log("No. Of Tickets Local(Child Below 16):",document.getElementById("no5").value);
    console.log("No. Of Tickets Local(Child Below 6):",document.getElementById("no6").value);

    let duration=document.getElementById("duration").value;
    let time;
    if (duration == "Three Hours") {
        time = document.getElementById("t1").value 
    }
    else if (duration == "Half Day") {
        time = document.getElementById("t2").value
    }
    else if (duration == "Full Day") {
        time = document.getElementById("t3").value
    }
    else if (duration == "Two Days") {
        time = document.getElementById("t4").value
    }
    console.log("Duration:"+ time);

    console.log("Extras Annual Pass:",document.getElementById("ex").value);
    console.log("Extras Food Token:",document.getElementById("xx").value);

    let totaltickets = parseInt(document.getElementById("no1").value) + parseInt(document.getElementById("no2").value) + parseInt(document.getElementById("no4").value) + parseInt(document.getElementById("no5").value) + parseInt(document.getElementById("no6").value) + parseInt(document.getElementById("ex1").value) + parseInt(document.getElementById("xx1").value) + parseInt(document.getElementById("ex").value) + parseInt(document.getElementById("xx").value);
    console.log(totaltickets);
    
    //foreign
    document.getElementById("price2").innerText = totaltickets;

    let totalPrice = parseInt(document.getElementById("no1").value * 3000) + parseInt(document.getElementById("no2").value * 2500) + parseInt(document.getElementById("no4").value * 2500) + parseInt(document.getElementById("no5").value * 1000) + parseInt(document.getElementById("no6").value * 500) + parseInt(document.getElementById("ex1").value * 5000) + parseInt(document.getElementById("xx1").value * 500) + parseInt(document.getElementById("ex").value * 5000) + parseInt(document.getElementById("xx").value * 500);
    console.log(totalPrice);

    document.getElementById("price4").innerText = totalPrice;

}
    function myFunction() {

    let duration=document.getElementById("duration").value;
    let time;
    if (duration == "Three Hours") {
        time = document.getElementById("t1").value 
    }
    else if (duration == "Half Day") {
        time = document.getElementById("t2").value
    }
    else if (duration == "Full Day") {
        time = document.getElementById("t3").value
    }
    else if (duration == "Two Days") {
        time = document.getElementById("t4").value
    }

        document.getElementById("price1").innerText = "";
        document.getElementById("price3").innerText = "";
    }

    function myFunction1() {

        let activity1 = document.getElementById("activities1").value
        let activity2 = document.getElementById("activities").value
        if (activity1 == "" && activity2 == "")


        {
            alert("Incomplete Order!!");
        }
        if (activity1 == "Whale Watching" || activity2 == "Whale Watching")
        {
            alert("Thank You your reservation ");
        }
        else if (activity1 == "Hiking" || activity2 == "Hiking")
        {
            alert("Thank You your reservation ");
        }
        else if (activity1 == "Diving" || activity2 == "Diving")
        {
            alert("Thank You your reservation ")
        }

    }

    let tickets = [];
    function addCurrent(){
        console.log("ebvuufb")

        let currentTickets = parseInt(document.getElementById("no1").value) + parseInt(document.getElementById("no2").value) + parseInt(document.getElementById("ex1").value) + parseInt(document.getElementById("xx1").value);
        console.log(currentTickets) + parseInt(document.getElementById("ex").value) + parseInt(document.getElementById("xx").value);

        //foreign
        document.getElementById("price1").innerText = currentTickets;

        let currentPrice = parseInt(document.getElementById("no1").value * 3000) + parseInt(document.getElementById("no2").value * 2500) + parseInt(document.getElementById("ex1").value * 5000) + parseInt(document.getElementById("xx1").value * 500) + parseInt(document.getElementById("ex").value * 5000) + parseInt(document.getElementById("xx").value * 500);
        console.log(currentPrice);

        document.getElementById("price3").innerText = currentPrice;
       
        
    }
