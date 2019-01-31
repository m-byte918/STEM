#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>
#include <WiFiUdp.h>
#include <ArduinoOTA.h>
#include <ESP8266HTTPClient.h>
#include <SoftwareSerial.h>
#include <Adafruit_NeoPixel.h>

#define STA_SSID "PICKERING-NETWORK"
#define STA_PASS "team4396ftc"
#define BAUD_RATE 2400

//Board-specific settings
const int BOARD_ID = 2;
const char HOSTNAME[] = "PICKERING-4";
const char PASSWORD[] = "team4396ftc";

//Other variable definitions
const int serialPin = 13;
const int pixelPin = 4;
const int buzzerPin = 5;
const char* ssid = STA_SSID;
const char* pass = STA_PASS;
const int buzzerFreq = 3750;
const int pixelBrightness = 255;
String inData;
int gasSensorData;
int threshholdValue = 500; //EDIT THIS TO BE UPDATED EACH CALL!

HTTPClient http;
SoftwareSerial ReceiveOnlySerial(serialPin, SW_SERIAL_UNUSED_PIN);
Adafruit_NeoPixel LED = Adafruit_NeoPixel(1, pixelPin, NEO_GRB + NEO_KHZ800);

void setup() {
  LED.begin();
  LED.setBrightness(pixelBrightness);
  LED.setPixelColor(0, 0xFFA500);
  LED.show();
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) {
    yield();
  }

  ArduinoOTA.setHostname(HOSTNAME);
  ArduinoOTA.setPassword(PASSWORD);
  ArduinoOTA.onStart([]() {
    String type;
    if (ArduinoOTA.getCommand() == U_FLASH) {
      type = "sketch";
    } else { // U_SPIFFS
      type = "filesystem";
    }
    LED.setPixelColor(0, 0x0000FF);
    LED.show();
  });
  ArduinoOTA.onEnd([]() {
  });
  ArduinoOTA.onProgress([](unsigned int progress, unsigned int total) {
  });
  ArduinoOTA.onError([](ota_error_t error) {
    if (error == OTA_AUTH_ERROR) {
    } else if (error == OTA_BEGIN_ERROR) {
    } else if (error == OTA_CONNECT_ERROR) {
    } else if (error == OTA_RECEIVE_ERROR) {
    } else if (error == OTA_END_ERROR) {
    }
  });
  ArduinoOTA.begin();
  handleOTA();
  //SAFE TO MODIFY AFTER THIS POINT!
  ReceiveOnlySerial.begin(BAUD_RATE);
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    getGasSensorData();
    if (gasSensorData <= threshholdValue) {
      //GOOD!
      LED.setPixelColor(0, 0x00FF00);
      LED.show();
    } else {
      //BAD!
      LED.setPixelColor(0, 0xFF0000);
      LED.show();
    }
    //MAKE REQUESTS
    http.begin("http://braiden.net/STEM/push.php?residence_id="+String(BOARD_ID)+"&gas_level="+String(gasSensorData));
    http.GET();
    http.end();
  } else {
    LED.setPixelColor(0, 0xFFA500);
    LED.show();
    yield();
    delay(200);
  }
}

void handleOTA() {
  for (int i = 0; i < 10; i++) { //4 seconds of OTA time
    LED.setPixelColor(0, 0xFFFF00);
    LED.show();
    ArduinoOTA.handle();
    delay(200);
    LED.setPixelColor(0, 0x000000);
    LED.show();
    ArduinoOTA.handle();
    delay(200);
  }
  LED.setPixelColor(0, 0x00FF00);
  LED.show();
}
void getGasSensorData() {
  while (ReceiveOnlySerial.available() != 0) {
    ReceiveOnlySerial.read();
  }
  while (ReceiveOnlySerial.available() < 8) {
    yield();
  }
  while (ReceiveOnlySerial.available() > 0) {
    char recieved = ReceiveOnlySerial.read();
    inData += recieved;
  }
  inData = inData.substring(inData.indexOf('\n')+1, inData.length());
  inData = inData.substring(0, inData.indexOf('\n'));
  gasSensorData = inData.toInt()-100;
  inData = "";
}
