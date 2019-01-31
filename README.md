# STEM Gas Sensor Web Display
[![Github version](https://img.shields.io/badge/version-0.69-green.svg)](http://lmgtfy.com/?q=69)
<p>Pulls sensor data from a database and displays it asynchronysly and in real time</p>

```
  ____||____                   ____||____                   ____||____
 ///////////\                 ///////////\                 ///////////\
///////////  \               ///////////  \               ///////////  \
|    _    |  |               |    _    |  |               |    _    |  |
|[] | | []|[]|               |[] | | []|[]|               |[] | | []|[]|
|   | |   |  |               |   | |   |  |               |   | |   |  |       
  |                             |                            |
  Sensor 1                      Sensor 2                     Sensor 3
=========^=========^=========^=========^=========^=========^=========^========
         :         :         :         :         :         :         :        
=========_=========_=========_=========_=========_=========_=========_========
                               pipeline^^
                               


  ____||____                   ____||____                   ____||____
 ///////////\                 ///////////\                 ///////////\
///////////  \               ///////////  \               ///////////  \
|    _    |  |               |    _    |  |               |    _    |  |
|[] | | []|[]|               |[] | | []|[]|               |[] | | []|[]|
|   | |   |  |               |   | |   |  |               |   | |   |  |
  |                             |                            |
Sensor 1 (leak detected)        Sensor 2                     Sensor 3
=========^=========^=========^=========^=========^=========^=========^========
         :         :         :         :         :         :         :        
=========_===x=====_=========_=========_=========_=========_=========_========
             ,                pipeline^^
             ,,
            ,,,,
           ,,,,,,

*When a sensor detects levels greater than 300, it will throw an "imminent" warning
*When a sensor detects levels greater than 700, it will throw a "leaking" warning and display gas escaping from the pipeline.
```
