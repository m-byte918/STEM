$(function() {
    // Level to display gas leak
    const leakLevel = 900;
    
    // Level to display gas leak warning
    const imminentLeakLevel = 800;
    
    // Tab (cause every other method of getting a non breaking tab doesn't seem to align ascii art)
    var t = "&nbsp;&nbsp;&nbsp;&nbsp;";
    
    // Data under first house
    var gasLevel1 = 0;
    var h1_frame = 1;
    var h1_pl1 = "=========:=========:==========:=========";
    var h1_pl2 = "=========_=========_==========_=========";
    var h1_leak1 = t+t+t+t+t+t+t+t+t+t;
    var h1_leak2 = h1_leak1;
    var h1_leak3 = h1_leak1;
    var h1_leak4 = h1_leak1;
    
    // Data under second house
    var gasLevel2 = 0;
    var h2_frame = 1;
    var h2_pl1 = ":=========:==========:=========:=======";
    var h2_pl2 = "_=========_==========_=========_=======";
    var h2_leak1 = t+t+t+t+t+t+t+t+t+"&nbsp;&nbsp;&nbsp;";
    var h2_leak2 = h2_leak1;
    var h2_leak3 = h2_leak1;
    var h2_leak4 = h2_leak1;
    
    // Data under third house
    var gasLevel3 = 0;
    var h3_frame = 1;
    var h3_pl1 = "===:=========:=========:=========<br>";
    var h3_pl2 = "===_=========_=========_=========<br>";
    var h3_leak1 = t+t+t+t+t+t+t+t+"&nbsp;<br>";
    var h3_leak2 = h3_leak1;
    var h3_leak3 = h3_leak1;
    var h3_leak4 = h3_leak1;
    
    function display() {
        // Update display under first house
        if (gasLevel1 < imminentLeakLevel) {
            document.getElementById("gas1").className = "";
            document.getElementById("gas1").innerHTML = "Gas level: " + gasLevel1;
            h1_pl1 = "=========:=========:==========:=========";
            h1_pl2 = "=========_=========_==========_=========";
            h1_leak1 = h1_leak2 = h1_leak3 = h1_leak4 = t+t+t+t+t+t+t+t+t+t;
        } else if (gasLevel1 > leakLevel) {
            document.getElementById("gas1").className = "blinking2";
            document.getElementById("gas1").innerHTML = "Gas level (leak detected): " + gasLevel1;
            h1_pl1 = "=========:=========X==========:=========";
            h1_pl2 = "=========_=========X==========_=========";
            
            // Display gas
            switch(h1_frame++) {
                case 1: { 
                    h1_leak1 = t+t+t+t+"&nbsp;&nbsp;&nbsp;;"+t+t+t+t+t+"&nbsp;&nbsp;"; break;
                }
                case 2: break;
                case 3: {
                    h1_leak2 = t+t+t+t+"&nbsp;&nbsp;&nbsp;;;"+t+t+t+t+t+"&nbsp;"; break;
                }
                case 4: break;
                case 5: {
                    h1_leak3 = t+t+t+t+"&nbsp;&nbsp;;;;;"+t+t+t+t+t; break;
                }
                case 6: break;
                case 7: {
                    h1_leak4 = t+t+t+t+"&nbsp;;;;;;;"+t+t+t+t+"&nbsp;&nbsp;&nbsp;"; break;
                }
                case 8: break;
                default: {
                    h1_frame = 1;
                    h1_leak1 = h1_leak2 = h1_leak3 = h1_leak4 = t+t+t+t+t+t+t+t+t+t;
                }
            }
        } else {
            document.getElementById("gas1").className = "blinking1";
            document.getElementById("gas1").innerHTML = "Gas level (leak imminent): " + gasLevel1;
            h1_pl1 = "=========:=========X==========:=========";
            h1_pl2 = "=========_=========X==========_=========";
            h1_leak1 = h1_leak2 = h1_leak3 = h1_leak4 = t+t+t+t+t+t+t+t+t+t;
        }
        
        // Update display under second house
        if (gasLevel2 < imminentLeakLevel) {
            document.getElementById("gas2").className = "";
            document.getElementById("gas2").innerHTML = "Gas level: " + gasLevel2;
            h2_pl1 = ":=========:==========:=========:=======";
            h2_pl2 = "_=========_==========_=========_=======";
            h2_leak1 = h2_leak2 = h2_leak3 = h2_leak4 = t+t+t+t+t+t+t+t+t+"&nbsp;&nbsp;&nbsp;";
        } else if (gasLevel2 > leakLevel) {
            document.getElementById("gas2").className = "blinking2";
            document.getElementById("gas2").innerHTML = "Gas level (leak detected): " + gasLevel2;
            h2_pl1 = ":=========:=======X==:=========:=======";
            h2_pl2 = "_=========_=======X==_=========_=======";
            
            // Display gas
            switch(h2_frame++) {
                case 1: { 
                    h2_leak1 = t+t+t+t+";"+t+t+t+t+t+"&nbsp;"; break;
                }
                case 2: break;
                case 3: {
                    h2_leak2 = t+t+t+t+";;"+t+t+t+t+t; break;
                }
                case 4: break;
                case 5: {
                    h2_leak3 = t+t+t+"&nbsp;&nbsp;&nbsp;;;;;"+t+t+t+t+"&nbsp;&nbsp;&nbsp;"; break;
                }
                case 6: break;
                case 7: {
                    h2_leak4 = t+t+t+"&nbsp;&nbsp;;;;;;;"+t+t+t+t+"&nbsp;&nbsp;"; break;
                }
                case 8: break;
                default: {
                    h2_frame = 1;
                    h2_leak1 = h2_leak2 = h2_leak3 = h2_leak4 = t+t+t+t+t+t+t+t+t+"&nbsp;&nbsp;&nbsp;";
                }
            }
        } else {
            document.getElementById("gas2").className = "blinking1";
            document.getElementById("gas2").innerHTML = "Gas level (leak imminent): " + gasLevel2;
            h2_pl1 = ":=========:=======X==:=========:=======";
            h2_pl2 = "_=========_=======X==_=========_=======";
            h2_leak1 = h2_leak2 = h2_leak3 = h2_leak4 = t+t+t+t+t+t+t+t+t+"&nbsp;&nbsp;&nbsp;";
        }

        // Update display under third house
        if (gasLevel3 < imminentLeakLevel) {
            document.getElementById("gas3").className = "";
            document.getElementById("gas3").innerHTML = "Gas level: " + gasLevel3;
            h3_pl1 = "===:=========:=========:=========<br>";
            h3_pl2 = "===_=========_=========_=========<br>";
            h3_leak1 = h3_leak2 = h3_leak3 = h3_leak4 = t+t+t+t+t+t+t+t+"&nbsp;<br>";
        } else if (gasLevel3 > leakLevel) {
            document.getElementById("gas3").className = "blinking2";
            document.getElementById("gas3").innerHTML = "Gas level (leak detected): " + gasLevel3;
            h3_pl1 = "===:=========:=====X===:=========<br>";
            h3_pl2 = "===_=========_=====X===_=========<br>";
            
            // Display gas
            switch(h3_frame++) {
                case 1: { 
                    h3_leak1 = t+t+t+t+"&nbsp;&nbsp;;"+t+t+t+"&nbsp;<br>"; break;
                }
                case 2: break;
                case 3: {
                    h3_leak2 = t+t+t+t+"&nbsp;&nbsp;;;"+t+t+t+"<br>"; break;
                }
                case 4: break;
                case 5: {
                    h3_leak3 = t+t+t+t+"&nbsp;;;;;"+t+t+"&nbsp;&nbsp;&nbsp;<br>"; break;
                }
                case 6: break;
                case 7: {
                    h3_leak4 = t+t+t+t+";;;;;;"+t+t+"&nbsp;&nbsp;<br>"; break;
                }
                case 8: break;
                default: {
                    h3_frame = 1;
                    h3_leak1 = h3_leak2 = h3_leak3 = h3_leak4 = t+t+t+t+t+t+t+t+"&nbsp;<br>";
                }
            }
        } else {
            document.getElementById("gas3").className = "blinking1";
            document.getElementById("gas3").innerHTML = "Gas level (leak imminent): " + gasLevel3;
            h3_pl1 = "===:=========:=====X===:=========<br>";
            h3_pl2 = "===_=========_=====X===_=========<br>";
            h3_leak1 = h3_leak2 = h3_leak3 = h3_leak4 = t+t+t+t+t+t+t+t+"&nbsp;<br>";
        }
        
        // Display bottom of pipeline + leak if needed
        document.getElementById("pipelineBottom").innerHTML = h1_pl1   + h2_pl1   + h3_pl1 
                                                            + h1_pl2   + h2_pl2   + h3_pl2
                                                            + h1_leak1 + h2_leak1 + h3_leak1
                                                            + h1_leak2 + h2_leak2 + h3_leak2
                                                            + h1_leak3 + h2_leak3 + h3_leak3
                                                            + h1_leak4 + h2_leak4 + h3_leak4;
    }
    function update() {
        $.get("retrieve.php", function(data) {
            //console.log(/*data*/h1_frame);
            var payload = $.parseJSON(data);
            gasLevel1 = payload.networkData.nodes.node[0].gasLevel;
            gasLevel2 = payload.networkData.nodes.node[1].gasLevel;
            gasLevel3 = payload.networkData.nodes.node[2].gasLevel;
            document.getElementById("time1").innerHTML = "Time: " + payload.networkData.nodes.node[0].timeUpdated;
            document.getElementById("time2").innerHTML = "Time: " + payload.networkData.nodes.node[1].timeUpdated;
            document.getElementById("time3").innerHTML = "Time: " + payload.networkData.nodes.node[2].timeUpdated;
            
            display();
            update();
        });
    }
    update();
});
