const btn = document.getElementById("theme-toggle");
function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  btn.textContent = dark ? "light mode" : "dark mode";
  try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved === "dark");
btn.addEventListener("click", () => setTheme(!document.body.classList.contains("dark")));
