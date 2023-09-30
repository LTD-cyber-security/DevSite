var porcent = document.querySelector('.porcent');
var loading = document.querySelector('.loading');
var count = 4;
var load = setInterval(animate, 50);

function animate() {
  if (count == 100) {
    clearInterval(load);
    // Aguarde um curto período de tempo (opcional) para que a animação seja exibida por completo
    setTimeout(function () {
      loading.parentElement.removeChild(loading);
      // Redirecionar para index.html após a animação ser concluída
      window.location.replace("../../src/index.html");
    }, 500); // Tempo em milissegundos (por exemplo, 500ms)
  } else {
    count = count + 1;
    porcent.textContent = count + '%';
  }
}
