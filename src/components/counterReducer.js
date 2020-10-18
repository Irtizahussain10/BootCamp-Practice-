import { createReducer } from "@reduxjs/toolkit";
import { IncrementAction, DecrementAction } from "./actions.js";

const counterReducer = createReducer(0, {
    [IncrementAction]: (state) => state + 1,
    [DecrementAction]: (state) => state - 1,
});

export default counterReducer;
