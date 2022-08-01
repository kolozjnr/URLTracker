let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

const  ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStrorage = JSON.parse(localStorage.getItem("myLeads"))
let tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStrorage){
    myLeads = leadsFromLocalStrorage
    render(myLeads)
}

/*const tabs = [
    {url: "www.artisankonect.com"}
]*/

tabBtn.addEventListener("click", function(){
    //console.log(tabs[0].url)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
   
     });
})

function render(leads){
    let listItems = ""
    for(i=0; i<leads.length; i++){
        listItems += `
        <li>
            <a target'_blank' href='${leads[i]}'>
                ${leads[i]} 
            </a>
        </li>`
     
         //Another alternative for apending element or creating element
        /* const li = document.createElement("li")
         li.textContent = myLeads[i]
         ulEl.append(li)*/
     }
     ulEl.innerHTML = listItems
}
deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


    inputBtn.addEventListener("click", function(){
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        
        //myLeads = JSON.stringify(myLeads)
        render(myLeads)
    //console.log(localStorage.getItem("myLeads"))
})
















//localStorage.clear()
//console.log(localStorage)
/*let contEl = document.getElementById("container")
contEl.innerHTML ="<button id='buy-btn'>Buy</button>"
const buyBtn = document.getElementById("buy-btn")
buyBtn.addEventListener("click", function(){
    contEl.innerHTML += "<p>Thank yhu for buying</p>"

})*/

//Template Strings/literals

/*const recipient = "James"
const sender = "Barnabas"
const email = ` 
Hey ${recipient} 
 
! How is it going its 

cheers ${sender} `

console.log(email)*/

/*myLeads = JSON.parse(myLeads)
myLeads.push("www.google.com")
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)*/


//call the first array item
/* function getFirstCard(arr){
   return arr[1]
}
let firstcard = getFirstCard([10,11,12])

console.log(firstcard)*/
