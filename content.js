const observer = new MutationObserver(() => {

  const telemetryTags = document.querySelectorAll("search-telemetry-tracker");

  telemetryTags.forEach(tag => {
    const anchor = tag.querySelector("a");
    if (anchor) {
      const text = anchor.textContent.trim();
      const textNode = document.createTextNode(text);
      tag.replaceWith(textNode);
    }
  });
});

observer.observe(document, { 
    childList: true, subtree: true
});