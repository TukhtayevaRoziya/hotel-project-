let HEADERLINK="HEADERLINK";
let headerlink=[
    { id: 1, to: "/hotel-project-", name: "Главния" },
    { id: 2, to: "/cervis", name: "Сервисы" },
    { id: 3, to: "/galareya", name: "Галарея" },
    // { id: 3, to: "/karta", name: "Карта" },
]

export const HeaderReduser=(state=headerlink, action)=>{
    switch (action.type) {
        case HEADERLINK:
            return state.header;
        default:
            return state;
    }
}
