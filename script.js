// Animações de entrada, menu do celular e sombra do topo
(function(){
  var d=document, root=d.documentElement;
  root.classList.add("js");
  var els=d.querySelectorAll(".revela");
  if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("visivel")});}
  else{
    var io=new IntersectionObserver(function(ents){ents.forEach(function(en){if(en.isIntersecting){en.target.classList.add("visivel");io.unobserve(en.target);}});},{threshold:.12,rootMargin:"0px 0px -40px 0px"});
    els.forEach(function(e){io.observe(e)});
  }
  var topo=d.getElementById("topo"), zap=d.querySelector(".zap");
  function rolar(){var y=window.scrollY;topo.classList.toggle("rolou",y>10);zap.classList.toggle("mostra",y>400);}
  window.addEventListener("scroll",rolar,{passive:true});rolar();
  var b=d.querySelector(".menu-btn"), m=d.getElementById("menu");
  b.addEventListener("click",function(){var a=m.classList.toggle("aberto");b.setAttribute("aria-expanded",a);b.classList.toggle("aberto",a);});
  m.addEventListener("click",function(e){if(e.target.tagName==="A"){m.classList.remove("aberto");b.classList.remove("aberto");b.setAttribute("aria-expanded","false");}});
})();
