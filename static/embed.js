document.addEventListener("DOMContentLoaded", () => {
  const link = new URLSearchParams(window.location.search).get('p');
  if (link) {
    window.location.href = `/static/load/${__uv$config.encodeUrl(link)}`;
  }
});
