import { configureStore } from "@reduxjs/toolkit";

// Features
import modalSlice from "./features/modalSlice";
import moduleSlice from "./features/moduleSlice";
import arrayStoreSlice from "./features/arrayStoreSlice";
import objectStoreSlice from "./features/objectStoreSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    module: moduleSlice,
    arrayStore: arrayStoreSlice,
    objectStore: objectStoreSlice,
  },
});
