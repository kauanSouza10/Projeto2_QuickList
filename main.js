const items = []

function addItem() {
    const itremName = document.querySelector("#item").value

    const item = {
      name: itremName,
      checked: false  
    }

    items.push(item)

    document.querySelector("#item").value ""

    console.log(items)
}