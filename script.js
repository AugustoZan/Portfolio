function openModal(id) {
  const modal = document.getElementById('modal-' + id);
  modal.style.display = 'block';
  modal.scrollTop = 0; // ← resetea el scroll al abrir
  setTimeout(() => modal.classList.add('show'), 10);

  // Carrusel
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

  // Imagen por defecto = primera miniatura
  const firstThumb = modal.querySelector('.thumb-strip img');
  const mainViewer = modal.querySelector('.main-viewer img');
  if (firstThumb && mainViewer) {
    mainViewer.src = firstThumb.src;
  }
}

function closeModal(id) {
  const modal = document.getElementById('modal-' + id);
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
}

window.onclick = function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      const id = modal.id.replace('modal-', '');
      closeModal(id);
    }
  });
}

function updateView(targetId, newSrc) {
  document.getElementById(targetId).src = newSrc;
}