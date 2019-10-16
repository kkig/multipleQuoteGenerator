.createElement(‘li’) = create DOM element
.prepend() = add child at the beginning
.append() = add element at the end


document.body.append(newP)
newP.textContent = "V School rocks!" 
newP.style.fontSize = "30px"
 document.body.append(newP)

innerHTML = security Issue, tend to slow


// innerHTML vs textContent
console.log(myList.textContent) = 0 1 2
console.log(myList.innerHTML) = <li>0</li> <li>1</li> <li>2</li>

myList.innerHTML += "<li>3</li>"


document.body.innerHTML += "<p id='paragraph'>V School rocks!</p>"
document.getElementById("paragraph").style.textAlign = "center"


// .append() vs .appendChild()

    // You can
    var p = document.createElement("p");
    document.getElementById("yourId").appendChild(p);

    // You can't
    document.getElementById("yourId").appendChild("<p></p>");

    /*
    ParentNode.append() allows you to also append DOMString object, whereas Node.appendChild() only accepts Node objects.
    */


/* Loop & create DOM element */
var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston"
]

var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i]
    rangersList.append(newName)
}

for (var i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
}



// Add Event listener
document.getElementById("header").addEventListener("dblclick", function() {
    document.body.style.backgroundColor = "firebrick"
})

// Remove event listener
document.getElementById("header").removeEventListener("dblclick", function() {
    document.body.style.backgroundColor = "firebrick"
})