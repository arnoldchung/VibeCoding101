(() => {
 const slides=[...document.querySelectorAll('.slide')],menu=document.querySelector('#slide-menu');
 const prev=document.querySelector('#prev'),next=document.querySelector('#next'),counter=document.querySelector('#counter');
 function readHash(){const n=Number(location.hash.replace('#slide-',''));return Number.isInteger(n)&&n>=1&&n<=slides.length?n-1:0;}
 let current=readHash();
 function show(n){current=Math.max(0,Math.min(slides.length-1,n));slides.forEach((s,i)=>{s.hidden=i!==current;if(i===current)s.scrollTop=0;});menu.value=String(current);prev.disabled=current===0;next.disabled=current===slides.length-1;counter.textContent=`${current+1} / ${slides.length}`;history.replaceState(null,'',`#slide-${current+1}`);}
 async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{document.querySelector('#fullscreen').textContent='브라우저 전체 화면 사용';}}
 prev.addEventListener('click',()=>show(current-1));next.addEventListener('click',()=>show(current+1));menu.addEventListener('change',()=>show(Number(menu.value)));document.querySelector('#fullscreen').addEventListener('click',fullscreen);
 document.addEventListener('keydown',ev=>{if(ev.altKey||ev.ctrlKey||ev.metaKey||/INPUT|TEXTAREA|SELECT/.test(ev.target.tagName)||ev.target.isContentEditable)return;if(ev.key===' '&&/BUTTON|A/.test(ev.target.tagName))return;let n=current;if(['ArrowRight','PageDown',' '].includes(ev.key))n++;else if(['ArrowLeft','PageUp'].includes(ev.key))n--;else if(ev.key==='Home')n=0;else if(ev.key==='End')n=slides.length-1;else if(ev.key.toLowerCase()==='f'){ev.preventDefault();fullscreen();return;}else return;ev.preventDefault();show(n);});
 window.addEventListener('hashchange',()=>show(readHash()));show(current);
})();