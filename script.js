// Byte-Builders Tutorial Catalog
const tutorials = [
  {
    id: 1,
    category: "Arduino",
    difficulty: "Beginner",
    time: "20 Mins",
    title: "Arduino Automatic Night Light (LDR)",
    concept: "An LDR (Light Dependent Resistor) is a passive sensor whose resistance changes based on surrounding light level. In darkness, resistance rises and shifts voltage across the divider circuit. The Arduino reads this via an analog pin and controls the LED automatically.",
    diagramText: "[5V Pin] ──► [LDR Sensor Leg 1]\n[LDR Leg 2] ──┬──► [Analog Pin A0]\n              └──► [10kΩ Resistor Leg 1]\n[10kΩ Resistor Leg 2] ──► [GND Rail]\n\n[Digital Pin 9] ──► [220Ω Resistor Leg 1]\n[220Ω Resistor Leg 2] ──► [LED Anode (+)]\n[LED Cathode (-)] ──► [GND Rail]",
    itemsUsed: [
      "1x Arduino Uno or Nano",
      "1x Photoresistor (LDR)",
      "1x 5mm LED",
      "1x 10kΩ Resistor",
      "1x 220Ω Resistor",
      "1x Breadboard & Jumper Wires",
      "1x USB Cable"
    ],
    wiringTable: [
      { component: "LDR Sensor", compPin: "Leg 1", targetPin: "5V Power Rail", notes: "Reference voltage input" },
      { component: "LDR Sensor", compPin: "Leg 2", targetPin: "Pin A0 & 10kΩ Resistor", notes: "Divider junction" },
      { component: "10kΩ Resistor", compPin: "Leg 2", targetPin: "GND Rail", notes: "Ground loop return" },
      { component: "220Ω Resistor", compPin: "Leg 1", targetPin: "Digital Pin 9", notes: "Current limiting resistor" },
      { component: "5mm LED", compPin: "Anode (+)", targetPin: "220Ω Resistor Leg 2", notes: "Positive terminal" },
      { component: "5mm LED", compPin: "Cathode (-)", targetPin: "GND Rail", notes: "Negative ground rail" }
    ],
    stepByStep: [
      "Step 1: Connect Arduino 5V and GND to breadboard power rails.",
      "Step 2: Place LDR on breadboard and wire Leg 1 to 5V.",
      "Step 3: Connect LDR Leg 2 to Analog Pin A0 and through a 10kΩ resistor to GND.",
      "Step 4: Connect Digital Pin 9 through a 220Ω resistor to the LED Anode (+).",
      "Step 5: Connect LED Cathode (-) directly to GND.",
      "Step 6: Upload the sketch via Arduino IDE."
    ],
    code: `// Byte-Builders: Arduino Automatic Night Light
const int ldrPin = A0;
const int ledPin = 9;
const int threshold = 400;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lightLevel = analogRead(ldrPin);
  Serial.print("Light Level: ");
  Serial.println(lightLevel);
  if (lightLevel < threshold) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(200);
}`,
    troubleshooting: "Double-check LED polarity (longer leg is positive) and monitor values in the Serial Monitor to adjust your threshold value."
  },
  {
    id: 2,
    category: "Robotics",
    difficulty: "Beginner",
    time: "15 Mins",
    title: "Introduction to ESP32: Wi-Fi Scanner",
    concept: "The ESP32 microcontroller features built-in Wi-Fi and Bluetooth. Running station mode scans surrounding 2.4GHz radio channels and displays network names and signal strengths via the Serial Monitor.",
    diagramText: "[PC USB Port] ══(USB Data Cable)══► [ESP32 Board] )) 2.4GHz Wi-Fi Scan",
    itemsUsed: [
      "1x ESP32 Development Board",
      "1x Micro-USB or USB-C Data Cable",
      "PC with Arduino IDE Installed"
    ],
    wiringTable: [
      { component: "ESP32 Board", compPin: "Micro-USB / Type-C", targetPin: "PC USB Port", notes: "Serial data & power connection" },
      { component: "Arduino IDE", compPin: "Tools > Board", targetPin: "ESP32 Dev Module", notes: "Target architecture profile" },
      { component: "Arduino IDE", compPin: "Tools > Port", targetPin: "Active COM Port", notes: "Serial communication link" }
    ],
    stepByStep: [
      "Step 1: Install the ESP32 board definitions in Arduino IDE Boards Manager.",
      "Step 2: Connect the ESP32 to your PC using a data-capable USB cable.",
      "Step 3: Under Tools, select ESP32 Dev Module and choose the active COM port.",
      "Step 4: Paste the scanner sketch into the IDE and click Upload.",
      "Step 5: If uploading halts at connecting, press and hold the BOOT button on the board.",
      "Step 6: Open the Serial Monitor set to 115200 baud."
    ],
    code: `// Byte-Builders: ESP32 Wi-Fi Scanner
#include "WiFi.h"

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);
  Serial.println("ESP32 Scanner Initialized!");
}

void loop() {
  Serial.println("Scanning networks...");
  int count = WiFi.scanNetworks();
  if (count == 0) {
    Serial.println("No networks found.");
  } else {
    for (int i = 0; i < count; ++i) {
      Serial.print(WiFi.SSID(i));
      Serial.print(" (RSSI: ");
      Serial.print(WiFi.RSSI(i));
      Serial.println(" dBm)");
    }
  }
  delay(5000);
}`,
    troubleshooting: "If the code fails to upload, keep the physical BOOT button pressed down until the upload percentage starts increasing."
  },
  {
    id: 3,
    category: "Python",
    difficulty: "Beginner",
    time: "15 Mins",
    title: "Python Variables & Sensor Data Calculator",
    concept: "Variables store data values in memory. This script processes raw simulated ADC integer counts and computes real-world analog voltage calculations line-by-line.",
    diagramText: "[Raw Sensor Reading] ──► [Python Mathematical Formula] ──► [Calculated Voltage]",
    itemsUsed: [
      "PC / Laptop",
      "Python 3.x Installed",
      "VS Code or any Text Editor"
    ],
    wiringTable: [
      { component: "Code Editor", compPin: "New File", targetPin: "sensor_calc.py", notes: "Script file name" },
      { component: "Terminal", compPin: "Command Line", targetPin: "python sensor_calc.py", notes: "Execution command" }
    ],
    stepByStep: [
      "Step 1: Open VS Code and create a new file named sensor_calc.py.",
      "Step 2: Paste the Python script below into your file.",
      "Step 3: Save the file using Ctrl + S.",
      "Step 4: Open your integrated terminal in VS Code.",
      "Step 5: Run the script to view real-time converted sensor values."
    ],
    code: `# Byte-Builders: Python Voltage Calculator
project_name = 'ADC Voltage Converter'
max_adc = 1023.0
ref_voltage = 5.0
raw_reading = 512

voltage = (raw_reading / max_adc) * ref_voltage

print('=== ' + project_name + ' ===')
print('Raw Reading :', raw_reading)
print('Voltage Out :', round(voltage, 2), 'V')`,
    troubleshooting: "Ensure Python 3 is added to your system PATH environment variables so the terminal recognizes the python command."
  },
  {
    id: 4,
    category: "Cybersecurity",
    difficulty: "Beginner",
    time: "30 Mins",
    title: "Starting a Safe Linux Practice Lab (VirtualBox)",
    concept: "A Virtual Machine runs an isolated guest operating system safely inside your host PC environment, allowing safe hands-on command-line and defensive experimentation.",
    diagramText: "[Host OS] ──► [VirtualBox Hypervisor] ──► [Isolated Linux Guest VM]",
    itemsUsed: [
      "PC / Laptop",
      "VirtualBox Software",
      "Ubuntu Linux Desktop ISO Image"
    ],
    wiringTable: [
      { component: "VirtualBox Profile", compPin: "OS Selection", targetPin: "Ubuntu (64-bit)", notes: "Hypervisor setup profile" },
      { component: "RAM Allocation", compPin: "Memory Slider", targetPin: "2048 MB (2 GB+)", notes: "Assigned virtual RAM" },
      { component: "Virtual Storage", compPin: "VDI Disk", targetPin: "25 GB Dynamically Allocated", notes: "Virtual hard disk drive" }
    ],
    stepByStep: [
      "Step 1: Install VirtualBox and download the official Ubuntu ISO file.",
      "Step 2: Create a new virtual machine and select the Ubuntu ISO.",
      "Step 3: Allocate RAM (minimum 2 GB) and at least 25 GB of virtual disk space.",
      "Step 4: Boot the VM and complete the standard Ubuntu setup wizard.",
      "Step 5: Open your Linux terminal using Ctrl + Alt + T."
    ],
    code: `# Byte-Builders: Beginner Linux Terminal Commands
# Open terminal: Ctrl + Alt + T
whoami       # Show active user account
pwd          # Print current working directory path
ls -la       # List files including hidden items
ip addr show # Check local network interfaces
free -m      # Check memory usage in MB`,
    troubleshooting: "If VirtualBox refuses to start the 64-bit VM, enable Intel VT-x or AMD-V virtualization inside your computer BIOS."
  },
  {
    id: 5,
    category: "Arduino",
    difficulty: "Intermediate",
    time: "45 Mins",
    title: "Arduino Ultrasonic Radar with TFT Display",
    concept: "An ultrasonic distance sensor sweeps back and forth mounted to a servo motor. An SPI color display renders the radar arc and plots obstacle coordinates live.",
    diagramText: "[HC-SR04 Sensor] on [SG90 Servo (Pin 6)]\n       │\n[Arduino Uno] ══(SPI Protocol)══► [1.8\" ST7735 TFT Screen]",
    itemsUsed: [
      "1x Arduino Uno",
      "1x ST7735 SPI TFT Screen",
      "1x HC-SR04 Ultrasonic Sensor",
      "1x SG90 Servo Motor",
      "Breadboard & Jumper Wires",
      "Adafruit GFX & ST7735 Libraries"
    ],
    wiringTable: [
      { component: "SG90 Servo", compPin: "Orange Signal Wire", targetPin: "Digital Pin 6", notes: "PWM servo position control" },
      { component: "HC-SR04 Sensor", compPin: "TRIG Pin", targetPin: "Digital Pin 2", notes: "Trigger pulse output" },
      { component: "HC-SR04 Sensor", compPin: "ECHO Pin", targetPin: "Digital Pin 3", notes: "Echo return pulse input" },
      { component: "ST7735 Display", compPin: "CS Pin", targetPin: "Digital Pin 10", notes: "SPI Chip Select" },
      { component: "ST7735 Display", compPin: "DC / A0 Pin", targetPin: "Digital Pin 9", notes: "Command/Data mode" },
      { component: "ST7735 Display", compPin: "RST Pin", targetPin: "Digital Pin 8", notes: "Hardware reset signal" },
      { component: "ST7735 Display", compPin: "MOSI / SDA", targetPin: "Digital Pin 11", notes: "SPI Master Out line" },
      { component: "ST7735 Display", compPin: "SCK / CLK", targetPin: "Digital Pin 13", notes: "SPI Clock line" }
    ],
    stepByStep: [
      "Step 1: Install Adafruit GFX, ST7735, and Servo libraries via Library Manager.",
      "Step 2: Mount the HC-SR04 sensor securely onto the SG90 servo arm.",
      "Step 3: Connect servo signal to Pin 6 and ultrasonic sensor pins to Pins 2 and 3.",
      "Step 4: Connect the TFT display SPI pins according to the wiring table.",
      "Step 5: Upload the radar sketch to your Arduino board."
    ],
    code: `// Byte-Builders: Ultrasonic Radar Display
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7735.h>
#include <Servo.h>

#define TFT_CS 10
#define TFT_RST 8
#define TFT_DC 9

Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);
Servo radarServo;

void setup() {
  radarServo.attach(6);
  tft.initR(INITR_BLACKTAB);
  tft.fillScreen(0x0000);
}

void loop() {
  radarServo.write(90);
  delay(100);
}`,
    troubleshooting: "Connect the display LED backlight pin to 3.3V and verify your SPI lines match the hardware SPI pins exactly."
  },
  {
    id: 6,
    category: "Cybersecurity",
    difficulty: "Beginner",
    time: "25 Mins",
    title: "Bootable Ubuntu Linux USB Lab with Rufus",
    concept: "A Live USB runs an entire operating system directly in your computer RAM without modifying your internal hard drive or altering existing files.",
    diagramText: "[Ubuntu ISO File] + [Rufus Tool] ══(Flash)══► [USB Drive] ══► [Boot Live Session]",
    itemsUsed: [
      "1x 8GB+ USB Flash Drive",
      "Windows PC",
      "Rufus USB Utility Tool",
      "Ubuntu ISO Image File"
    ],
    wiringTable: [
      { component: "Rufus Tool", compPin: "Device Target", targetPin: "Selected USB Drive", notes: "Choose correct USB device" },
      { component: "Rufus Tool", compPin: "Boot Selection", targetPin: "Ubuntu ISO Image", notes: "Source operating system file" },
      { component: "Rufus Tool", compPin: "Partition Scheme", targetPin: "GPT (UEFI Standard)", notes: "Modern motherboard standard" }
    ],
    stepByStep: [
      "Step 1: Download Rufus and download the Ubuntu desktop ISO file.",
      "Step 2: Plug in your USB drive and launch Rufus as Administrator.",
      "Step 3: Select your USB drive and click SELECT to browse to the Ubuntu ISO.",
      "Step 4: Click START and wait for the status bar to show READY.",
      "Step 5: Reboot your computer, enter the Boot Menu, and choose 'Try Ubuntu'."
    ],
    code: `# Byte-Builders: Linux Live USB Inspection Commands
uname -a            # Check kernel version
cat /etc/os-release # Display distribution version
free -m             # Verify RAM allocated to live environment
lsblk               # Inspect block storage devices
ping -c 4 8.8.8.8   # Test active network connection`,
    troubleshooting: "Always choose 'Try Ubuntu' rather than 'Install Ubuntu' to protect your internal drive from changes."
  },
  {
    id: 7,
    category: "Robotics",
    difficulty: "Intermediate",
    time: "30 Mins",
    title: "ESP32 Smartphone Wi-Fi LED Controller (Web Server)",
    concept: "The ESP32 runs a lightweight HTTP server on your local Wi-Fi. Browsing to its IP address serves a control panel to toggle GPIO pins wirelessly.",
    diagramText: "[Phone Browser] ══(Local Wi-Fi HTTP)══► [ESP32 Server] ──► [GPIO 26] ──► [LED]",
    itemsUsed: [
      "1x ESP32 Development Board",
      "1x 5mm LED & 220Ω Resistor",
      "Breadboard & Jumper Wires",
      "Smartphone connected to same Wi-Fi"
    ],
    wiringTable: [
      { component: "ESP32 Board", compPin: "GPIO 26", targetPin: "220Ω Resistor Leg 1", notes: "Digital output logic pin" },
      { component: "220Ω Resistor", compPin: "Leg 2", targetPin: "LED Anode (+)", notes: "Protects LED from overcurrent" },
      { component: "5mm LED", compPin: "Cathode (-)", targetPin: "ESP32 GND Pin", notes: "Ground loop return" }
    ],
    stepByStep: [
      "Step 1: Connect the LED and 220Ω resistor between GPIO 26 and GND.",
      "Step 2: Enter your 2.4GHz Wi-Fi network name and password into the sketch.",
      "Step 3: Select your ESP32 board and COM port, then click Upload.",
      "Step 4: Open the Serial Monitor (115200 baud) to find the local IP address.",
      "Step 5: Open your phone browser and visit that IP address to toggle the LED."
    ],
    code: `// Byte-Builders: ESP32 Web Server LED Control
#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";
WebServer server(80);
const int ledPin = 26;

void handleRoot() {
  server.send(200, "text/html", "<h1>Byte-Builders ESP32</h1><a href='/on'>ON</a> | <a href='/off'>OFF</a>");
}

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED) { delay(500); }
  server.on("/", handleRoot);
  server.on("/on", [](){ digitalWrite(ledPin, HIGH); handleRoot(); });
  server.on("/off", [](){ digitalWrite(ledPin, LOW); handleRoot(); });
  server.begin();
}

void loop() {
  server.handleClient();
}`,
    troubleshooting: "Your phone and ESP32 must both be connected to the exact same 2.4GHz Wi-Fi network; 5GHz bands are not supported by the standard ESP32."
  },
  {
    id: 8,
    category: "Python",
    difficulty: "Beginner",
    time: "20 Mins",
    title: "Python Password Strength Analyzer & Generator",
    concept: "Defensive tools evaluate password complexity by inspecting character sets (length, numbers, uppercase letters, and punctuation) using built-in string functions.",
    diagramText: "[Candidate Password] ──► [Rule-based Security Checks] ──► [Evaluation & Score]",
    itemsUsed: [
      "PC / Laptop",
      "Python 3.x Installed",
      "VS Code or preferred editor"
    ],
    wiringTable: [
      { component: "Code Editor", compPin: "New File", targetPin: "password_tool.py", notes: "Target script file" },
      { component: "Terminal", compPin: "Command Line", targetPin: "python password_tool.py", notes: "Execution command" }
    ],
    stepByStep: [
      "Step 1: Open your code editor and create password_tool.py.",
      "Step 2: Paste the Python code below into the file.",
      "Step 3: Save the file using Ctrl + S.",
      "Step 4: Open your terminal and run the script to see the analysis output."
    ],
    code: `# Byte-Builders: Password Analyzer
import string

def check_strength(pw):
    score = 0
    if len(pw) >= 10: score += 1
    if any(c.isdigit() for c in pw): score += 1
    if any(c.isupper() for c in pw): score += 1
    if any(c in string.punctuation for c in pw): score += 1
    ratings = {0: 'Very Weak', 1: 'Weak', 2: 'Moderate', 3: 'Strong', 4: 'Very Strong'}
    return ratings[score]

sample = 'SecurePass123!'
print('Sample Password :', sample)
print('Strength Rating :', check_strength(sample))`,
    troubleshooting: "Run python3 password_tool.py if your terminal defaults python to older version environments."
  }
];

