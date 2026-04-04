async function loadPartial(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  el.innerHTML = await res.text();
}

loadPartial("header-placeholder", "/header.html");
loadPartial("footer-placeholder", "/footer.html");