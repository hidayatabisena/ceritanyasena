function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks?.classList.toggle('show');
    
    document.body.style.overflow = navLinks?.classList.contains('show') ? 'hidden' : '';
  });

  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navLinks?.classList.remove('show');
      document.body.style.overflow = '';
    });
  });

  // Add animation delays
  const internalLinks = document.querySelectorAll('.internal-links a');
  const socialLinks = document.querySelectorAll('.social-links a');

  internalLinks.forEach((link, index) => {
    link.style.setProperty('--index', index.toString());
  });

  socialLinks.forEach((link, index) => {
    link.style.setProperty('--index', index.toString());
  });
}

function addAnimationDelays() {
    const internalLinks = document.querySelectorAll('.internal-links a');
    const socialLinks = document.querySelectorAll('.social-links a');

    // Add delay variables to internal links
    internalLinks.forEach((link, index) => {
      link.style.setProperty('--index', index.toString());
    });

    // Add delay variables to social links
    socialLinks.forEach((link, index) => {
      link.style.setProperty('--index', index.toString());
    });
  }

document.addEventListener('astro:page-load', initNav);
initNav(); 