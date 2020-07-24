const barras = document.querySelectorAll("div.row div.barra");
const letras = document.querySelectorAll("div.text-name");

setTimeout(
  () => barras[0].style.width = "75em", 1000)

setTimeout(
  () => barras[1].style.width = "60em", 2000)

setTimeout(
  () => barras[2].style.width = "45em", 3000)


setTimeout(
  () => letras.forEach(
    e=> { e.style.opacity = "1", 2000}
  )
)



