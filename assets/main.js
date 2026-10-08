// Alt bilgideki yılı güncel tutar.
document.getElementById("year").textContent = new Date().getFullYear();

// Açık/koyu tema geçişi; tercih bu tarayıcıda hatırlanır.
const root = document.documentElement;
const themeMeta = document.querySelector('meta[name="theme-color"]');

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  themeMeta.content = next === "light" ? "#ffffff" : "#16181c";
  try { localStorage.setItem("theme", next); } catch (e) {}
});
