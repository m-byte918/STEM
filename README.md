# STEM Gas Sensor Web Display
[![Github version](https://img.shields.io/badge/version-0.69-green.svg)]()
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
=========================================================================
/////////////////////////////////////////////////////////////////////////
=========================================================================
                               pipeline^^
                               


  ____||____                   ____||____                   ____||____
 ///////////\                 ///////////\                 ///////////\
///////////  \               ///////////  \               ///////////  \
|    _    |  |               |    _    |  |               |    _    |  |
|[] | | []|[]|               |[] | | []|[]|               |[] | | []|[]|
|   | |   |  |               |   | |   |  |               |   | |   |  |
  |                             |                            |
Sensor 1 (leak detected)        Sensor 2                     Sensor 3
=========================================================================
/////////////////////////////////////////////////////////////////////////
==========,==============================================================
          ,                     pipeline^^
          ,,
         ,,,,
        ,,,,,,

*the gas will leak when the sensor detects levels greater than <insert value here lol>
```
