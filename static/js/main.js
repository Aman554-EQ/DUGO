/* =====================================================================
   DUGO project page — behaviour
   1. Video embed: set data-youtube-id on #video-frame in index.html to
      swap the placeholder poster for a real YouTube player.
   2. BibTeX copy button.
   See documentation/modules/video/README.md and modules/bibtex/README.md
   ===================================================================== */

(function () {
  // ---- 1. Video embed ----
  var frame = document.getElementById('video-frame');
  if (frame) {
    var id = (frame.getAttribute('data-youtube-id') || '').trim();
    if (id) {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/' + encodeURIComponent(id);
      iframe.title = 'DUGO video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      frame.innerHTML = '';
      frame.appendChild(iframe);
    }
  }

  // ---- 2. BibTeX copy ----
  var btn = document.getElementById('copy-bibtex-btn');
  var pre = document.getElementById('bibtex-content');
  if (btn && pre) {
    btn.addEventListener('click', function () {
      var label = btn.querySelector('span');
      navigator.clipboard.writeText(pre.textContent.trim()).then(function () {
        btn.classList.add('copied');
        label.textContent = 'Copied!';
        setTimeout(function () {
          btn.classList.remove('copied');
          label.textContent = 'Copy';
        }, 2000);
      });
    });
  }
})();
