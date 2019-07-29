const initial = {
    color:'stella'};

const themeReducer = (state=initial,action )=>
{
    switch(action.type)
    {
        case "change_Color" :
            let newTheme= {
            ...state,
            color: action.payload.color
        }
        return newTheme;
        default:return state
    }
}

export default themeReducer;