const initial = {
    color:'stella'};

const themeReducer = (state=initial,action )=>
{
    let newTheme;
    switch(action.type)
    {
        case "change_Color" :
            newTheme= {
            ...state,
            color: action.payload.color
        }
        return newTheme;
        case "trigger_Menu" :
            newTheme= {
            ...state,
            isMenuOpen: action.payload.isMenuOpen
        }
        return newTheme;
        default:return state
    }

}

export default themeReducer;