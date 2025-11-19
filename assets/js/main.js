
console.log('MeloTech site ready');
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const endpoint = form.dataset.endpoint || '';
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.disabled = true; btn.textContent = 'Enviando...';
    try {
      if (!endpoint) throw new Error('Endpoint não configurado');
      const res = await fetch(endpoint, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)});
      if (!res.ok) throw new Error('Falha no envio');
      form.reset();
      alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    } catch(err){
      console.error(err);
      alert('Não foi possível enviar agora. Fale no WhatsApp: wa.me/5584981592515');
    } finally {
      btn.disabled = false; btn.textContent = original;
    }
  });
}
