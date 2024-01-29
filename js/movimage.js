document.addEventListener('DOMContentLoaded', function () {
  var imageContainer = document.getElementById('imageContainer');
  var image = imageContainer.querySelector('img');

  var smoothness = 60;
  var maxY = 400; // Ajuste este valor para definir a posição máxima no eixo Y

  document.addEventListener('mousemove', function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var newX = (mouseX - window.innerWidth / 3) / smoothness;
    var newY = (mouseY - window.innerHeight / 3) / smoothness;

    // Limita a posição no eixo Y
    newY = Math.min(newY, maxY);

    imageContainer.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
  });
});