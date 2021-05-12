import { sendRequest } from "./dataAccess.js"

//const mainContainer = document.querySelector("#container")

document.addEventListener( "click", clickEvent => {
    if(clickEvent.target.id === "submitRequest") {
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userChildCount = document.querySelector("input[name='childCount']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userHoursReserved = document.querySelector("input[name='hoursReserved']").value
        const userDateReserved = document.querySelector("input[name='reservedDate']").value

        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            childCount: userChildCount,
            address: userAddress,
            hoursReserved: userHoursReserved,
            dateReserved: userDateReserved,
        }
        sendRequest(dataToSendToAPI)
    }
})

export const RequestForm = () => {
  let html = `
<div class="field">
    <label class="label" for="parentName">Parent Name</label>
    <input type="text" name="parentName" class="input" />
</div>
<div class="field">
    <label class="label" for="childName">Child Name</label>
    <input type="text" name="childName" class="input" />
</div>
<div class="field">
    <label class="label" for="childCount">Amount of Children Attending</label>
    <input type="number" name="childCount" class="input" />
</div>
<div class="field">
    <label class="label" for="address">Address</label>
    <input type="text" name="address" class="input" />
</div>
<div class="field">
    <label class="label" for="reservedDate">Date needed</label>
    <input type="date" name="reservedDate" class="input" />
</div>
<div class="field">
    <label class="label" for="hoursReserved">Hours needed</label>
    <input type="number" name="hoursReserved" class="input" />
</div>
<button class="button" id="submitRequest">Submit Request</button>
`;

  return html;
};
