// Отключение функционала корзины (если ранее он был реализован)
function disableCartFunctions() {
  console.log('Функционал корзины отключен');
}

// При загрузке страницы удаляем обработчики событий, связанные с корзиной
document.addEventListener('DOMContentLoaded', function() {
  var cartButtons = document.querySelectorAll('.add-to-cart');
  cartButtons.forEach(function(button) {
    button.removeEventListener('click', disableCartFunctions);
  });
});

// Дополнительные JS-скрипты можно разместить здесь
