namespace Modelo {
	export function CrearPerro() {
		let perro: Modelo.Perro = new Perro('Pepe', 45, 'largo');
		let gato: Modelo.Gato = new Gato('Gato Pepe', 45, 'largo');

		let lista: Array<Animal> = new Array<Animal>();
		lista.push(perro);
		lista.push(gato);
		lista.push(perro);

		lista.forEach(element => {
			element.HacerRuido();
		});
		$('#coso').val('451');

		let number: number = Number((<HTMLInputElement>document.getElementById('coso')).value);
		alert(number);
	}
}
