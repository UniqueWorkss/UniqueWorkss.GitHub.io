document.addEventListener('DOMContentLoaded', function() {
    const tocContainer = document.getElementById('toc-container');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    let tocHTML = '<ul>';
    
    headings.forEach(function(heading) {
      const headingText = heading.textContent;
      const headingLevel = parseInt(heading.tagName.substr(1));
  
      if (headingLevel >= 2 && headingLevel <= 6) {
        const listItem = `<li><a href="#${heading.id}">${headingText}</a></li>`;
        tocHTML += listItem;
      }
    });
    
    tocHTML += '</ul>';
    tocContainer.innerHTML = tocHTML;
  });
  