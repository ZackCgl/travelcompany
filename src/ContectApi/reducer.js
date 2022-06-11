export const initialState = {
    vlucht: [],
    userdatas: [],
   
};

//selector


const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_VLUCHT':
            return{
                ...state,
                vlucht: [...state.vlucht, action.val],
            };
            case 'ADD_USERDATAS':
            return{
                ...state,
                userdatas: [...state.userdatas, action.add],
            };
            default:
                return state;
    }
};

export default reducer;