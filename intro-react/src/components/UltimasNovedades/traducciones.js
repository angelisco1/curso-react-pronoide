const Traducciones = {
  'es': {
    hola_mundo: 'Hola mundo!'
  },
  'en': {
    hola_mundo: 'Hello world!'
  },
  'fr': {
    hola_mundo: 'Bonjour le monde!'
  }
}

export default function traducir(text, lang='es') {
  return Traducciones[lang] && Traducciones[lang][text] ? Traducciones[lang][text] : 'No tenemos la traducción... Añadela.';
}