// DOM Element Selectors
const tutorialGrid = document.getElementById("tutorialGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("tutorialModal");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModalBtn");

let activeCategory = "All";

// Render Tutorial Cards Function
function renderTutorials() {
  if (!tutorialGrid) return;
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  tutorialGrid.innerHTML = "";

  const filtered = tutorials.filter(function(item) {
    const matchesCategory = (activeCategory === "All" || item.category === activeCategory);
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.itemsUsed.join(" ").toLowerCase().includes(query) ||
      item.concept.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    tutorialGrid.innerHTML = '<p style="color:var(--text-muted); padding:20px; text-align:center;">No matching tutorials found. Try another search term!</p>';
    return;
  }

  filtered.forEach(function(tut) {
    const card = document.createElement("div");
    card.className = "tut-card";
    card.innerHTML = `
      <div>
        <div class="tut-graphic">
          <div class="chip-illustration">${tut.category.toUpperCase()} LAB</div>
          <small style="color:var(--text-muted); font-family:monospace;">Step-by-Step Lab</small>
        </div>
        <div class="tut-body">
          <div class="tut-meta-row">
            <span class="tut-tag">${tut.category}</span>
            <div class="meta-badges">
              <span class="difficulty-badge">${tut.difficulty}</span>
              <span class="time-badge">⏱️ ${tut.time}</span>
            </div>
          </div>
          <h3>${tut.title}</h3>
          <div class="items-preview">
            <strong>Items Used:</strong> ${tut.itemsUsed.slice(0, 3).join(", ")}${tut.itemsUsed.length > 3 ? "..." : ""}
          </div>
        </div>
      </div>
      <div class="tut-footer">
        <button class="btn-primary" style="width:100%;" onclick="openTutorial(${tut.id})">Open Complete Guide</button>
      </div>
    `;
    tutorialGrid.appendChild(card);
  });
}

// Open Detail Modal
function openTutorial(id) {
  if (!modal || !modalBody) return;
  const tut = tutorials.find(function(t) { return t.id === id; });
  if (!tut) return;

  const isArduino = tut.category === "Arduino";
  const tableHeaders = isArduino
    ? '<tr><th>Component</th><th>Component Pin</th><th>Connect To Pin</th><th>Notes</th></tr>'
    : '<tr><th>Component / Setting</th><th>Configuration Item</th><th>Target Setting</th><th>Notes</th></tr>';

  const tableRows = tut.wiringTable.map(function(row) {
    return `
      <tr>
        <td><strong>${row.component}</strong></td>
        <td>${row.compPin}</td>
        <td><span cla