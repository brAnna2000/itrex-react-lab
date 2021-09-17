// ACTIONS
export const SORT_ASC_YEAR_COLUMN = 'SORT_ASC_YEAR_COLUMN';
export const SORT_ASC_PRICE_COLUMN = 'SORT_ASC_PRICE_COLUMN';
export const SORT_ASC_POWER_COLUMN = 'SORT_ASC_POWER_COLUMN';
export const SORT_ASC_MAKE_COLUMN = 'SORT_ASC_MAKE_COLUMN';
export const SORT_ASC_MODEL_COLUMN = 'SORT_ASC_MODEL_COLUMN';

export const SORT_DESC_YEAR_COLUMN = 'SORT_DESC_YEAR_COLUMN';
export const SORT_DESC_PRICE_COLUMN = 'SORT_DESC_PRICE_COLUMN';
export const SORT_DESC_POWER_COLUMN = 'SORT_DESC_POWER_COLUMN';
export const SORT_DESC_MAKE_COLUMN = 'SORT_DESC_MAKE_COLUMN';
export const SORT_DESC_MODEL_COLUMN = 'SORT_DESC_MODEL_COLUMN';


// ACTION CREATORS/MIDDLEWARES
export const sortAscYearColumn = () => (dispatch) => {
    dispatch({
        type: SORT_ASC_YEAR_COLUMN,
    });
}
export const sortAscPriceColumn = () => (dispatch) => {
    dispatch({
        type: SORT_ASC_PRICE_COLUMN,
    });
}
export const sortAscPowerColumn = () => (dispatch) => {
    dispatch({
        type: SORT_ASC_POWER_COLUMN,
    });
}
export const sortAscMakeColumn = () => (dispatch) => {
    dispatch({
        type: SORT_ASC_MAKE_COLUMN,
    });
}
export const sortAscModelColumn = () => (dispatch) => {
    dispatch({
        type: SORT_ASC_MODEL_COLUMN,
    });
}
export const sortDescYearColumn = () => (dispatch) => {
    dispatch({
        type: SORT_DESC_YEAR_COLUMN,
    });
}
export const sortDescPriceColumn = () => (dispatch) => {
    dispatch({
        type: SORT_DESC_PRICE_COLUMN,
    });
}
export const sortDescPowerColumn = () => (dispatch) => {
    dispatch({
        type: SORT_DESC_POWER_COLUMN,
    });
}
export const sortDescMakeColumn = () => (dispatch) => {
    dispatch({
        type: SORT_DESC_MAKE_COLUMN,
    });
}
export const sortDescModelColumn = () => (dispatch) => {
    dispatch({
        type: SORT_DESC_MODEL_COLUMN,
    });
}

// INITIAL STATE
export const initialSortState = {
    email:
    {
        ascending: false,
        descending: false
    },
    state:
    {
        ascending: false,
        descending: false
    },
    lastName:
    {
        ascending: false,
        descending: false
    },
    firstName:
    {
        ascending: false,
        descending: false
    },
    phone:
    {
        ascending: false,
        descending: false
    },
}

// REDUCER
export const SortReducer = (state = initialSortState, action) => {
    switch (action.type) {
        case SORT_ASC_YEAR_COLUMN:
            return {
                ...initialSortState,
                email: {
                    ascending: true,
                    descending: false
                },
            }
        case SORT_ASC_PRICE_COLUMN:
            return {
                ...initialSortState,
                state: {
                    ascending: true,
                    descending: false
                },
            }
        case SORT_ASC_POWER_COLUMN:
            return {
                ...initialSortState,
                phone: {
                    ascending: true,
                    descending: false
                },
            }
        case SORT_ASC_MAKE_COLUMN:
            return {
                ...initialSortState,
                firstName: {
                    ascending: true,
                    descending: false
                },
            }
        case SORT_ASC_MODEL_COLUMN:
            return {
                ...initialSortState,
                lastName: {
                    ascending: true,
                    descending: false
                },
            }
        case SORT_DESC_YEAR_COLUMN:
            return {
                ...initialSortState,
                email: {
                    ascending: false,
                    descending: true
                },
            }
        case SORT_DESC_PRICE_COLUMN:
            return {
                ...initialSortState,
                state: {
                    ascending: false,
                    descending: true
                },
            }
        case SORT_DESC_POWER_COLUMN:
            return {
                ...initialSortState,
                phone: {
                    ascending: false,
                    descending: true
                },
            }
        case SORT_DESC_MAKE_COLUMN:
            return {
                ...initialSortState,
                firstName: {
                    ascending: false,
                    descending: true
                },
            }
        case SORT_DESC_MODEL_COLUMN:
            return {
                ...initialSortState,
                lastName: {
                    ascending: false,
                    descending: true
                },
            }
        default:
            return {
                ...state,
            }
    }
}
