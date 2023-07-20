function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Mike Brito sorrindo, com fundo amarelo")
  } else {
    img.setAttribute("src", "./assets/avatar-foda.JPG")
    img.setAttribute("alt", "Foto de Paulo Cícero e Guilherme no Jardim Botânico de Curitiba/PR")
  }
}