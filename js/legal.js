/* ==========================================================================
   CNG Company - Pages légales
   ========================================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const dateEl = document.getElementById("legalDate");
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString("fr-FR", options);
  }
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = now.getFullYear();
  }
});
