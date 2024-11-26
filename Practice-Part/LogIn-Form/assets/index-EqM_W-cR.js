(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const n of e)
      if (n.type === "childList")
        for (const r of n.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && s(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(e) {
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
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const n = u(e);
    fetch(e.href, n);
  }
})();
const c = document.getElementById("signIn"),
  l = document.getElementById("signUp"),
  d = document.getElementById("resetPass"),
  i = document.getElementById("logForm");
document.addEventListener("DOMContentLoaded", () => {
  const o = () => {
    (c.style.display = "none"), (l.style.display = "none");
  };
  document.querySelector(".signIn").addEventListener("click", (t) => {
    t.preventDefault(),
      o(),
      (c.style.display = "block"),
      (document.querySelector(".signUp").style.background = "#778ca3"),
      (document.querySelector(".signIn").style.background = "none");
  }),
    document.querySelector(".signUp").addEventListener("click", (t) => {
      t.preventDefault(),
        o(),
        (l.style.display = "block"),
        (document.querySelector(".signIn").style.background = "#778ca3"),
        (document.querySelector(".signUp").style.background = "none");
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const o = () => {
    (i.style.display = "none"), (d.style.display = "none");
  };
  document.querySelector(".forgotPass").addEventListener("click", (t) => {
    t.preventDefault(), o(), (d.style.display = "block");
  }),
    document.querySelector(".backHome").addEventListener("click", (t) => {
      t.preventDefault(), o(), (i.style.display = "block");
    });
});
