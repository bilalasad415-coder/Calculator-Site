// Centralized ad loader — edit this ONE file to change ads sitewide.
// To change the ad network/code in the future, just update ADSTERRA_KEY or the invoke script URL below.

(function(){
  var ADSTERRA_KEY = 'df18a40bc41385d8eb1020b93064ccdf';
  var ADSTERRA_SRC = 'https://annoyingnightmareedit.com/' + ADSTERRA_KEY + '/invoke.js';

  var wrapper = document.createElement('div');
  wrapper.style.margin = '28px auto 0';
  wrapper.style.maxWidth = '460px';
  wrapper.style.textAlign = 'center';

  var container = document.createElement('div');
  container.id = 'container-' + ADSTERRA_KEY;
  wrapper.appendChild(container);

  // Insert the ad wrapper right before the footer if present, else at end of body
  var footer = document.querySelector('footer');
  if (footer && footer.parentNode) {
    footer.parentNode.insertBefore(wrapper, footer);
  } else {
    document.body.appendChild(wrapper);
  }

  var script = document.createElement('script');
  script.async = true;
  script.setAttribute('data-cfasync', 'false');
  script.src = ADSTERRA_SRC;
  document.body.appendChild(script);
})();
// pehla ad block (already maujood hai) — isko chhedna nahi

// ===== naya ad block (yeh neeche add karein) =====
(function(){
  var KEY_2 = 'e2c80ed3d16063a28e702e541785ffbf';
  var SRC_2 = 'https://annoyingnightmareedit.com/' + KEY_2 + '/invoke.js';

  var wrapper2 = document.createElement('div');
  wrapper2.style.margin = '20px auto';
  wrapper2.style.maxWidth = '460px';
  wrapper2.style.textAlign = 'center';

  var container2 = document.createElement('div');
  container2.id = 'container-' + KEY_2;
  wrapper2.appendChild(container2);

  // Kahan lagana hai: 'body' ke shuru mein (top) ya 'footer' se pehle (bottom)
  var footer = document.querySelector('footer');
  if (footer && footer.parentNode) {
    footer.parentNode.insertBefore(wrapper2, footer);
  } else {
    document.body.appendChild(wrapper2);
  }

  var script2 = document.createElement('script');
  script2.async = true;
  script2.setAttribute('data-cfasync', 'false');
  script2.src = SRC_2;
  document.body.appendChild(script2);
})();
