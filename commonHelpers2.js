import"./assets/styles-14f7ea0f.js";import{i as s}from"./assets/vendor-77e16229.js";const m=document.querySelector(".input-ms"),n=document.querySelector(".state-true"),o=document.querySelector(".form");o.addEventListener("submit",r=>{r.preventDefault();const t=m.value,i=n.checked;new Promise((e,c)=>{setTimeout(()=>{i?e(t):c(t)},t)}).then(e=>{s.success({message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{s.error({message:`❌ Rejected promise in ${e}ms`})}),o.reset()});
//# sourceMappingURL=commonHelpers2.js.map