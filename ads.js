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
