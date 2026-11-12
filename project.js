const moreTutorials = [
  {
    id: 7,
    category: "Robotics",
    difficulty: "Intermediate",
    time: "30 Mins",
    title: "ESP32 Smartphone Wi-Fi LED Controller",
    concept: "The ESP32 hosts a local HTTP web server over Wi-Fi, allowing any smartphone on the same network to toggle hardware GPIO pins ON or OFF from a mobile browser.",
    diagram: "[Phone Browser] ══(Wi-Fi HTTP)══► [ESP32 Web Server] ──► [GPIO 26] ──► [LED]",
    items: ["1x ESP32 Board", "1x 5mm LED & 220Ω Resistor", "Breadboard & Jumper Wires", "2.4GHz Wi-Fi Network"],
    wiring: [
      ["ESP32", "GPIO 26", "220Ω Resistor Leg 1", "Digital output pin"],
      ["220Ω Resistor", "Leg 2", "LED Anode (+)", "Current protection"],
      ["5mm LED", "Cathode (-)", "ESP32 GND", "Common ground"]
    ],
    steps: [
      "Wire GPIO 26 through a 220Ω resistor to the LED Anode (+), and LED Cathode (-) to GND.",
      "Enter your 2.4GHz Wi-Fi SSID and password into the code.",
      "Upload the sketch to your ESP32 board.",
      "Open the Serial Monitor at 115200 baud to find the ESP32's local IP address.",
      "Type that IP address into your phone's web browser to control the LED."
    ],
    code: `#include <WiFi.h>\n#include <WebServer.h>\n\nconst char* ssid = "YOUR_WIFI_NAME";\nconst char* password = "YOUR_WIFI_PASSWORD";\nWebServer server(80);\nconst int ledPin = 26;\n\nvoid handleRoot() {\n  server.send(200, "text/html", "<h1>Byte-Builders ESP32</h1><p><a href='/on'>LED ON</a> | <a href='/off'>LED OFF</a></p>");\n}\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n  Serial.begin(115200);\n  WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) { delay(500); }\n  Serial.println(WiFi.localIP());\n  server.on("/", handleRoot);\n  server.on("/on", [](){ digitalWrite(ledPin, HIGH); handleRoot(); });\n  server.on("/off", [](){ digitalWrite(ledPin, LOW); handleRoot(); });\n  server.begin();\n}\n\nvoid loop() {\n  server.handleClient();\n}`,
    trouble: "Ensure your ESP32 and smartphone are connected to the exact same 2.4GHz Wi-Fi router band."
  },
  {
    id: 8,
    category: "Python",
    difficulty: "Beginner",
    time: "20 Mins",
    title: "Python Password Strength Analyzer",
    concept: "Evaluates password security by checking length, numbers, uppercase letters, and special punctuation characters using Python's built-in string module.",
    diagram: "[Input Password] ──► [4 Security Rule Checks] ──► [Strength Score Output]",
    items: ["PC or Laptop", "Python 3.x", "Text Editor"],
    wiring: [
      ["Code Editor", "File Name", "password_tool.py", "Script file"],
      ["Terminal", "Command", "python password_tool.py", "Run script"]
    ],
    steps: [
      "Create a new file named password_tool.py in your editor.",
      "Paste the Python password inspection script below.",
      "Save the file and run it from your terminal.",
      "Test different sample strings to see how the score changes."
    ],
    code: `import string\n\ndef check_strength(pw):\n    score = 0\n    if len(pw) >= 10: score += 1\n    if any(c.isdigit() for c in pw): score += 1\n    if any(c.isupper() for c in pw): score += 1\n    if any(c in string.punctuation for c in pw): score += 1\n    ratings = {0: 'Very Weak', 1: 'Weak', 2: 'Moderate', 3: 'Strong', 4: 'Very Strong'}\n    return ratings[score]\n\nsample = 'ByteBuilder2026!'\nprint('Password:', sample)\nprint('Rating  :', check_strength(sample))`,
    trouble: "Make sure import string is at the very top of your file so string.punctuation works properly."
  },
  {
    id: 9,
    category: "Cybersecurity",
    difficulty: "Beginner",
    time: "15 Mins",
    title: "5 Linux Commands Every Beginner Must Know",
    concept: "The Linux terminal is a powerful text interface. Mastering these 5 foundational commands lets you check your directory path, verify active user accounts, reveal hidden files, navigate folders, and monitor live RAM usage.",
    diagram: "[Linux Terminal] ──► [pwd | whoami | ls -la | cd | free -m] ──► [System Output]",
    items: ["VirtualBox Ubuntu VM or Live USB", "Linux Terminal (Ctrl + Alt + T)"],
    wiring: [
      ["pwd", "Print Working Directory", "/home/bytebuilder", "Shows current folder path"],
      ["whoami", "Active User Check", "bytebuilder", "Confirms logged-in user"],
      ["ls -la", "List All Files", "Visible & .hidden items", "Shows permissions & sizes"],
      ["cd", "Change Directory", "cd Documents / cd ..", "Moves across folders"],
      ["free -m", "Memory Check", "RAM in Megabytes", "Monitors used & free RAM"]
    ],
    steps: [
      "Open your Linux terminal window by pressing Ctrl + Alt + T.",
      "Type pwd and press Enter to see your current folder location.",
      "Type whoami to confirm which user account you are operating under.",
      "Type ls -la to list all files in the directory, including hidden dot-files.",
      "Use cd Documents to enter a folder, cd .. to step back one level, or cd ~ to return home.",
      "Type free -m to inspect your system's live RAM usage in Megabytes."
    ],
    code: `# 5 Essential Linux Beginner Commands\npwd             # 1. Print current directory path\nwhoami          # 2. Display active username\nls -la          # 3. List all files (including hidden)\ncd Documents    # 4. Move into Documents folder\ncd ..           #    Move back one folder level\nfree -m         # 5. Check RAM usage in Megabytes\n\n# Pro Tip: Wipe terminal clutter anytime\nclear           # Or press Ctrl + L`,
    trouble: "Linux commands and folder names are strictly case-sensitive ('Documents' is different from 'documents'). Always leave a space between a command and its flag (like 'ls -la')."
  }
];

if (typeof tutorials !== "undefined") {
  tutorials.push(...moreTutorials);
  if (typeof renderTutorials === "function") {
    renderTutorials();
  }
}
