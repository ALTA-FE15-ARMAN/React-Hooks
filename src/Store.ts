import {configureStore} from "@reduxjs/toolkit"

import modeSlice from "./features/modeSlice";

const store = configureStore ({
    reducer : {
        mode : modeSlice
    }

})

export default store;