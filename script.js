// ===================== UTILITIES =====================
function stopAllVideos() {
  document.querySelectorAll('.modal iframe').forEach(iframe => {
    iframe.src = '';
  });
}

function updateView(targetId, newSrc) {
  const imgElement = document.getElementById(targetId);
  if (imgElement && imgElement.tagName === 'IMG') {
    imgElement.src = newSrc;
    imgElement.style.display = 'block';
  }
}

function resetToImage(modalId) {
  const modal = document.getElementById('modal-' + modalId);
  if (!modal) return;
  if (modalId === 'turnapp') {
    const firstThumb = modal.querySelector('.thumb-strip img');
    if (firstThumb) {
      updateView('view-turnapp', firstThumb.src);
    }
  }
  // Conversa ya no usa imágenes, por eso no se incluye aquí
}

// Video para GMod
function showGModVideo() {
  const container = document.getElementById('view-gmodmods');
  if (!container) return;
  const img = container.querySelector('img');
  const iframe = container.querySelector('iframe');
  if (img) img.style.display = 'none';
  if (iframe) {
    iframe.src = '';
    iframe.style.display = 'block';
    requestAnimationFrame(() => {
      iframe.src = 'https://www.youtube.com/embed/EiOWx9pB5pc?autoplay=1&rel=0&mute=1';
    });
  }
}

// Video para Conversa (nuevo)
function showConversaVideo() {
  const container = document.getElementById('view-conversa');
  if (!container) return;
  const img = container.querySelector('img');
  const iframe = container.querySelector('iframe');
  if (img) img.style.display = 'none';
  if (iframe) {
    iframe.src = '';
    iframe.style.display = 'block';
    requestAnimationFrame(() => {
      // URL del video que proporcionaste: https://youtu.be/n-ti7fYFBv8
      iframe.src = 'https://www.youtube.com/embed/n-ti7fYFBv8?autoplay=1&rel=0&mute=1';
    });
  }
}

// ===================== ABRIR MODAL =====================
function openModal(id) {
  stopAllVideos();

  const modal = document.getElementById('modal-' + id);
  if (!modal) return;

  modal.style.display = 'block';
  modal.scrollTop = 0;
  setTimeout(() => modal.classList.add('show'), 10);

  // Carrusel (opcional)
  const slider = modal.querySelector('.tech-slider');
  const track = modal.querySelector('.tech-track');
  if (slider && track) {
    const imgs = track.querySelectorAll('img');
    const uniqueCount = imgs.length / 2;
    const sliderWidth = slider.offsetWidth;
    const iconSize = 40;
    const margin = Math.floor((sliderWidth - iconSize * uniqueCount) / (uniqueCount * 2));
    imgs.forEach(img => { img.style.margin = `0 ${margin}px`; });
  }

  // Mostrar contenido según el modal
  if (id === 'gmod-mods') {
    setTimeout(showGModVideo, 100);
  } else if (id === 'conversa') {
    setTimeout(showConversaVideo, 100);
  } else if (id === 'turnapp') {
    resetToImage(id);
  }
}

// ===================== CERRAR MODAL =====================
function closeModal(id) {
  // Detener video si es GMod o Conversa
  if (id === 'gmod-mods') {
    const iframe = document.querySelector('#view-gmodmods iframe');
    if (iframe) iframe.src = '';
  } else if (id === 'conversa') {
    const iframe = document.querySelector('#view-conversa iframe');
    if (iframe) iframe.src = '';
  }

  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
}

// Cerrar al hacer clic fuera
window.onclick = function (event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      const id = modal.id.replace('modal-', '');
      closeModal(id);
    }
  });
}
