#include <SendOnlySoftwareSerial.h>

#define SERIAL_PIN 1
#define ANALOG_PIN A1
#define BAUD_RATE 2400

SendOnlySoftwareSerial SendOnlySerial(SERIAL_PIN);

void setup() {
  SendOnlySerial.begin(BAUD_RATE);
}

void loop() {
  SendOnlySerial.print(analogRead(ANALOG_PIN));
  SendOnlySerial.print("\n");
}
