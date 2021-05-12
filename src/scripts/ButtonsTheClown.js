import { Requests } from "./Requests.js";
import { RequestForm } from "./RequestForm.js";

export const ButtonsTheClown = () => {
  return `
    <h1>Buttons The Clown</h1>

    <div class="topFlex"> 
    <section class="requestForm">
        ${RequestForm()}
    </section>
    </div>
    <section class="requests">
        ${Requests()}
    </section>
    `;
};
