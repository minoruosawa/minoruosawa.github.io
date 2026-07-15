document.addEventListener("DOMContentLoaded", function () {
  // 外部リンク / PDF を _blank に
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const isExternal = href.startsWith("http") && !href.includes(location.hostname);
    const isPDF = href.toLowerCase().endsWith(".pdf");
    if (isExternal || isPDF) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer"); 
    }
  });

  document.querySelectorAll("details.inline-abstract").forEach(detail => {
    const body = detail.querySelector(".abstract-body");
    if (body) {
      body.addEventListener("click", () => {
        detail.removeAttribute("open");
      });
    }
  });
});
