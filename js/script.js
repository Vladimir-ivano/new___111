document.addEventListener('DOMContentLoaded', function(){
  let laptops = document.querySelectorAll('.laptop');
  
  for (l = 0; l < laptops.length; l++) {
   let laptop = laptops[l],
       images = laptop.querySelectorAll('.laptop__img'),
       placeTabs = laptop.querySelector('.laptop__tabs'),
       active = 'is-active';
   
   const changeActiveClass = function(n, elemets) {
    for (e = 0; e < elemets.length; e++) {
     let elemet = elemets[e];
     elemet.classList.remove(active);
     
     if (n == e) {
      elemet.classList.add(active);
     };
    };
   };
   
   for (i = 0; i < images.length; i++) {
    let img = images[i],
        elTab = document.createElement('li');
    elTab.classList.add('laptop__tab');
    
    if (i == 0) { img.classList.add(active); };
    placeTabs.append(elTab);   
   };
   
   let tabs = laptop.querySelectorAll('.laptop__tab');
   
   for (t = 0; t < tabs.length; t++) {
    let tab = tabs[t],
        number = t;
    
    if (t == 0) { tab.classList.add(active); };
    
    tab.addEventListener('click', function(){
     changeActiveClass(number,tabs);
     changeActiveClass(number,images);
    });
   };
  };
 });