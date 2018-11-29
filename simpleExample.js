//Hiiiii
//So here's how to get the data and shit
//I put it in JSON format so like its pretty easy to access the data
//just use
//payload.networkData.nodes.node[NUM].DATA
//where NUM = the sensor number you wanna access, I guess we only have 3 so it's eithier 0, 1, or 2 for now
//and  DATA = whatever you wanna access about that sensor, like gasLevel or timeUpdated
//ex. to get the current gas level of the first of the three sensors use "payload.networkData.nodes.node[0].gasLevel" and it'll return that number as a string

$(function() {
    function update() {
        $.get("retrieve.php", function(data) {
            var payload = $.parseJSON(data); //this takes the json data and allows you to access it using methods
            //In the HTML file there's a paragraph with the id of "dynamically-updating-paragraph" so lets load some data into that paragraph 
            document.getElementById("dynamically-updating-paragraph").innerHTML = "Gas level of Sensor 1: "+payload.networkData.nodes.node[0].gasLevel;
            //if you wanna be fancy and do that same thing but with JQuery instead of getElementById(), you could use
            //$("#dynamically-updating-paragraph").text("Gas level of Sensor 1: "+payload.networkData.nodes.node[0].gasLevel);
            
            update(); //Include this to make sure the page dynamically refreshes over and over until the end of time
        });
    }
    update();
});