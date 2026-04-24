function copyCode(id, btn) {
  const text = document.getElementById(id).innerText;

  navigator.clipboard.writeText(text).then(() => {
    if (!btn) return;
    const original = btn.innerText;
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = original, 1500);
  }).catch(err => {
    console.error("Copy failed:", err);
  });
}