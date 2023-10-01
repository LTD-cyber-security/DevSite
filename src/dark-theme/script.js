const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

const checkbox = document.getElementById('dark-mode-toggle');
const label = document.querySelector('.label');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    label.classList.add('rotate');
  } else {
    label.classList.remove('rotate');
  }
});
