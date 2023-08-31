function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector('#profile img')

  //substituir a imagem
  if (html.classList.contains('light')){
    // se tive light mode, adicionar a imagem light 
    img.setAttribute('src', './imagens/avatar-light.png')
    img.classList.add('teste')
  } else { 
    // se tive sem light mode, manter a foto normal
    img.setAttribute('src', './imagens/avatar.png')
  }
}