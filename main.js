
function showScene(index) {
  // Hide all scenes
  document.querySelectorAll(".scene-container").forEach(s => s.classList.add("hidden"));

  // Show current scene
  const currentScene = document.getElementById(`scene${index}`);
  if (currentScene) {
    currentScene.classList.remove("hidden");
  }

  // Controls
  const prevBtn = document.getElementById("prevBtn");
  const surpriseBtn = document.getElementById("surpriseBtn");
  const intentionBtn = document.getElementById("intentionBtn");

  // Hide all first
  prevBtn.style.display = "none";
  surpriseBtn.style.display = "none";
  intentionBtn.style.display = "none";

  // Scene-specific rules
  if (index === 1 || index === 2) {
    // Scenes 1 & 2 → Surprise only
    surpriseBtn.style.display = "inline-block";
  } else if (index === 3) {
    // Scene 3 → My Intention only
    intentionBtn.style.display = "inline-block";
  } else if (index >= 4) {
    // Scene 4+ → Preview only
    prevBtn.style.display = "inline-block";
  }
}
