document.addEventListener('DOMContentLoaded', function(){
  let images = document.querySelectorAll('.laptop__img'), // Все картинки в ноутбуке
      placeTabs = document.querySelector('.laptop__tabs'), // Место для кнопок переключения картинок
      active = 'is-active'; // Класс показывающий активную картинку и кнопку переключения
  
  // Функция переключения активного класс между элементами
  const changeActiveClass = function(n, items) {
   for (i = 0; i < items.length; i++) {
     let item = items[i];
     item.classList.remove(active);
     
     if (n == i) {
      item.classList.add(active);
     };
    };
  };
 
  // Создание кнопок переключения в зависимости от количества картинок
  for (a = 0; a < images.length; a++) {
   let el = document.createElement('li');
   el.classList.add('laptop__tab');
   placeTabs.append(el);
  };
  
  let tabs = document.querySelectorAll('.laptop__tab'); // Все кнопки переключения
  
  // Функционал переключения картнок в зависимости какая кнопка нажата
  for (t = 0; t < tabs.length; t++) {
   let tab = tabs[t],
       number = t;
   
   // Добавление класса активации, первой кнопке и первой картинке
   // Чтобы самому НЕ СТАВИТЬ эти классы
   tabs[0].classList.add(active);
   images[0].classList.add(active);
   
   // Процесс, по нажатию на кнопку переключения происходит вызов функции переключения активного класса, как для самих кнопок, так и для картинок
   tab.addEventListener('click', function(){
    changeActiveClass(number,tabs);
    changeActiveClass(number,images);
   });
  };
 });