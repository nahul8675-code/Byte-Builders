const tutorials = [
  {
    id: 1,
    category: "Arduino",
    difficulty: "Beginner",
    time: "20 Mins",
    title: "Arduino Automatic Night Light (LDR)",
    concept: "An LDR (Light Dependent Resistor) is a passive sensor whose resistance changes based on ambient light level. In darkness, resistance rises and shifts voltage across the divider circuit. The Arduino reads this via an analog pin and controls the LED automatically.",
    diagram: "[5V Pin] ──► [LDR Sensor Leg 1]\n[LDR Leg 2] ──┬──► [Analog Pin A0]\n              └──► [10kΩ Resistor Leg 1]\n[10kΩ Resistor Leg 2] ──► [GND Rail]\n\n[Digital Pin 9] ──► [220Ω Resistor Leg 1]\n[220Ω Resistor Leg 2] ──► [LED Anode (+)]\n[LED Cathode (-)] ──► [GND Rail]",
    items: ["1x Arduino Uno or Nano", "1x Photoresistor (LDR)", "1x 5mm LED", "1x 10kΩ Resistor", "1x 220Ω Resistor", "1x Breadboard & Wires", "1x USB Cable"],
    wiring: [
      ["LDR Sensor", "Leg 1", "5V Power Rail", "Reference voltage input"],
      ["LDR Sensor", "Leg 2", "Pin A0 & 10kΩ Resistor", "Divider junction"],
      ["10kΩ Resistor", "Leg 2", "GND Rail", "Ground loop return"],
      ["220Ω Resistor", "Leg 1", "Digital Pin 9", "Current limiting"],
      ["5mm LED", "Anode (+)", "220Ω Resistor Leg 2", "Positive terminal"],
      ["5mm LED", "Cathode (-)", "GND Rail", "Ground return"]
    ],
    steps: [
      "Connect Arduino 5V and GND to breadboard rails.",
      "Place LDR on breadboard and wire Leg 1 to 5V.",
      "Connect LDR Leg 2 to Pin A0 and through 10kΩ resistor to GND.",
      "Connect Pin 9 through 220Ω resistor to LED Anode (+).",
      "Connect LED Cathode (-) to GND.",
      "Upload sketch via Arduino IDE."
    ],
    code: `const int ldrPin = A0;\nconst int ledPin = 9;\nconst int threshold = 400;\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int lightLevel = analogRead(ldrPin);\n  Serial.print("Light Level: ");\n  Serial.println(lightLevel);\n  if (lightLevel < threshold) {\n    digitalWrite(ledPin, HIGH);\n  } else {\n    digitalWrite(ledPin, LOW);\n  }\n  delay(200);\n}`,
    trouble: "Check LED polarity (longer leg is positive) and open Serial Monitor to adjust threshold value."
  },
  {
    id: 2,
    category: "Robotics",
    difficulty: "Beginner",
    time: "15 Mins",
    title: "Introduction to ESP32: Wi-Fi Scanner",
    concept: "The ESP32 microcontroller features built-in Wi-Fi and Bluetooth. Station mode scans surrounding 2.4GHz radio channels and prints network names and signal strengths.",
    diagram: "[PC USB Port] ══(USB Data Cable)══► [ESP32 Board] )) 2.4GHz Wi-Fi Scan",
    items: ["1x ESP32 Board", "1x USB Data Cable", "PC with Arduino IDE"],
    wiring: [
      ["ESP32 Board", "USB Port", "PC USB Port", "Serial data and power link"],
      ["Arduino IDE", "Tools > Board", "ESP32 Dev Module", "Target board profile"],
      ["Arduino IDE", "Tools > Port", "Active COM Port", "Serial communication"]
    ],
    steps: [
      "Install ESP32 board in Arduino IDE Boards Manager.",
      "Connect ESP32 to PC with a data USB cable.",
      "Select ESP32 Dev Module and COM port under Tools.",
      "Paste code and click Upload.",
      "Hold BOOT button on the ESP32 if connection hangs.",
      "Open Serial Monitor at 115200 baud."
    ],
    code: `#include "WiFi.h"\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.mode(WIFI_STA);\n  WiFi.disconnect();\n  delay(100);\n  Serial.println("ESP32 Scanner Initialized!");\n}\n\nvoid loop() {\n  Serial.println("Scanning networks...");\n  int count = WiFi.scanNetworks();\n  for (int i = 0; i < count; ++i) {\n    Serial.print(WiFi.SSID(i));\n    Serial.print(" (RSSI: ");\n    Serial.print(WiFi.RSSI(i));\n    Serial.println(" dBm)");\n  }\n  delay(5000);\n}`,
    trouble: "Keep the BOOT button held down during code upload if Arduino IDE displays connecting dots."
  },
  {
    id: 3,
    category: "Python",
    difficulty: "Beginner",
    time: "15 Mins",
    title: "Python Variables & Sensor Data Calculator",
    concept: "Variables store data values in memory. This script converts raw 10-bit analog readings (0-1023) into real-world 5V voltage readings.",
    diagram: "[Raw Sensor Reading] ──► [Mathematical Formula] ──► [Calculated Voltage]",
    items: ["PC / Laptop", "Python 3.x Installed", "VS Code Editor"],
    wiring: [
      ["VS Code", "New File", "sensor_calc.py", "Script file target"],
      ["Terminal", "Command Line", "python sensor_calc.py", "Execution command"]
    ],
    steps: [
      "Create a new file named sensor_calc.py.",
      "Paste the Python script below.",
      "Save the file using Ctrl + S.",
      "Open terminal and execute with python sensor_calc.py."
    ],
    code: `project_name = 'ADC Voltage Converter'\nmax_adc = 1023.0\nref_voltage = 5.0\nraw_reading = 512\n\nvoltage = (raw_reading / max_adc) * ref_voltage\n\nprint('=== ' + project_name + ' ===')\nprint('Raw Reading :', raw_reading)\nprint('Voltage Out :', round(voltage, 2), 'V')`,
    trouble: "Verify that Python is checked in your system PATH variables during installation."
  },
  {
    id: 4,
    category: "Cybersecurity",
    difficulty: "Beginner",
    time: "30 Mins",
    title: "Starting a Safe Linux Practice Lab (VirtualBox)",
    concept: "A Virtual Machine runs an isolated guest operating system securely inside your host computer, allowing safe cybersecurity practice.",
    diagram: "[Host OS] ──► [VirtualBox Hypervisor] ──► [Isolated Ubuntu VM]",
    items: ["Windows PC", "VirtualBox Software", "Ubuntu Desktop ISO File"],
    wiring: [
      ["VirtualBox Profile", "OS Selection", "Ubuntu (64-bit)", "Hypervisor setup profile"],
      ["RAM Allocation", "Memory Slider", "2048 MB (2 GB+)", "Assigned RAM"],
      ["Virtual Storage", "VDI Disk", "25 GB Dynamically Allocated", "Virtual hard drive"]
    ],
    steps: [
      "Install VirtualBox and download the Ubuntu ISO file.",
      "Create a new virtual machine and attach the ISO.",
      "Allocate 2 GB RAM and 25 GB storage space.",
      "Start VM and complete Ubuntu installation.",
      "Press Ctrl + Alt + T to launch the terminal."
    ],
    code: `# Beginner Linux Terminal Practice\nwhoami       # Show current username\npwd          # Print current folder path\nls -la       # List files with details\nip addr show # Show network configuration\nfree -m      # Show RAM usage`,
    trouble: "Enable Intel VT-x or AMD-V virtualization inside your computer BIOS if 64-bit VMs fail to launch."
  },
  {
    id: 5,
    category: "Arduino",
    difficulty: "Intermediate",
    time: "45 Mins",
    title: "Arduino Ultrasonic Radar with TFT Display",
    concept: "An ultrasonic sensor measures distance while mounted on a rotating servo motor. An SPI color TFT screen renders an active radar sweep in real-time.",
    diagram: "[HC-SR04 Sensor] on [SG90 Servo]\n       │\n[Arduino Uno] ══(SPI Protocol)══► [1.8\" ST7735 TFT Screen]",
    items: ["1x Arduino Uno", "1x ST7735 TFT Display", "1x HC-SR04 Sensor", "1x SG90 Servo", "Jumper Wires"],
    wiring: [
      ["SG90 Servo", "Orange Signal", "Digital Pin 6", "PWM control"],
      ["HC-SR04", "TRIG Pin", "Digital Pin 2", "Trigger pulse"],
      ["HC-SR04", "ECHO Pin", "Digital Pin 3", "Echo pulse input"],
      ["ST7735", "CS Pin", "Digital Pin 10", "SPI Chip Select"],
      ["ST7735", "DC Pin", "Digital Pin 9", "Data/Command mode"],
      ["ST7735", "RST Pin", "Digital Pin 8", "Hardware reset"],
      ["ST7735", "MOSI", "Digital Pin 11", "SPI Data"],
      ["ST7735", "SCK", "Digital Pin 13", "SPI Clock"]
    ],
    steps: [
      "Install Adafruit GFX and ST7735 libraries.",
      "Mount HC-SR04 sensor onto the servo arm.",
      "Wire sensor and servo to Arduino digital pins.",
      "Wire SPI display to Pins 8 through 13.",
      "Upload sketch to Arduino."
    ],
    code: `#include <SPI.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_ST7735.h>\n#include <Servo.h>\n\n#define TFT_CS 10\n#define TFT_RST 8\n#define TFT_DC 9\n\nAdafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);\nServo radarServo;\n\nvoid setup() {\n  radarServo.attach(6);\n  tft.initR(INITR_BLACKTAB);\n  tft.fillScreen(0x0000);\n}\n\nvoid loop() {\n  radarServo.write(90);\n  delay(100);\n}`,
    trouble: "Connect the display backlight pin to 3.3V and verify SPI wiring matches Pins 10-13."
  },
  {
    id: 6,
    category: "Cybersecurity",
    difficulty: "Beginner",
    time: "25 Mins",
    title: "Bootable Ubuntu Linux USB Lab with Rufus",
    concept: "A Live USB runs an entire operating system directly in your PC RAM without touching your internal hard drive or Windows files.",
    diagram: "[Ubuntu ISO] + [Rufus] ══(Flash)══► [USB Drive] ══► [Boot Live Mode]",
    items: ["1x 8GB+ USB Drive", "Windows PC", "Rufus Software", "Ubuntu ISO Image"],
    wiring: [
      ["Rufus Tool", "Device", "USB Flash Drive", "Target device"],
      ["Rufus Tool", "Boot Selection", "Ubuntu ISO", "Operating system source"],
      ["Rufus Tool", "Partition", "GPT (UEFI)", "Modern UEFI firmware"]
    ],
    steps: [
      "Download Rufus and the Ubuntu ISO file.",
      "Open Rufus and select your USB flash drive.",
      "Choose the Ubuntu ISO and partition scheme GPT.",
      "Click START and wait for the flash process to finish.",
      "Reboot computer and boot into USB drive selecting 'Try Ubuntu'."
    ],
    code: `# Live USB Inspection Commands\nuname -a            # Kernel details\ncat /etc/os-release # OS details\nfree -m             # Live session memory\nlsblk               # Storage devices\nping -c 4 8.8.8.8   # Network connectivity`,
    trouble: "Always select 'Try Ubuntu' instead of 'Install Ubuntu' to protect existing hard drive partitions."
  },
  {
    id: 7,
    category: "Robotics",
    difficulty: "Intermediate",
    time: "30 Mins",
    title: "ESP32 Smartphone Wi-Fi LED Controller",
    concept: "The ESP32 runs a local HTTP web server on Wi-Fi, allowing any phone on the same network to toggle hardware pins wirelessly from a browser.",
    diagram: "[Phone Browser] ══(Local Wi-Fi HTTP)══► [ESP32 Server] ──► [GPIO 26] ──► [LED]",
    items: ["1x ESP32 Board", "1x 5mm LED & 220Ω Resistor", "Breadboard & Wires", "Wi-Fi Router"],
    wiring: [
      ["ESP32", "GPIO 26", "220Ω Resistor Leg 1", "Digital output"],
      ["220Ω Resistor", "Leg 2", "LED Anode (+)", "Current protection"],
      ["5mm LED", "Cathode (-)", "ESP32 GND", "Ground return"]
    ],
    steps: [
      "Wire LED and resistor from GPIO 26 to GND.",
      "Input your 2.4GHz Wi-Fi credentials into the code.",
      "Upload sketch via Arduino IDE.",
      "Open Serial Monitor at 115200 baud to view IP address.",
      "Type the IP address into your phone browser to toggle LED."
    ],
    code: `#include <WiFi.h>\n#include <WebServer.h>\n\nconst char* ssid = "YOUR_WIFI_NAME";\nconst char* password = "YOUR_WIFI_PASSWORD";\nWebServer server(80);\nconst int ledPin = 26;\n\nvoid handleRoot() {\n  server.send(200, "text/html", "<h1>Byte-Builders ESP32</h1><a href='/on'>ON</a> | <a href='/off'>OFF</a>");\n}\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n  Serial.begin(115200);\n  WiFi.begin(ssid, password);\n  while(WiFi.status() != WL_CONNECTED) { delay(500); }\n  server.on("/", handleRoot);\n  server.on("/on", [](){ digitalWrite(ledPin, HIGH); handleRoot(); });\n  server.on("/off", [](){ digitalWrite(ledPin, LOW); handleRoot(); });\n  server.begin();\n}\n\nvoid loop() { server.handleClient(); }`,
    trouble: "Make sure both your smartphone and ESP32 are connected to the same 2.4GHz Wi-Fi network."
  },
  {
    id: 8,
    category: "Python",
    difficulty: "Beginner",
    time: "20 Mins",
    title: "Python Password Strength Analyzer",
    concept: "Inspects password complexity through length checks, digits, uppercase letters, and special symbols using Python standard string functions.",
    diagram: "[Password String] ──► [Security Rule Checks] ──► [Strength Rating Output]",
    items: ["PC / Laptop", "Python 3.x", "Text Editor"],
    wiring: [
      ["Code Editor", "New File", "password_tool.py", "Script file target"],
      ["Terminal", "Command", "python password_tool.py", "Execution command"]
    ],
    steps: [
      "Create a file named password_tool.py.",
      "Paste the analysis script below.",
      "Save file with Ctrl + S.",
      "Run script from terminal to test passwords."
    ],
    code: `import string\n\ndef check_strength(pw):\n    score = 0\n    if len(pw) >= 10: score += 1\n    if any(c.isdigit() for c in pw): score += 1\n    if any(c.isupper() for c in pw): score += 1\n    if any(c in string.punctuation for c in pw): score += 1\n    ratings = {0: 'Very Weak', 1: 'Weak', 2: 'Moderate', 3: 'Strong', 4: 'Very Strong'}\n    return ratings[score]\n\nsample = 'SecurePass123!'\nprint('Password:', sample)\nprint('Rating  :', check_strength(sample))`,
    trouble: "Run python3 instead of python if your environment defaults to an older version."
  }
];

