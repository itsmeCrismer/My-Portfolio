 // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Dark mode toggle
    const darkToggle = document.getElementById('darkToggle');
    const darkToggleMobile = document.getElementById('darkToggleMobile');
    [darkToggle, darkToggleMobile].forEach(btn => {
      btn?.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
      });
    });
    // Auto update year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Typed text effect
    const typedText = ["a Frontend Developer", "a Full-Stack Engineer", "a UI/UX Enthusiast"];
    let typedIndex = 0, charIndex = 0;
    const typedEl = document.getElementById("typed");
    function typeEffect() {
      if (charIndex < typedText[typedIndex].length) {
        typedEl.textContent += typedText[typedIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        setTimeout(() => {
          typedEl.textContent = "";
          charIndex = 0;
          typedIndex = (typedIndex + 1) % typedText.length;
          typeEffect();
        }, 2000);
      }
    }
    typeEffect();

    // Scroll reveal animation
    function reveal() {
      document.querySelectorAll(".reveal").forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
          el.classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", reveal);
    reveal();

    // Animate skill bars
    function animateBars() {
      document.querySelectorAll(".progress-bar").forEach(bar => {
        if (bar.style.width === "0%") {
          if (bar.classList.contains("bg-blue-500")) bar.style.width = "90%"; // HTML & CSS
          if (bar.classList.contains("bg-yellow-400")) bar.style.width = "80%"; // JavaScript
          if (bar.classList.contains("bg-accent")) bar.style.width = "85%"; // Tailwind
          if (bar.classList.contains("bg-purple-500")) bar.style.width = "70%"; // Bootstrap
          if (bar.classList.contains("bg-orange-500")) bar.style.width = "85%"; // Figma
        }
      });
    }
    // Reveal on scroll
    function revealOnScroll() {
      document.querySelectorAll('.reveal').forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('active');
          // Animate progress bars
          section.querySelectorAll('.progress-bar').forEach(bar => {
            bar.style.width = bar.dataset.width;
          });
        }
      });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    window.addEventListener("scroll", animateBars);

    // Show current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Tailwind config (extend colors & font sizes + dark mode)
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#0ea5a4',
            accent: '#7c3aed'
          }
        }
      }
    }