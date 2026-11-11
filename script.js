const tutorials = [
  {
    id: 1,
    category: "Arduino",
    difficulty: "Beginner",
    time: "20 Mins",
    title: "Arduino Automatic Night Light (LDR)",
    concept: "An LDR (Light Dependent Resistor) is a passive electronic component whose electrical resistance varies depending on the amount of light falling on its surface. When ambient light decreases (darkness), its resistance increases significantly, causing the analog voltage across the voltage divider circuit to shift. We read this voltage via an Arduino analog input pin and use conditional logic to switch an LED on or off automatically.",
    diagramText: "[5V Pin] ──► [LDR Sensor Leg 1]\n[LDR Leg 2] ──┬──► [Analog Input Pin A0]\n              └──► [10kΩ Resistor Leg 1]\n[10kΩ Resistor Leg 2] ──► [GND Rail]\n\n[Digital Pin 9] ──► [220Ω Resistor Leg 1]\n[220Ω Resistor Leg 2] ──► [LED Anode (+ Long Leg)]\n[LED Cathode (- Short Leg)] ──► [GND Rail]",
    itemsUsed: [
      "1x Arduino Uno or Arduino Nano board",
      "1x LDR (Light Dependent Resistor / Photoresistor)",
      "1x 5mm LED (Cyan, White, or Red)",
      "1x 10kΩ Resistor",
      "1x 220Ω Resistor",
      "1x Breadboard & 6x Jumper Wires",
      "1x USB Data Cable"
    ],
    wiringTable: [
      { component: "LDR Sensor", compPin: "Terminal Leg 1", targetPin: "5V Power Rail", notes: "Supplies reference voltage" },
      { component: "LDR Sensor", compPin: "Terminal Leg 2", targetPin: "Analog Pin A0 & 10kΩ Resistor", notes: "Voltage divider junction" },
      { component: "10kΩ Resistor", compPin: "Terminal Leg 2", targetPin: "GND Rail", notes: "Completes ground loop" },
      { component: "220Ω Resistor", compPin: "Terminal Leg 1", targetPin: "Digital Pin 9", notes: "Limits current to LED" },
      { component: "5mm LED", compPin: "Anode (+ Long Leg)", targetPin: "220Ω Resistor Leg 2", notes: "Positive connection" },
      { component: "5mm LED", compPin: "Cathode (- Short Leg)", targetPin: "GND Rail", notes: "Ground return" }
    ],
    stepByStep: [
      "Step 1: Connect Arduino 5V and GND to breadboard power rails.",
      "Step 2: Insert LDR and connect one leg to 5V.",
      "Step 3: Connect second LDR leg to Analog Pin A0 and a 10kΩ resistor leading to GND.",
      "Step 4: Connect Digital Pin 9 through a 220Ω resistor to the LED Anode (+).",
      "Step 5: Connect LED Cathode (-) to GND.",
      "Step 6: Upload code via Arduino IDE."
    ],
    code: [
      "// Byte-Builders: Arduino Automatic Night Light",
      "const int ldrPin = A0;",
      "const int ledPin = 9;",
      "const int threshold = 400;",
      "",
      "void setup() {",
      "  pinMode(ledPin, OUTPUT);",
      "  Serial.begin(9600);",
      "}",
      "",
      "void loop() {",
      "  int lightLevel = analogRead(ldrPin);",
      "  Serial.print(\"Light Level: \");",
      "  Serial.println(lightLevel);",
      "  if (lightLevel < threshold) {",
      "    digitalWrite(ledPin, HIGH);",
      "  } else {",
      "    digitalWrite(ledPin, LOW);",
      "  }",
      "  delay(200);",
      "}"
    ].join("\n"),
    troubleshooting: "Verify LED polarity and check Serial Monitor values to adjust your threshold."
  },
  {
    id: 2,
    category: "Robotics",
    difficulty: "Beginner",
    time: "15 Mins",
    title: "Introduction to ESP32: Wi-Fi Scanner",
    concept: "The ESP32 is an advanced microcontroller featuring integrated Wi-Fi and Bluetooth. By using its built-in Wi-Fi library in station mode, it can scan surrounding 2.4GHz radio frequencies, read network names, and display signal strengths.",
    diagramText: "[PC USB Port] ══(Data Cable)══► [ESP32 Board] )) 2.4GHz Airwaves Scan",
    itemsUsed: [
      "1x ESP32 Development Board",
      "1x Micro-USB or USB-C Data Cable",
      "Windows 10 PC with Arduino IDE"
    ],
    wiringTable: [
      { component: "ESP32 Board", compPin: "USB Port", targetPin: "PC USB Port", notes: "Data and power connection" },
      { component: "Arduino IDE", compPin: "Tools > Board", targetPin: "ESP32 Dev Module", notes: "Architecture profile" },
      { component: "Arduino IDE", compPin: "Tools > Port", targetPin: "Active COM Port", notes: "Serial data link" }
    ],
    stepByStep: [
      "Step 1: Install ESP32 board package in Arduino IDE Boards Manager.",
      "Step 2: Connect ESP32 to PC via data USB cable.",
      "Step 3: Select ESP32 Dev Module and correct COM port under Tools.",
      "Step 4: Paste code into editor and click Upload.",
      "Step 5: Hold BOOT button if uploading hangs.",
      "Step 6: Open Serial Monitor at 115200 baud."
    ],
    code: [
      "// Byte-Builders: ESP32 Wi-Fi Scanner",
      "#include \"WiFi.h\"",
      "",
      "void setup() {",
      "  Serial.begin(115200);",
      "  WiFi.mode(WIFI_STA);",
      "  WiFi.disconnect();",
      "  delay(100);",
      "  Serial.println(\"ESP32 Scanner Initialized!\");",
      "}",
      "",
      "void loop() {",
      "  Serial.println(\"Scanning networks...\");",
      "  int count = WiFi.scanNetworks();",
      "  for (int i = 0; i < count; ++i) {",
      "    Serial.print(WiFi.SSID(i));",
      "    Serial.print(\" (RSSI: \");",
      "    Serial.print(WiFi.RSSI(i));",
      "    Serial.println(\" dBm)\");",
      "  }",
      "  delay(5000);",
      "}"
    ].join("\n"),
    troubleshooting: "Hold physical BOOT button down when dots appear during code upload."
  },
  {
    id: 3,
    category: "Python",
    difficulty: "Beginner",
    time: "15 Mins",
    title: "Python Variables & Sensor Data Calculator",
    concept: "Variables store data values in memory. This script demonstrates Python math formulas by converting simulated raw sensor counts into real-world voltage values.",
    diagramText: "[Raw Input Value] ──► [Python Math Formula] ──► [Calculated Voltage Output]",
    itemsUsed: [
      "Windows 10 PC",
      "Python 3.x Installed",
      "VS Code Editor"
    ],
    wiringTable: [
      { component: "VS Code Editor", compPin: "New File", targetPin: "sensor_calc.py", notes: "Script file target" },
      { component: "Terminal", compPin: "Command Line", targetPin: "python sensor_calc.py", notes: "Script execution command" }
    ],
    stepByStep: [
      "Step 1: Open VS Code and create sensor_calc.py file.",
      "Step 2: Copy and paste the python script below.",
      "Step 3: Save file using Ctrl + S.",
      "Step 4: Open VS Code terminal.",
      "Step 5: Run command to view output results."
    ],
    code: [
      "# Byte-Builders: Python Voltage Calculator",
      "project_name = 'ADC Voltage Converter'",
      "max_adc = 1023.0",
      "ref_voltage = 5.0",
      "raw_reading = 512",
      "",
      "voltage = (raw_reading / max_adc) * ref_voltage",
      "",
      "print('=== ' + project_name + ' ===')",
      "print('Raw Reading :', raw_reading)",
      "print('Voltage Out :', round(voltage, 2), 'V')"
    ].join("\n"),
    troubleshooting: "Ensure Python 3 is added to your Windows PATH environment variables."
  },
  {
    id: 4,
    category: "Cybersecurity",
    difficulty: "Beginner",
    time: "30 Mins",
    title: "Starting a Safe Linux Practice Lab (VirtualBox)",
    concept: "A Virtual Machine runs an isolated guest operating system securely inside your host Windows PC, allowing safe cybersecurity command practice.",
    diagramText: "[Windows 10 Host] ──► [VirtualBox Hypervisor] ──► [Ubuntu Linux VM]",
    itemsUsed: [
      "Windows 10 PC",
      "Oracle VirtualBox Software",
      "Ubuntu Linux ISO Image"
    ],
    wiringTable: [
      { component: "VirtualBox Profile", compPin: "OS Type", targetPin: "Linux Ubuntu (64-bit)", notes: "Hypervisor config" },
      { component: "RAM Allocation", compPin: "Memory Slider", targetPin: "2048 MB (2 GB)", notes: "Assigned virtual RAM" },
      { component: "Virtual Disk", compPin: "VDI Storage", targetPin: "25 GB Dynamically Allocated", notes: "Virtual hard drive" }
    ],
    stepByStep: [
      "Step 1: Install VirtualBox and download Ubuntu ISO.",
      "Step 2: Create a new virtual machine and attach the ISO.",
      "Step 3: Allocate RAM and virtual hard disk space.",
      "Step 4: Boot VM and complete Ubuntu installation wizard.",
      "Step 5: Open terminal via Ctrl + Alt + T."
    ],
    code: [
      "# Byte-Builders: Beginner Linux Terminal Commands",
      "# Open terminal: Ctrl + Alt + T",
      "whoami       # Show current username",
      "pwd          # Print working directory path",
      "ls -la       # List all files and folders",
      "ip addr show # Check network interfaces",
      "free -m      # Check RAM usage"
    ].join("\n"),
    troubleshooting: "Enable Intel VT-x or AMD-V virtualization in your PC BIOS if VM fails to start."
  },
  {
    id: 5,
    category: "Arduino",
    difficulty: "Intermediate",
    time: "45 Mins",
    title: "Arduino Ultrasonic Radar with TFT Display",
    concept: "An ultrasonic sensor measures distance while mounted on a servo motor sweeping back and forth. An SPI color TFT screen renders a live radar grid plotting objects in real-time.",
    diagramText: "[HC-SR04 Sensor] on [SG90 Servo (Pin 6)]\n       │\n[Arduino Uno] ══(SPI Pins)══► [1.8\" ST7735 TFT Screen]",
    itemsUsed: [
      "1x Arduino Uno",
      "1x ST7735 SPI TFT Display",
      "1x HC-SR04 Sensor",
      "1x SG90 Servo Motor",
      "Breadboard & Jumper Wires",
      "Adafruit Libraries"
    ],
    wiringTable: [
      { component: "SG90 Servo", compPin: "Orange Signal Wire", targetPin: "Digital Pin 6", notes: "PWM servo angle control" },
      { component: "HC-SR04 Sensor", compPin: "TRIG Pin", targetPin: "Digital Pin 2", notes: "Trigger pulse output" },
      { component: "HC-SR04 Sensor", compPin: "ECHO Pin", targetPin: "Digital Pin 3", notes: "Echo return input" },
      { component: "ST7735 Display", compPin: "CS Pin", targetPin: "Digital Pin 10", notes: "SPI Chip Select" },
      { component: "ST7735 Display", compPin: "DC / A0 Pin", targetPin: "Digital Pin 9", notes: "Data/Command select" },
      { component: "ST7735 Display", compPin: "RST Pin", targetPin: "Digital Pin 8", notes: "Hardware reset" },
      { component: "ST7735 Display", compPin: "MOSI / SDA", targetPin: "Digital Pin 11", notes: "SPI Data line" },
      { component: "ST7735 Display", compPin: "SCK / CLK", targetPin: "Digital Pin 13", notes: "SPI Clock line" }
    ],
    stepByStep: [
      "Step 1: Install Adafruit GFX, ST7735, and Servo libraries.",
      "Step 2: Mount HC-SR04 onto SG90 servo arm.",
      "Step 3: Connect servo to Pin 6 and sensor to Pins 2 and 3.",
      "Step 4: Wire ST7735 display to SPI pins according to wiring table.",
      "Step 5: Upload radar code sketch to Arduino."
    ],
    code: [
      "// Byte-Builders: Ultrasonic Radar Display",
      "#include <SPI.h>",
      "#include <Adafruit_GFX.h>",
      "#include <Adafruit_ST7735.h>",
      "#include <Servo.h>",
      "",
      "#define TFT_CS 10",
      "#define TFT_RST 8",
      "#define TFT_DC 9",
      "Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);",
      "Servo radarServo;",
      "",
      "void setup() {",
      "  radarServo.attach(6);",
      "  tft.initR(INITR_BLACKTAB);",
      "  tft.fillScreen(0x0000);",
      "}",
      "void loop() {",
      "  radarServo.write(90);",
      "  delay(100);",
      "}"
    ].join("\n"),
    troubleshooting: "Ensure display backlight is connected to 3.3V and SPI pins match exactly."
  },
  {
    id: 6,
    category: "Cybersecurity",
    difficulty: "Beginner",
    time: "25 Mins",
    title: "Bootable Ubuntu Linux USB Lab with Rufus",
    concept: "A Live USB runs an operating system directly inside PC RAM without modifying your internal Windows hard drive storage.",
    diagramText: "[Ubuntu ISO] + [Rufus] ══(Flash)══► [USB Drive] ══► [Boot 'Try Ubuntu']",
    itemsUsed: [
      "1x 8GB+ USB Flash Drive",
      "Windows 10 PC",
      "Rufus USB Utility",
      "Ubuntu ISO Image"
    ],
    wiringTable: [
      { component: "Rufus Tool", compPin: "Device Dropdown", targetPin: "Your USB Flash Drive", notes: "Select target USB" },
      { component: "Rufus Tool", compPin: "Boot Selection", targetPin: "Ubuntu ISO File", notes: "Load image source" },
      { component: "Rufus Tool", compPin: "Partition Scheme", targetPin: "GPT (UEFI Firmware)", notes: "Motherboard standard" }
    ],
    stepByStep: [
      "Step 1: Download Rufus and Ubuntu ISO file.",
      "Step 2: Insert USB drive and open Rufus.",
      "Step 3: Select your USB device and choose the Ubuntu ISO.",
      "Step 4: Click START and wait for 'READY' status.",
      "Step 5: Restart PC, press boot menu key, and select 'Try Ubuntu'."
    ],
    code: [
      "# Byte-Builders: Linux Live USB Commands",
      "uname -a       # Check kernel version",
      "cat /etc/os-release # Check OS release",
      "free -m        # Check system memory",
      "lsblk          # List storage block devices",
      "ping -c 4 8.8.8.8 # Test network ping"
    ].join("\n"),
    troubleshooting: "Always select 'Try Ubuntu' so your Windows drive remains safe and untouched."
  },
  {
    id: 7,
    category: "Robotics",
    difficulty: "Intermediate",
    time: "30 Mins",
    title: "ESP32 Smartphone Wi-Fi LED Controller (Web Server)",
    concept: "An ESP32 web server hosts a mini webpage over local Wi-Fi, allowing you to control GPIO pins and connected hardware directly from your smartphone browser.",
    diagramText: "[Phone Browser] ══(Wi-Fi HTTP)══► [ESP32 Server] ──► [GPIO 26] ── [LED]",
    itemsUsed: [
      "1x ESP32 Development Board",
      "1x 5mm LED & 220Ω Resistor",
      "Breadboard & Jumper Wires",
      "Smartphone & Wi-Fi Router"
    ],
    wiringTable: [
      { component: "ESP32 Board", compPin: "GPIO Pin 26", targetPin: "220Ω Resistor Leg 1", notes: "Digital output signal" },
      { component: "220Ω Resistor", compPin: "Leg 2", targetPin: "LED Anode (+)", notes: "Current protection" },
      { component: "5mm LED", compPin: "Cathode (-)", targetPin: "ESP32 GND Pin", notes: "Ground return" }
    ],
    stepByStep: [
      "Step 1: Connect LED and resistor from ESP32 GPIO 26 to GND.",
      "Step 2: Input your home 2.4GHz Wi-Fi credentials into the code.",
      "Step 3: Select ESP32 board and COM port, then upload code.",
      "Step 4: Open Serial Monitor to view assigned local IP address.",
      "Step 5: Open phone browser and type IP address to control LED."
    ],
    code: [
      "// Byte-Builders: ESP32 Web Server LED Control",
      "#include <WiFi.h>",
      "#include <WebServer.h>",
      "",
      "const char* ssid = \"YOUR_WIFI_NAME\";",
      "const char* password = \"YOUR_WIFI_PASSWORD\";",
      "WebServer server(80);",
      "const int ledPin = 26;",
      "",
      "void handleRoot() {",
      "  server.send(200, \"text/html\", \"<h1>Byte-Builders ESP32</h1><a href='/on'>ON</a> | <a href='/off'>OFF</a>\");",
      "}",
      "void setup() {",
      "  pinMode(ledPin, OUTPUT);",
      "  Serial.begin(115200);",
      "  WiFi.begin(ssid, password);",
      "  while(WiFi.status() != WL_CONNECTED) { delay(500); }",
      "  server.on(\"/\", handleRoot);",
      "  server.on(\"/on\", [](){ digitalWrite(ledPin, HIGH); handleRoot(); });",
      "  server.on(\"/off\", [](){ digitalWrite(ledPin, LOW); handleRoot(); });",
      "  server.begin();",
      "}",
      "void loop() { server.handleClient(); }"
    ].join("\n"),
    troubleshooting: "Ensure phone and ESP32 are connected to the exact same 2.4GHz Wi-Fi network."
  },
  {
    id: 8,
    category: "Python",
    difficulty: "Beginner",
    time: "20 Mins",
    title: "Python Password Strength Analyzer & Generator",
    concept: "Python string analysis and built-in modules evaluate password security against length, digits, uppercase letters, and punctuation symbols.",
    diagramText: "[Password Input] ──► [Python Security Rules Check] ──► [Score & Secure Key]",
    itemsUsed: [
      "Windows 10 PC",
      "Python 3.x Installed",
      "VS Code Editor"
    ],
    wiringTable: [
      { component: "VS Code Editor", compPin: "New File", targetPin: "password_tool.py", notes: "Script target file" },
      { component: "Terminal", compPin: "Command Line", targetPin: "python password_tool.py", notes: "Script execution" }
    ],
    stepByStep: [
      "Step 1: Open VS Code and create password_tool.py file.",
      "Step 2: Copy and paste the python script below.",
      "Step 3: Save file using Ctrl + S.",
      "Step 4: Open terminal and execute script."
    ],
    code: [
      "# Byte-Builders: Password Analyzer & Generator",
      "import random",
      "import string",
      "",
      "def check_strength(pw):",
      "    score = 0",
      "    if len(pw) >= 10: score += 1",
      "    if any(c.isdigit() for c in pw): score += 1",
      "    if any(c.isupper() for c in pw): score += 1",
      "    if any(c in string.punctuation for c in pw): score += 1",
      "    ratings = {0: 'Very Weak', 1: 'Weak', 2: 'Moderate', 3: 'Strong', 4: 'Very Strong'}",
      "    return ratings[score]",
      "",
      "sample = 'SecurePass123!'",
      "print('Sample Rating:', check_strength(sample))"
    ].join("\n"),
    troubleshooting: "Run script using python or python3 command in your terminal window."
  }
];

