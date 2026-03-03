function openModal(id) {
  const modal = document.getElementById('modal-' + id);
  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('show'), 10);
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
