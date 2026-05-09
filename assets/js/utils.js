document.addEventListener("DOMContentLoaded", function () {
  const siteNav = document.querySelector(".site-nav");
  const navToggle = siteNav ? siteNav.querySelector(".nav-toggle") : null;
  const navMenu = siteNav ? siteNav.querySelector(".site-nav-collapse") : null;

  if (siteNav && navToggle && navMenu) {
    const setNavExpanded = (expanded) => {
      siteNav.classList.toggle("is-open", expanded);
      navToggle.setAttribute("aria-expanded", String(expanded));
    };

    navToggle.addEventListener("click", () => {
      setNavExpanded(navToggle.getAttribute("aria-expanded") !== "true");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => setNavExpanded(false));
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        setNavExpanded(false);
      }
    });
  }

  // 外部リンク / PDF を _blank に
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const isExternal = href.startsWith("http") && !href.includes(location.hostname);
    const isPDF = href.toLowerCase().endsWith(".pdf");
    if (isExternal || isPDF) {
      link.setAttribute("target", "_blank");
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