let activeCategory = "All";

function renderTutorials() {
  const grid = document.getElementById("tutorialGrid");
  if (!grid) return;
  const searchEl = document.getElementById("searchInput");
  const query = searchEl ? searchEl.value.trim().toLowerCase() : "";
  grid.innerHTML = "";

  const filtered = tutorials.filter(t => {
    const matchCat = (activeCategory === "All" || t.category === activeCategory);
    const matchSearch = t.title.toLowerCase().includes(query) ||
                        t.category.toLowerCase().includes(query) ||
                        t.concept.toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:20px;">No tutorials found.</p>';
    return;
  }

  filtered.forEach(tut => {
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
            <strong>Items:</strong> ${tut.items.slice(0, 3).join(", ")}...
          </div>
        </div>
      </div>
      <div class="tut-footer">
        <button class="btn-primary" style="width:100%;" onclick="openTutorial(${tut.id})">Open Detailed Guide</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openTutorial(id) {
  const tut = tutorials.find(t => t.id === id);
  if (!tut) return;

  const wiringRows = tut.wiring.map(r => `
    <tr>
      <td><strong>${r[0]}</strong></td>
      <td>${r[1]}</td>
      <td><span class="pin-badge">${r[2]}</span></td>
      <td style="color:var(--text-muted);">${r[3]}</td>
    </tr>
  `).join("");

  const itemsList = tut.items.map(i => `<li>${i}</li>`).join("");
  const stepsList = tut.steps.map(s => `<li style="margin-bottom:8px; line-height:1.5;">${s}</li>`).join("");
  const safeCode = tut.code.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  document.getElementById("modalBody").innerHTML = `
    <div class="tut-meta-row">
      <span class="tut-tag">${tut.category}</span>
      <div class="meta-badges">
        <span class="difficulty-badge">${tut.difficulty}</span>
        <span class="time-badge">⏱️ ${tut.time}</span>
      </div>
    </div>
    <h2 style="margin:8px 0 16px; color:var(--cyan);">${tut.title}</h2>
    
    <div class="modal-section" style="background:#ECE5DC; border-left:3px solid var(--cyan); padding:12px 16px; border-radius:4px;">
      <h4 style="color:var(--cyan); margin-bottom:6px;">Core Concept</h4>
      <p style="color:var(--text-main); font-size:0.95rem; line-height:1.5;">${tut.concept}</p>
    </div>

    <div class="modal-section">
      <h4>Visual Schematic / Diagram</h4>
      <pre>${tut.diagram}</pre>
    </div>

    <div class="modal-section">
      <h4>Items & Components Checklist</h4>
      <ul>${itemsList}</ul>
    </div>

    <div class="modal-section">
      <h4>Step-by-Step Construction Guide</h4>
      <ol style="padding-left:20px; color:var(--text-main);">${stepsList}</ol>
    </div>

    <div class="modal-section">
      <h4>Pin-by-Pin Wiring & Settings Table</h4>
      <div class="table-responsive">
        <table class="wiring-table">
          <thead>
            <tr><th>Component</th><th>Pin / Setting</th><th>Connect To</th><th>Notes</th></tr>
          </thead>
          <tbody>${wiringRows}</tbody>
        </table>
      </div>
    </div>

    <div class="modal-section">
      <h4>Tested Source Code / Commands</h4>
      <div class="code-wrapper">
        <button class="copy-btn" onclick="copyModalCode(this)">Copy Code</button>
        <pre><code id="modalCodeBlock">${safeCode}</code></pre>
      </div>
    </div>

    <div class="modal-section">
      <h4>Troubleshooting Tips</h4>
      <p style="color:var(--text-muted); line-height:1.4;">${tut.trouble}</p>
    </div>

    <div class="modal-section" style="border-top:1px solid var(--border); padding-top:15px; text-align:center;">
      <p style="color:var(--cyan); font-weight:700;">Need a custom setup? DM FOR CUSTOM PROJECTS on Instagram (@byte_builders.official)!</p>
    </div>
  `;

  document.getElementById("tutorialModal").style.display = "flex";
}

function closeTutorial() {
  const modal = document.getElementById("tutorialModal");
  if (modal) modal.style.display = "none";
}

function copyModalCode(btn) {
  const code = document.getElementById("modalCodeBlock").innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.innerText = "Copied!";
    setTimeout(() => { btn.innerText = "Copy Code"; }, 2000);
  });
}

function filterByCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  const sec = document.getElementById("tutorials");
  if (sec) sec.scrollIntoView({ behavior: "smooth" });
  renderTutorials();
}

document.addEventListener("DOMContentLoaded", () => {
  renderTutorials();

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => filterByCategory(btn.dataset.category));
  });

  const search = document.getElementById("searchInput");
  if (search) search.addEventListener("input", renderTutorials);

  window.addEventListener("click", e => {
    const modal = document.getElementById("tutorialModal");
    if (e.target === modal) closeTutorial();
  });
});
