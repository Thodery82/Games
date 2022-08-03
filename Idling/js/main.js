var money = new Decimal(0)
var mps = new Decimal(0)

document.getElementById("click").onclick = () => {
  money = money.add(1)
}

function UpdateGameArea() {
  document.getElementById("money").innerText = money
  document.getElementById("resource").innerText = 'Money'
}

setInterval(UpdateGameArea, 200)
