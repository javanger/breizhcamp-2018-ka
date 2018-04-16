
import * as speakersService from "@services/speackerService";

export const router = () => {
    if (location.hash === "#speakers-list") {
        // afficher vue liste des présentateurs
        
    } else if (location.hash === '#sessions-list') {
        // TODO afficher vue liste des sessions
    } else {
        // TODO afficher vue par défaut
    }
}

