$(function() {
    // Level to display gas leak
    const leakLevel = 800;

    // Level to display gas leak warning
    const imminentLeakLevel = 600;

    // Data under first house
    var gasLevel1 = 0;

    // Data under second house
    var gasLevel2 = 0;
    
    // Data under third house
    var gasLevel3 = 0;
    
    // Pipeline
    stage = acgraph.create('stage-container');
    var crack1 = stage.path();
    var crack2 = stage.path();
    var crack3 = stage.path();
    var gasParticles = [];
    
    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function contains(bound1, bound2) {
        if (bound1.getX() > bound2.getX()) return false;
        if (bound1.getY() > bound2.getY()) return false;
        if (bound1.getX() + bound1.getBounds().width  < bound2.getX() + bound2.getBounds().width)  return false;
        if (bound1.getY() + bound1.getBounds().height < bound2.getY() + bound2.getBounds().height) return false;
        return true; // within bounds
    }
    
    // Gas particle class
    class GasParticle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.speed  = randInt(3, 13);
            this.angle  = (2 + 2 * Math.random()) * Math.PI / 6;
            this.object = stage.circle(x, y, randInt(1, 5)).stroke('white');
        }
        update() {
            // update velocity
            this.x += this.speed * Math.cos(this.angle);
            this.y += this.speed * Math.sin(this.angle);
            this.object.setPosition(this.x, this.y);
        }
    }
    
    function display() {
        stage.suspend();
        crack1.clear();
        crack2.clear();
        crack3.clear();
        for (var i = 0; i < gasParticles.length; ++i) {
            var particle = gasParticles[i];
            particle.update();
            if (!contains(stage, particle.object)) {
                gasParticles.splice(i, 1);
                particle.object.remove();
            }
        }
        // Update display under first house
        if (gasLevel1 < imminentLeakLevel) {
            document.getElementById("gas1").className = "";
            document.getElementById("gas1").innerHTML = "Gas level: " + gasLevel1;
        } else {
            crack1.moveTo(document.getElementById('house1').getBoundingClientRect().left + document.getElementById('house1').getBoundingClientRect().width / 2, outline.getBounds().getBottom())
                  .lineTo((document.getElementById('house1').getBoundingClientRect().left + document.getElementById('house1').getBoundingClientRect().width / 2) - 10, outline.getBounds().getBottom() - outline.getHeight() / 6)
                  .lineTo((document.getElementById('house1').getBoundingClientRect().left + document.getElementById('house1').getBoundingClientRect().width / 2) + 10, outline.getBounds().getBottom() - outline.getHeight() / 3.5)
                  .lineTo(document.getElementById('house1').getBoundingClientRect().left + document.getElementById('house1').getBoundingClientRect().width / 2, outline.getX() + outline.getHeight());
            if (gasLevel1 > leakLevel) {
                document.getElementById("gas1").className = "blinking2";
                document.getElementById("gas1").innerHTML = "Gas level (leak detected): " + gasLevel1;
                gasParticles.push(new GasParticle(document.getElementById('house1').getBoundingClientRect().left + document.getElementById('house1').getBoundingClientRect().width / 2, outline.getBounds().getBottom()));
            } else {
                document.getElementById("gas1").className = "blinking1";
                document.getElementById("gas1").innerHTML = "Gas level (leak imminent): " + gasLevel1;
            }
        }
        // Update display under second house
        if (gasLevel2 < imminentLeakLevel) {
            document.getElementById("gas2").className = "";
            document.getElementById("gas2").innerHTML = "Gas level: " + gasLevel2;
        } else {
            crack2.moveTo(document.getElementById('house2').getBoundingClientRect().left + document.getElementById('house2').getBoundingClientRect().width / 2, outline.getBounds().getBottom())
                  .lineTo((document.getElementById('house2').getBoundingClientRect().left + document.getElementById('house2').getBoundingClientRect().width / 2) - 10, outline.getBounds().getBottom() - outline.getHeight() / 6)
                  .lineTo((document.getElementById('house2').getBoundingClientRect().left + document.getElementById('house2').getBoundingClientRect().width / 2) + 10, outline.getBounds().getBottom() - outline.getHeight() / 3.5)
                  .lineTo(document.getElementById('house2').getBoundingClientRect().left + document.getElementById('house2').getBoundingClientRect().width / 2, outline.getX() + outline.getHeight());
            if (gasLevel2 > leakLevel) {
                document.getElementById("gas2").className = "blinking2";
                document.getElementById("gas2").innerHTML = "Gas level (leak detected): " + gasLevel2;
                gasParticles.push(new GasParticle(document.getElementById('house2').getBoundingClientRect().left + document.getElementById('house2').getBoundingClientRect().width / 2, outline.getBounds().getBottom()));
            } else {
                document.getElementById("gas2").className = "blinking1";
                document.getElementById("gas2").innerHTML = "Gas level (leak imminent): " + gasLevel2;
            }
        }
        // Update display under third house
        if (gasLevel3 < imminentLeakLevel) {
            document.getElementById("gas3").className = "";
            document.getElementById("gas3").innerHTML = "Gas level: " + gasLevel3;
        } else {
            crack3.moveTo(document.getElementById('house3').getBoundingClientRect().left + document.getElementById('house3').getBoundingClientRect().width / 2, outline.getBounds().getBottom())
                  .lineTo((document.getElementById('house3').getBoundingClientRect().left + document.getElementById('house3').getBoundingClientRect().width / 2) - 10, outline.getBounds().getBottom() - outline.getHeight() / 6)
                  .lineTo((document.getElementById('house3').getBoundingClientRect().left + document.getElementById('house3').getBoundingClientRect().width / 2) + 10, outline.getBounds().getBottom() - outline.getHeight() / 3.5)
                  .lineTo(document.getElementById('house3').getBoundingClientRect().left + document.getElementById('house3').getBoundingClientRect().width / 2, outline.getX() + outline.getHeight());
            if (gasLevel3 > leakLevel) {
                document.getElementById("gas3").className = "blinking2";
                document.getElementById("gas3").innerHTML = "Gas level (leak detected): " + gasLevel3;
                gasParticles.push(new GasParticle(document.getElementById('house3').getBoundingClientRect().left + document.getElementById('house3').getBoundingClientRect().width / 2, outline.getBounds().getBottom()));
            } else {
                document.getElementById("gas3").className = "blinking1";
                document.getElementById("gas3").innerHTML = "Gas level (leak imminent): " + gasLevel3;
            }
        }
        stage.resume();
    }
    function update() {
        $.get("retrieve.php", function(data) {
            var payload = $.parseJSON(data);
            gasLevel1 = payload.networkData.nodes.node[0].gasLevel;
            gasLevel2 = payload.networkData.nodes.node[1].gasLevel;
            gasLevel3 = payload.networkData.nodes.node[2].gasLevel;
            document.getElementById("time1").innerHTML = "Time: " + payload.networkData.nodes.node[0].timeUpdated;
            document.getElementById("time2").innerHTML = "Time: " + payload.networkData.nodes.node[1].timeUpdated;
            document.getElementById("time3").innerHTML = "Time: " + payload.networkData.nodes.node[2].timeUpdated;

            update();
        });
    }
    // This should only be called once to draw pipeline outline
    function drawPipeline() {
        var housesWidth  = document.getElementById('houses').offsetWidth;
        var housesHeight = document.getElementById('houses').offsetHeight;

        // Pipeline outline
        outline = stage.rect(stage.getBounds().left, stage.getBounds().top + 50, housesWidth, housesHeight / 6).stroke('grey').fill(['darkgrey', 'lightgrey'], 60);

        // Pipeline sections and rivets
        var spacing = housesWidth / 6.29;
        for (var i = 0, rectOffset = spacing / 3; i < Math.floor(housesWidth / spacing); ++i, rectOffset += spacing) {
            var r = stage.rect(rectOffset, outline.getBounds().top - outline.getHeight() / 2, outline.getWidth() / 84.8, outline.getHeight() * 2).stroke('grey').fill(['darkgrey', 'lightgrey'], 15);
            var x = r.getBounds().left + r.getWidth() / 2;
            var y = r.getBounds().top + r.getHeight() / 3 / 2;
            var radius = r.getWidth() / 2 / 2;
            stage.circle(x, y, radius).stroke('grey').fill(['darkgrey', 'lightgrey'], 70);
            y += r.getHeight() / 3;
            stage.circle(x, y, radius).stroke('grey').fill(['darkgrey', 'lightgrey'], 70);
            y += r.getHeight() / 3;
            stage.circle(x, y, radius).stroke('grey').fill(['darkgrey', 'lightgrey'], 70);
        }
        // Set up craccs
        crack1 = stage.path();
        crack2 = stage.path();
        crack3 = stage.path();
    }
    update();

    // Draw after 3 seconds
    setTimeout(function() {
        drawPipeline();
        // Update at 15fps
        setInterval(display, 1000/15);
    }, 3000);
});