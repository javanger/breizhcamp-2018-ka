import { SessionListComponent } from "@components/listerSession";

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
