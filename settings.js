const teacherName = document.getElementById("teacherName");
const schoolName = document.getElementById("schoolName");
const subjectName = document.getElementById("subjectName");
const gradeName = document.getElementById("gradeName");
const themeSelect = document.getElementById("themeSelect");
const fontSelect = document.getElementById("fontSelect");
const aiModel = document.getElementById("aiModel");
const apiKey = document.getElementById("apiKey");
const darkModeToggle = document.getElementById("darkModeToggle");
const autoSaveToggle = document.getElementById("autoSaveToggle");

const saveSettings = document.getElementById("saveSettings");
const resetSettings = document.getElementById("resetSettings");

const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");

let currentFontSize = Number(localStorage.getItem("appFontSize")) || 100;

function applyFontSize() {
  document.body.style.fontSize = `${currentFontSize}%`;
}

function applyDarkMode(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
}

function loadSettings() {
  teacherName.value = localStorage.getItem("teacherName") || "";
  schoolName.value = localStorage.getItem("schoolName") || "";
  subjectName.value = localStorage.getItem("subjectName") || "";
  gradeName.value = localStorage.getItem("gradeName") || "";

  themeSelect.value = localStorage.getItem("themeSelect") || "purple";
  fontSelect.value = localStorage.getItem("fontSelect") || "Tahoma";
  aiModel.value = localStorage.getItem("aiModel") || "Gemini 3.5 Flash";
  apiKey.value = localStorage.getItem("apiKey") || "";

  darkModeToggle.checked = localStorage.getItem("darkMode") === "true";
  autoSaveToggle.checked = localStorage.getItem("autoSave") !== "false";

  document.body.style.fontFamily = `${fontSelect.value}, Arial, sans-serif`;
  applyDarkMode(darkModeToggle.checked);
  applyFontSize();
}

function saveAllSettings() {
  localStorage.setItem("teacherName", teacherName.value);
  localStorage.setItem("schoolName", schoolName.value);
  localStorage.setItem("subjectName", subjectName.value);
  localStorage.setItem("gradeName", gradeName.value);

  localStorage.setItem("themeSelect", themeSelect.value);
  localStorage.setItem("fontSelect", fontSelect.value);
  localStorage.setItem("aiModel", aiModel.value);
  localStorage.setItem("apiKey", apiKey.value);

  localStorage.setItem("darkMode", darkModeToggle.checked);
  localStorage.setItem("autoSave", autoSaveToggle.checked);
  localStorage.setItem("appFontSize", currentFontSize);

  alert("تم حفظ الإعدادات بنجاح ✅");
}

saveSettings.addEventListener("click", saveAllSettings);

resetSettings.addEventListener("click", () => {
  const confirmReset = confirm("هل تريد استعادة الإعدادات الافتراضية؟");

  if (!confirmReset) return;

  localStorage.removeItem("teacherName");
  localStorage.removeItem("schoolName");
  localStorage.removeItem("subjectName");
  localStorage.removeItem("gradeName");
  localStorage.removeItem("themeSelect");
  localStorage.removeItem("fontSelect");
  localStorage.removeItem("aiModel");
  localStorage.removeItem("apiKey");
  localStorage.removeItem("darkMode");
  localStorage.removeItem("autoSave");
  localStorage.removeItem("appFontSize");

  currentFontSize = 100;
  loadSettings();

  alert("تمت استعادة الإعداد
