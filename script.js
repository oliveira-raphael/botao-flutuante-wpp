var whatsappBotao = document.getElementById('whatsapp-botao');
var formulario = document.getElementById('formulario');
var botao = document.getElementById('botao');
var fecharBotao = document.getElementById('fechar-botao');

whatsappBotao.addEventListener('click', function() {
   formulario.style.display = 'block';
});

fecharBotao.addEventListener('click', function() {
   formulario.style.display = 'none';
});

  botao.addEventListener('click', function(event) {
    event.preventDefault();
      
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

 if (name && phone) {
    var whatsappUrl = 'https://wa.me/5511987654321?text=' + encodeURIComponent('Olá, meu nome é ' + name + ', gostaria de informações sobre os produtos.');
    window.location.href = whatsappUrl;
  }
});