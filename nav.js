// nav.js — shared navbar for el-g0m3z.github.io
// Include this on every page with: <script src="/nav.js"></script>
// (or use a relative path like ../../nav.js from subfolders)
// The script injects the navbar before the first <hr> or at the top of <body>.

(function () {
  var navHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">el g0m3z</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar"
    aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="mainNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link" href="/index.html">Home is where you make it</a></li>
      <li class="nav-item"><a class="nav-link" href="/paintings/painting.html">Paintings</a></li>
      <li class="nav-item"><a class="nav-link" href="/music.html">Music</a></li>
      <li class="nav-item"><a class="nav-link" href="/philosophy/philosophy.html">Philosophy</a></li>
      <li class="nav-item"><a class="nav-link" href="/books.html">Books</a></li>
      <li class="nav-item"><a class="nav-link" href="/revolucion.html">Revolucion</a></li>
      <li class="nav-item"><a class="nav-link" href="/shop.html">Shop</a></li>
      <li class="nav-item"><a class="nav-link" href="/contact.html">Contact</a></li>
    </ul>
  </div>
</nav>
<hr style="width: 100%; border-top: 5px solid #00ab44; margin: 0;">
`;

  // Highlight the current page's nav link
  document.addEventListener('DOMContentLoaded', function () {
    var navEl = document.getElementById('site-nav');
    if (navEl) {
      navEl.innerHTML = navHTML;
      var links = navEl.querySelectorAll('.nav-link');
      links.forEach(function (link) {
        var linkPath = new URL(link.href, location.href).pathname;
        if (linkPath === location.pathname ||
          (location.pathname === '/' && linkPath === '/index.html')) {
          link.parentElement.classList.add('active');
          link.setAttribute('aria-current', 'page');
        }
      });
    }
  });
})();
