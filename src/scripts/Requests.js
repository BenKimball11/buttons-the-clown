import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html =  "<ul>"
         const listItems = requests.map(
                    (request) => {

                 return ` <li>${request.parentName}</li>`
                    
            })
            html += listItems.join("")
            html += "</ul>"
    return html
}

//const mainContainer = document.querySelector("#container")

document.addEventListener("click", clickEvent => {
    
}) 