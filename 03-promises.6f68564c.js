!function(){var e=document.querySelector(".form");document.querySelector('[name="delay"]'),document.querySelector('[name="step"]'),document.querySelector('[name="amount"]');e.addEventListener("submit",(function(n){n.preventDefault();for(var t=n.target.elements,o=t.delay,c=t.step,a=t.amount,r=1;r<=a.value;r+=1)+c.value,o.value,new Promise((function(e,n){Math.random()>.3?e((function(e){return e})):n((function(e){return e}))})).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}));e.reset()}))}();
//# sourceMappingURL=03-promises.6f68564c.js.map