const tutorialGrid = document.getElementById("tutorialGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("tutorialModal");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModalBtn");

let activeCategory = "All";

function renderTutorials() {
  if (!tutorialGrid) return;
  const query = searchInput ? searchInput.value.toLowerCase() : "";
  tutorialGrid.innerHTML = "";

  const filtered = tutorials.filter(function(item) {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.itemsUsed.join(" ").toLowerCase().includes(query) ||
      item.concept.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    tutorialGrid.innerHTML = '<p style="color:var(--text-muted); padding: 20px;">No matching tutorials found. Try another search term!</p>';
    return;
  }

  filtered.forEach(function(tut) {
    const card = document.createElement("div");
    card.className = "tut-card";
    card.innerHTML =
      '<div>' +
        '<div class="tut-graphic">' +
          '<div class="chip-illustration">' + tut.category.toUpperCase() + ' LAB</div>' +
          '<small style="color:var(--text-muted); font-family:monospace;">Detailed Step-by-Step Guide</small>' +
        '</div>' +
        '<div class="tut-body">' +
          '<div class="tut-meta-row">' +
            '<span class="tut-tag">' + tut.category + '</span>' +
            '<div class="meta-badges">' +
              '<span class="difficulty-badge">' + tut.difficulty + '</span>' +
              '<span class="time-badge">⏱️ ' + tut.time + '</span>' +
            '</div>' +
          '</div>' +
          '<h3>' + tut.title + '</h3>' +
          '<div class="items-preview">' +
            '<strong>Items Used:</strong> ' +
            tut.itemsUsed.slice(0, 3).join(", ") + (tut.itemsUsed.length > 3 ? "..." : "") +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="tut-footer">' +
        '<button class="btn-primary" style="width:100%;" onclick="openTutorial(' + tut.id + ')">Open Detailed Step-by-Step Guide</button>' +
      '</div>';
    tutorialGrid.appendChild(card);
  });
}

function openTutorial(id) {
  const tut = tutorials.find(function(t) { return t.id === id; });
  if (!tut) return;

  const isArduino = tut.category === "Arduino";

  const tableHeaders = isArduino
    ? '<tr><th>Component</th><th>Component P