// ===== Scroll Reveal com atributo [data-anima] =====
const elements = document.querySelectorAll('[data-anima]');

function animateOnScroll() {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;
  elements.forEach(el => {
    if (windowTop > el.offsetTop) {
      el.classList.add('ativo'); // Ativa a animação
    } else {
      el.classList.remove('ativo'); // Remove a animação ao voltar
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Executa uma vez ao carregar a página

// ===== Fecha o menu ao clicar em um link (modo mobile) =====
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    
    if (menu && hamburger) {
      menu.classList.remove('ativo');
      hamburger.classList.remove('ativo');
    }
  });
});

// ===== Alternância do botão hambúrguer (abrir/fechar menu) =====
const hamburgerBtn = document.getElementById('hamburger');
const menu = document.getElementById('menu');

if (hamburgerBtn && menu) {
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('ativo');
    menu.classList.toggle('ativo');
  });
}

// ===== Animação de entrada nos cards da seção Serviços com GSAP =====
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from(".servico-card", {
    scrollTrigger: {},
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3 // intervalo entre animações dos cards
  });
}

// ===== Botão flutuante do WhatsApp com efeito de scroll e animação =====
document.addEventListener('DOMContentLoaded', () => {
  const whatsappButton = document.querySelector('.whatsapp-float');
  
  if (!whatsappButton) return;
  
  let lastScrollTop = 0;
  
  // Exibe o botão após 3 segundos do carregamento da página
  setTimeout(() => {
    whatsappButton.classList.add('show');
  }, 3000);
  
  // Mostra ou esconde o botão conforme o scroll
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
      // Rolando para baixo — mostra o botão e ativa o shake
      whatsappButton.classList.add('show');
      
      if (!whatsappButton.classList.contains('shaking')) {
        whatsappButton.classList.add('shaking', 'shake');
        
        whatsappButton.addEventListener('animationend', () => {
          whatsappButton.classList.remove('shake');
        }, { once: true });
      }
    } else {
      // Rolando para cima — esconde o botão
      whatsappButton.classList.remove('show');
    }
    
    lastScrollTop = Math.max(0, currentScroll); // Evita valores negativos
  });
});

// ===== Botão flutuante do Instagram com efeito de scroll e animação =====
document.addEventListener('DOMContentLoaded', () => {
  const instagramButton = document.querySelector('.instagram-float');
  
  if (!instagramButton) return;
  
  let lastScrollTop = 0;
  
  setTimeout(() => {
    instagramButton.classList.add('show');
  }, 3000);
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
      instagramButton.classList.add('show');
      
      if (!instagramButton.classList.contains('shaking')) {
        instagramButton.classList.add('shaking', 'shake');
        
        instagramButton.addEventListener('animationend', () => {
          instagramButton.classList.remove('shake');
        }, { once: true });
      }
    } else {
      instagramButton.classList.remove('show');
    }
    
    lastScrollTop = Math.max(0, currentScroll);
  });
});

// ===== Pré-carregamento da imagem de fundo da seção Hero =====
const heroSection = document.querySelector('.hero');

if (heroSection) {
  const preloadImg = new Image();
  preloadImg.src = 'assets/imagens/hero.webp';
  
  preloadImg.onload = () => {
    heroSection.style.backgroundImage = `url(${preloadImg.src})`;
  };
  
  preloadImg.onerror = () => {
    // Fallback caso a imagem WebP não carregue
    heroSection.style.backgroundImage = `url('assets/imagens/hero-fallback.jpg')`;
  };
}