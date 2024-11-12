// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     teachersList: [],
//     teacherDetails: [],
//     loading: false,
//     error: null,
//     response: null,
// };

// const teacherSlice = createSlice({
//     name: 'teacher',
//     initialState,
//     reducers: {
//         getRequest: (state) => {
//             state.loading = true;
//         },
//         doneSuccess: (state, action) => {
//             state.teacherDetails = action.payload;
//             state.loading = false;
//             state.error = null;
//             state.response = null;
//         },
//         getSuccess: (state, action) => {
//             state.teachersList = action.payload;
//             state.loading = false;
//             state.error = null;
//             state.response = null;
//         },
//         getFailed: (state, action) => {
//             state.response = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         getError: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         postDone: (state) => {
//             state.loading = false;
//             state.error = null;
//             state.response = null;
//         }
//     },
// });

// export const {
//     getRequest,
//     getSuccess,
//     getFailed,
//     getError,
//     doneSuccess,
//     postDone
// } = teacherSlice.actions;

// export const teacherReducer = teacherSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teachersList: [],
    teacherDetails: [],
    loading: false,
    error: null,
    response: null,
};

const teacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },
        doneSuccess: (state, action) => {
            state.teacherDetails = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getSuccess: (state, action) => {
            state.teachersList = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getFailed: (state, action) => {
            // Store only serializable data
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        getError: (state, action) => {
            state.loading = false;
            // Extract and store serializable parts of the error object
            const { message, code, response } = action.payload;
            state.error = {
                message,
                code,
                status: response?.status,
                data: response?.data,
            };
        },
        postDone: (state) => {
            state.loading = false;
            state.error = null;
            state.response = null;
        }
    },
});

export const {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    doneSuccess,
    postDone
} = teacherSlice.actions;

export const teacherReducer = teacherSlice.reducer;
