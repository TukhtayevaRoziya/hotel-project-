let HEADERLUKSINDIGO="HEADERLUKSINDIGO";
let headerluksindigo=[{
    newtext:'20'
}
]

const HeaderLuksIndigoReduser=( state = headerluksindigo, action )=>{
    switch (action.type) {
        case HEADERLUKSINDIGO:
            return {...state, 
            ...state.newtext = action.newday}
    
        default:
            return state
    }

}

export const HeaderLuksIndigoReduserAC = (text) => ({ type: HEADERLUKSINDIGO, newday: text });

export default HeaderLuksIndigoReduser;
