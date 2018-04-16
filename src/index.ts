/*import { SessionListComponent } from "@components/listerSession";
import { router } from "./router";

export default class Main {
  constructor() {
    alert("Conférence App démarré !");
  }
}

let start = new Main();

window.addEventListener("load", () => {
  window.onhashchange = () => {
    router();
  };

  router();
});
*/

import { SpeakerService } from "./services/speackerService";

const spService = new SpeakerService();

spService.findAll().then(data => console.log(data));
