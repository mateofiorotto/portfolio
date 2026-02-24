const form = document.querySelector('form[action*="web3forms"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('#submit-btn');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    });
    const data = await res.json();

    btn.textContent = 'Enviar mensaje';
    btn.disabled = false;

    if (data.success) {
        form.reset();
        showToast('¡Mensaje enviado! Te respondo pronto.', 'success');
    } else {
        showToast('Hubo un error. Intentá de nuevo.', 'error');
    }
});

function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 z-50 flex items-center gap-3 px-8 py-7 rounded-xl shadow-lg text-white text-lg font-medium transition-all duration-300 translate-y-4 opacity-0
        ${type === 'success' ? 'bg-emerald-600' : 'bg-red-600'}`;

    toast.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="ml-2 hover:opacity-70 transition-opacity text-lg leading-none font-semibold hover:cursor-pointer">&times;</button>
    `;

    document.body.appendChild(toast);

    // Animación entrada
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            toast.classList.remove('translate-y-4', 'opacity-0');
        });
    });

    // Auto-cerrar a los 5 segundos
    setTimeout(() => {
        toast.classList.add('translate-y-4', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}