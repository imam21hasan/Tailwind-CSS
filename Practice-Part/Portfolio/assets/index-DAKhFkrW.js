(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
  new MutationObserver((e) => {
    for (const n of e)
      if (n.type === "childList")
        for (const c of n.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && t(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const n = {};
    return (
      e.integrity && (n.integrity = e.integrity),
      e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const n = i(e);
    fetch(e.href, n);
  }
})();
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) i(t);
  new MutationObserver((t) => {
    for (const e of t)
      if (e.type === "childList")
        for (const n of e.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && i(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(t) {
    const e = {};
    return (
      t.integrity && (e.integrity = t.integrity),
      t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (e.credentials = "include")
        : t.crossOrigin === "anonymous"
        ? (e.credentials = "omit")
        : (e.credentials = "same-origin"),
      e
    );
  }
  function i(t) {
    if (t.ep) return;
    t.ep = !0;
    const e = r(t);
    fetch(t.href, e);
  }
})();
const a = document.getElementById("menu-icon"),
  f = document.getElementById("menu-bar");
a.addEventListener("click", () => {
  f.classList.toggle("hidden");
});
const l = document.getElementById("container-home"),
  s = document.getElementById("container-about"),
  d = document.getElementById("container-skills"),
  u = document.getElementById("container-contact");
document.addEventListener("DOMContentLoaded", () => {
  const o = () => {
    (l.style.display = "none"),
      (s.style.display = "none"),
      (d.style.display = "none"),
      (u.style.display = "none");
  };
  document.querySelector(".home").addEventListener("click", (r) => {
    r.preventDefault(), o(), (l.style.display = "block");
  }),
    document.querySelector(".about").addEventListener("click", (r) => {
      r.preventDefault(), o(), (s.style.display = "block");
    }),
    document.querySelector(".skill").addEventListener("click", (r) => {
      r.preventDefault(), o(), (d.style.display = "flex");
    }),
    document.querySelector(".contact").addEventListener("click", (r) => {
      r.preventDefault(), o(), (u.style.display = "flex");
    });
});
