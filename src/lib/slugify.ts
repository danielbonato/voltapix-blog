// Slug seguro pra URL a partir de texto em português. `toLowerCase()` +
// regex `[^a-z0-9]` sozinho corrompe qualquer acento/cedilha (ex: "Finanças"
// virava "finan-as", "Gestão" virava "gest-o") — normaliza primeiro (NFD)
// pra separar a letra da marca diacrítica, depois remove só a marca.
export function slugify(text: string): string {
	return text
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}
