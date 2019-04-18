var btnpop = document.getElementById('btnpop');
var bckpop = document.getElementById('bckpop');
var clospop = document.getElementById('clospop');


 btnpop.addEventListener('click',openModal);
 clospop.addEventListener('click',clospopup);



  function openModal(){
      bckpop.style.display ='block';
  }
  function clospopup(){
    bckpop.style.display ='none';
}