// Byte-Builders Additional Projects / Tutorials Library
const additionalTutorials = [
  {
    id: 9,
    category: "Cybersecurity",
    difficulty: "Beginner",
    time: "15 Mins",
    title: "5 Linux Commands Every Beginner Must Know",
    concept: "The Linux terminal is a powerful text interface. Mastering fundamental commands allows you to navigate directories, inspect user identities, list file permissions, and monitor system memory efficiently.",
    diagram: "[Linux Terminal] ──► [Command Input (pwd, whoami, ls, cd, free)] ──► [System Output]",
    items: ["VirtualBox or Linux Live USB", "Terminal Window (Ctrl + Alt + T)"],
    wiring: [
      ["pwd", "Print Working Directory", "Shows current path", "Navigation baseline"],
      ["whoami", "User Identity", "Shows active user", "Security confirmation"],
      ["ls -la", "List All Files", "Shows visible & hidden items", "File inspection"],
      ["cd", "Change Directory", "Moves between folders", "Filesystem traversal"],
      ["free -m", "Memory Check", "Shows RAM usage in MB", "System monitoring"]
    ],
    steps: [
      "Open your Linux terminal using Ctrl + Alt + T.",
      "Type 'pwd' to check your current folder path.",
      "Type 'whoami' to verify your active user profile.",
      "Type 'ls -la' to view all files including hidden ones.",
      "Type 'cd Documents' to change folders or 'cd ..' to go back.",
      "Type 'free -m' to inspect live RAM usage."
    ],
    code: `# 5 Essential Linux Commands\npwd          # Print working directory\nwhoami       # Show current active user\nls -la       # List all files with details\ncd Documents # Navigate into folder\nfree -m      # Show RAM usage in MB`,
    trouble: "Remember that Linux commands are case-sensitive. Type 'clear' or press Ctrl + L if your terminal screen gets cluttered."
  }
];

// Automatically append these new projects to the main tutorials array if it exists
if (typeof tutorials !== 'undefined') {
  tutorials.push(...additionalTutorials);
}
