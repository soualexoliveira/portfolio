document.addEventListener('DOMContentLoaded', () => {
    // Adiciona a classe de entrada ao carregar a página
    document.body.classList.add('fade-in');

	const links = document.querySelectorAll('a'); // Selecione os links do site

	links.forEach(link => {
		link.addEventListener('click', function (event) {

			if (this.classList.contains('no-fade')) return; // classe pra evitar a animação em elementos especificos

			event.preventDefault(); // Previne o redirecionamento imediato
			const href = this.href;

			document.body.classList.add('fade-out');

			setTimeout(() => {
				window.location.href = href; // Troca de página após a animação
			}, 300); // Tempo igual ao da transição no CSS
		});
	});
});