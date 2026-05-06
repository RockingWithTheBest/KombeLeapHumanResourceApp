// ===== MOBILE MENU TOGGLE =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
      
      // Update ARIA attributes for accessibility
      const expanded = hamburger.classList.contains('active');
      hamburger.setAttribute('aria-expanded', expanded);
    });
    
    // ===== CLOSE MENU WHEN CLICKING LINK (MOBILE) =====
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    });
    
    // ===== DROPDOWN FOR MOBILE (optional enhancement) =====
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.dropdown > a').forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const parent = item.parentElement;
          parent.classList.toggle('active');
        });
      });
    }
    
    // ===== HANDLE WINDOW RESIZE =====
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });