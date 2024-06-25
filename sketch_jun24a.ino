#include "DHT.h"

//светодиоды
#define LED1_PIN 11
#define LED2_PIN 10
#define LED3_PIN 9

//реле
#define RELAY1_PIN 5
#define RELAY2_PIN 6

//датчик света
#define PHOTO_PIN A0

//DHT
#define DHTPIN 2     
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  pinMode(LED1_PIN, OUTPUT);
  pinMode(LED2_PIN, OUTPUT);
  pinMode(LED3_PIN, OUTPUT);
  pinMode(RELAY1_PIN, OUTPUT);
  pinMode(RELAY2_PIN, OUTPUT);
  dht.begin();
}

void loop() {
  if (Serial.available()) {
    String command = Serial.readStringUntil('\n');
    checkCommand(command);
  }
  delay(200);
}

void checkCommand(String command){
  if (command == "toggle1LED_ON") { // светодиод 1
    digitalWrite(LED1_PIN, HIGH);
  } else if (command == "toggle1LED_OFF") { 
      digitalWrite(LED1_PIN, LOW);
  } else if (command == "toggle2LED_ON") { // светодиод 2
      digitalWrite(LED2_PIN, HIGH);
  } else if (command == "toggle2LED_OFF") {
      digitalWrite(LED2_PIN, LOW);
  } else if (command == "toggle3LED_ON") { // светодиод 3
      digitalWrite(LED3_PIN, HIGH);
  } else if (command == "toggle3LED_OFF") {
      digitalWrite(LED3_PIN, LOW);
  } else if (command == "relay1REL_ON") { // реле 1
      digitalWrite(RELAY1_PIN, HIGH);
  } else if (command == "relay1REL_OFF") {
      digitalWrite(RELAY1_PIN, LOW);
  } else if (command == "relay2REL_ON") { // реле 2
      digitalWrite(RELAY2_PIN, HIGH);
  } else if (command == "relay2REL_OFF") {
      digitalWrite(RELAY2_PIN, LOW);
  } else if(command == "getSensorsData"){ // данные с датчиков
    int light = analogRead(PHOTO_PIN);
    float h = dht.readHumidity();
    float t = dht.readTemperature();
    Serial.print(t);
    Serial.print(",");
    Serial.print(h);
    Serial.print(",");
    Serial.print(light);
  }
}