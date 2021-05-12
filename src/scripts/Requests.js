import { deleteRequest, getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html =  "<ul>"
         const listItems = requests.map(
                    (request) => {

                 return ` <li>${request.parentName}
                 <button class="request__delete" id="request--${request.id}"> Delete </button>
                 </li>`
                    
            })
            html += listItems.join("")
            html += "</ul>"
    return html
}

//const mainContainer = document.querySelector("#container")

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("request--")){
        const [, requestId] = clickEvent.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
}) 