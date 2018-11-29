$(function() {
    function update() {
        $.get("retrieve.php", function(data) {
            console.log(data);
            var payload = $.parseJSON(data);
            document.getElementById("gas1").innerHTML = "Gas level: "+payload.networkData.nodes.node[0].gasLevel;
            document.getElementById("gas2").innerHTML = "Gas level: "+payload.networkData.nodes.node[1].gasLevel;
            document.getElementById("gas3").innerHTML = "Gas level: "+payload.networkData.nodes.node[2].gasLevel;
            document.getElementById("time1").innerHTML = "Time: "+payload.networkData.nodes.node[0].timeUpdated;
            document.getElementById("time2").innerHTML = "Time: "+payload.networkData.nodes.node[1].timeUpdated;
            document.getElementById("time3").innerHTML = "Time: "+payload.networkData.nodes.node[2].timeUpdated;
            update();
        });
    }
    update();
});