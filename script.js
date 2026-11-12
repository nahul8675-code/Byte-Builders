const tutorials = [
  {
    id: 1,
    category: "Arduino",
    difficulty: "Beginner",
    time: "20 Mins",
    title: "Arduino Automatic Night Light (LDR)",
    concept: "An LDR (Light Dependent Resistor) changes resistance based on ambient light. In darkness, resistance rises and shifts voltage across the divider circuit so the Arduino turns on the LED automatically.",
    diagram: "[5V Pin] ──► [LDR Leg 1]\n[LDR Leg 2] ──┬──► [Pin A0]\n              └──► [10kΩ Resistor] ──► [GND]\n[Pin 9] ──► [220Ω Resistor] ──► [LED (+)] ──► [GND]",
    items: ["1x Arduino Uno", "1x LDR Sensor", "1x 5mm LED", "1x 10kΩ & 1x 220Ω Resistor", "Breadboard & Jumper Wires"],
    wiring: [
      ["LDR Sensor", "Leg 1", "5V Rail", "Voltage input"],
      ["LDR Sensor", "Leg 2", "Pin A0 & 10kΩ", "Signal junction"],
      ["10kΩ Resistor", "Leg 2", "GND Rail", "Pull-down ground"],
      ["220Ω Resistor", "Leg 1", "Digital Pin 9", "LED current limit"],
      ["5mm LED", "Anode (+)", "220Ω Leg 2", "Positive leg"],
      ["5mm LED", "Cathode (-)", "GND Rail", "Ground return"]
    ],
    steps: [
      "Connect Arduino 5V and GND to the breadboard power rails.",
      "Place the LDR sensor and wire Leg 1 to 5V.",
      "Connect LDR Leg 2 to Analog Pin A0 and through a 10kΩ resistor to GND.",
      "Connect Digital Pin 9 through a 220Ω resistor to the LED Anode (+).",
      "Wire the LED Cathode (-) to GND and upload the sketch."
    ],
    code: `const int ldrPin = A0;\nconst int ledPin = 9;\nconst int threshold = 400;\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int light = analogRead(ldrPin);\n  if (light < threshold) {\n    digitalWrite(ledPin, HIGH);\n  } else {\n    digitalWrite(ledPin, LOW);\n  }\n  delay(200);\n}`,
    trouble: "Check LED polarity (longer leg is positive) and open Serial Monitor at 9600 baud to calibrate your room light threshold."
  },
  {
    id: 2,
    category: "Robotics",
    difficulty: "Beginner",
    time: "15 Mins",
    title: "Introduction to ESP32: Wi-Fi Scanner",
    concept: "The ESP32 features built-in 2.4GHz Wi-Fi. Placing it in Station Mode (WIFI_STA) lets it scan nearby access points and report network names (SSID) and signal strengths (RSSI).",
    diagram: "[PC USB Port] ══(Data Cable)══► [ESP32 Dev Board] )) 2.4GHz Radio Scan",
    items: ["1x ESP32 Development Board", "1x Micro-USB / USB-C Data Cable", "Arduino IDE"],
    wiring: [
      ["ESP32 Board", "USB Port", "PC USB Port", "Power & serial link"],
      ["Arduino IDE", "Board", "ESP32 Dev Module", "Board selection"],
      ["Serial Monitor", "Baud Rate", "115200 baud", "Output speed"]
    ],
    steps: [
      "Install the ESP32 package in Arduino IDE Boards Manager.",
      "Connect the ESP32 to your PC using a data-capable USB cable.",
      "Select ESP32 Dev Module and your active COM port under Tools.",
      "Upload the sketch (hold BOOT button if upload hangs on connecting).",
      "Open Serial Monitor at 115200 baud to view live Wi-Fi scan results."
    ],
    code: `#include "WiFi.h"\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.mode(WIFI_STA);\n  WiFi.disconnect();\n  delay(100);\n}\n\nvoid loop() {\n  Serial.println("Scanning Wi-Fi...");\n  int n = WiFi.scanNetworks();\n  for (int i = 0; i < n; ++i) {\n    Serial.print(WiFi.SSID(i));\n    Serial.print(" (");\n    Serial.print(WiFi.RSSI(i));\n    Serial.println(" dBm)");\n  }\n  delay(5000);\n}`,
    trouble: "Use a data USB cable (not a charge-only cable) and hold down the BOOT button on the ESP32 while uploading."
  },
  {
    id: 3,
    category: "Python",
    difficulty: "Beginner",
    time: "15 Mins",
    title: "Python Variables & Sensor Data Calculator",
    concept: "Microcontrollers read analog voltages as raw numbers (0 to 1023). This Python script uses variables and math formulas to convert raw ADC values into real voltage readings.",
    diagram: "[Raw ADC Reading (0-1023)] ──► [Formula: (Raw / 1023) * 5.0V] ──► [Voltage Output]",
    items: ["PC or Laptop", "Python 3.x Installed", "Code Editor (VS Code)"],
    wiring: [
      ["Editor", "File Name", "sensor_calc.py", "Python script"],
      ["Terminal", "Run Command", "python sensor_calc.py", "Execute program"]
    ],
    steps: [
      "Open your code editor and create a file named sensor_calc.py.",
      "Paste the Python conversion script into the editor.",
      "Save the file using Ctrl + S.",
      "Open your terminal and run python sensor_calc.py."
    ],
    code: `project_name = 'ADC Voltage Converter'\nmax_adc = 1023.0\nref_voltage = 5.0\nraw_reading = 512\n\nvoltage = (raw_reading / max_adc) * ref_voltage\n\nprint('=== ' + project_name + ' ===')\nprint('Raw Reading :', raw_reading)\nprint('Voltage Out :', round(voltage, 2), 'V')`,
    trouble: "Ensure 'Add Python to PATH' was checked during Python installation, or run using python3 sensor_calc.py."
  },
  {
    id: 4,
    category: "Cybersecurity",
    difficulty: "Beginner",
    time: "30 Mins",
    title: "Starting a Safe Linux Practice Lab (VirtualBox)",
    concept: "A Virtual Machine (VM) creates an isolated guest computer inside your main PC so you can safely practice Linux commands and cybersecurity tools without risking your main OS.",
    diagram: "[Windows/Mac Host OS] ──► [VirtualBox Hypervisor] ──► [Isolated Ubuntu Linux VM]",
    items: ["PC with 8GB+ RAM", "Oracle VirtualBox", "Ubuntu Desktop ISO Image"],
    wiring: [
      ["VirtualBox", "OS Type", "Linux / Ubuntu (64-bit)", "VM profile"],
      ["Base Memory", "RAM Slider", "2048 MB - 4096 MB", "Allocated memory"],
      ["Storage", "Virtual Disk", "25 GB VDI", "Dynamic storage"]
    ],
    steps: [
      "Download and install Oracle VirtualBox and the Ubuntu Desktop ISO file.",
      "Click 'New' in VirtualBox, name it Ubuntu Lab, and attach the downloaded ISO.",
      "Allocate at least 2048 MB (2 GB) of RAM and 25 GB of virtual disk space.",
      "Boot the virtual machine and complete the guided Ubuntu setup.",
      "Press Ctrl + Alt + T inside Ubuntu to open your practice terminal."
    ],
    code: `# Initial Linux Sandbox Check\nwhoami        # Display active username\nhostname      # Display machine name\nuname -a      # Check Linux kernel version\nip addr show  # Inspect virtual network IP`,
    trouble: "If 64-bit options are missing in VirtualBox, enable Intel VT-x or AMD-V virtualization in your PC BIOS settings."
  },
  {
    id: 5,
    category: "Arduino",
    difficulty: "Intermediate",
    time: "45 Mins",
    title: "Arduino Ultrasonic Radar with TFT Display",
    concept: "An HC-SR04 ultrasonic sensor mounted on a sweeping servo motor measures object distances using sound echoes and plots a live radar map onto a 1.8-inch SPI TFT screen.",
    diagram: "[HC-SR04 Sensor] + [SG90 Servo] ──► [Arduino Uno] ══(SPI)══► [ST7735 TFT Display]",
    items: ["1x Arduino Uno", "1x 1.8\" ST7735 TFT Screen", "1x HC-SR04 Sensor", "1x SG90 Servo Motor", "Jumper Wires"],
    wiring: [
      ["SG90 Servo", "Signal Wire", "Digital Pin 6", "Servo angle control"],
      ["HC-SR04", "TRIG / ECHO", "Pins 2 & 3", "Ultrasonic pulse"],
      ["ST7735 TFT", "CS / DC / RST", "Pins 10, 9, 8", "SPI control lines"],
      ["ST7735 TFT", "MOSI / SCK", "Pins 11 & 13", "Hardware SPI data"]
    ],
    steps: [
      "Install the Adafruit GFX and Adafruit ST7735 libraries in Arduino IDE.",
      "Mount the ultrasonic sensor onto the rotating horn of the SG90 servo.",
      "Wire the servo signal to Pin 6 and HC-SR04 TRIG/ECHO to Pins 2 and 3.",
      "Connect the TFT display SPI pins to Arduino Pins 8, 9, 10, 11, and 13.",
      "Upload the sketch to start the radar sweep."
    ],
    code: `#include <SPI.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_ST7735.h>\n#include <Servo.h>\n\n#define TFT_CS 10\n#define TFT_RST 8\n#define TFT_DC 9\n\nAdafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);\nServo radarServo;\n\nvoid setup() {\n  radarServo.attach(6);\n  tft.initR(INITR_BLACKTAB);\n  tft.fillScreen(0x0000);\n}\n\nvoid loop() {\n  for(int a=15; a<=165; a+=2){\n    radarServo.write(a);\n    delay(30);\n  }\n}`,
    trouble: "If the TFT screen stays white, double-check that the LED/Backlight pin on the display is wired to 3.3V or 5V."
  },
  {
    id: 6,
    category: "Cybersecurity",
    difficulty: "Beginner",
    time: "25 Mins",
    title: "Bootable Ubuntu Linux USB Lab with Rufus",
    concept: "A Live USB lets you boot a full Linux operating system directly from a flash drive into system RAM without altering your computer's internal hard drive or Windows files.",
    diagram: "[Ubuntu ISO] + [Rufus Tool] ══(Flash)══► [USB Drive] ──► [Try Ubuntu Live Mode]",
    items: ["1x 8GB+ USB Flash Drive", "Windows PC", "Rufus Utility", "Ubuntu Desktop ISO"],
    wiring: [
      ["Rufus", "Device", "Target USB Drive", "Backup USB data first"],
      ["Rufus", "Boot Selection", "Ubuntu ISO File", "System image"],
      ["Rufus", "Partition Scheme", "GPT / UEFI", "Modern BIOS mode"]
    ],
    steps: [
      "Insert your 8GB+ USB drive and open the Rufus application.",
      "Select your USB drive under Device and pick the Ubuntu ISO file.",
      "Set Partition Scheme to GPT and click START to flash the drive.",
      "Restart your PC, press your Boot Menu key (F12, F11, or Esc), and select the USB drive.",
      "Choose 'Try Ubuntu' to enter the safe live session."
    ],
    code: `# Live USB Hardware Verification\nuname -r            # Kernel release\nlsblk               # View disk partitions safely\nfree -h             # Check live RAM allocation\nping -c 4 1.1.1.1   # Test internet connection`,
    trouble: "Always click 'Try Ubuntu' instead of 'Install Ubuntu' so your internal hard drive stays completely untouched."
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
    grid.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:20px; grid-column:1/-1;">No matching tutorials found. Try another keyword!</p>';
    return;
  }

  filtered.forEach(tut => {
    const card = document.createElement("div");
    card.className = "tut-card";
    card.innerHTML = `
      <div>
        <div class="tut-graphic">
          <div class="chip-illustration">${tut.category.toUpperCase()} LAB</div>
          <small style="color:var(--text-muted); font-family:monospace;">Guide #0${tut.id}</small>
        </div>
        <div class="tut-body">
          <div class="tut-meta-row">
            <span class="tut-tag">${tut.category}</span>
            <div class="meta-badges">
              <span>${tut.difficulty}</span> • <span>⏱️ ${tut.time}</span>
            </div>
          </div>
          <h3>${tut.title}</h3>
          <div class="items-preview">
            <strong>Items:</strong> ${tut.items.slice(0, 2).join(", ")}...
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
  const stepsList = tut.steps.map(s => `<li style="margin-bottom:8px;">${s}</li>`).join("");
  const safeCode = tut.code.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  document.getElementById("modalBody").innerHTML = `
    <div class="tut-meta-row">
      <span class="tut-tag">${tut.category}</span>
      <div class="meta-badges">
        <span>${tut.difficulty}</span> • <span>⏱️ ${tut.time}</span>
      </div>
    </div>
    <h2 style="margin:8px 0 16px; color:var(--btn-walnut);">${tut.title}</h2>
    
    <div class="modal-section" style="background:var(--bg-cream); border-left:4px solid var(--btn-walnut); padding:12px 16px; border-radius:4px;">
      <h4 style="border:none; margin-bottom:4px; padding:0;">Core Concept</h4>
      <p style="font-size:0.95rem;">${tut.concept}</p>
    </div>

    <div class="modal-section">
      <h4>Visual Schematic / Diagram</h4>
      <pre>${tut.diagram}</pre>
    </div>

    <div class="modal-section">
      <h4>Items & Components Checklist</h4>
      <ul style="padding-left:20px;">${itemsList}</ul>
    </div>

    <div class="modal-section">
      <h4>Step-by-Step Construction Guide</h4>
      <ol style="padding-left:20px;">${stepsList}</ol>
    </div>

    <div class="modal-section">
      <h4>Pin-by-Pin Wiring & Command Table</h4>
      <div class="table-responsive">
        <table class="wiring-table">
          <thead>
            <tr><th>Component / Cmd</th><th>Pin / Action</th><th>Connect / Output</th><th>Notes</th></tr>
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
      <p style="color:var(--text-muted);">${tut.trouble}</p>
    </div>

    <div class="modal-section" style="border-top:1px solid var(--border-subtle); padding-top:14px; text-align:center;">
      <p style="color:var(--btn-walnut); font-weight:700;">Need help or a custom build? DM @byte_builders.official on Instagram!</p>
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
