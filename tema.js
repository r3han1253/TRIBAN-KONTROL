// Kayıtlı tema tercihini sayfa çizilmeden uygula
try {
  const t = localStorage.getItem("tema");
  if (t === "dark" || t === "light") document.documentElement.dataset.theme = t;
} catch (e) {}
