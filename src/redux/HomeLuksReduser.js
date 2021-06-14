let HOMELUKSREDUSER='HOME'
let homeluks=[{
    id:1, Luks_p: 'Отель «Titanic Mardan Palace» отражает настоящую роскошь и   величие шикарного дворца благодаря элегантному декору,    сочетающему в себе  историческое обаяние и современный   комфорт, идеальному расположению, восхитительным панорамным   видам, вечнозеленым пальмам и большим зеленым садам. «Titanic   Mardan Palace» - это единственный отель на Средиземноморской   Ривьере, построенный в дворцовом стиле, который в дополнение   к незабываемой атмосфере отдыха поможет вам почувствовать все   очарование и величие роскошного дворца. Новая концепция отеля   предлагает комфортный отдых с детьми.'
}]

const HomeLuksReduser=(state=homeluks , action)=>{
switch (action.type) {
    case HOMELUKSREDUSER:
      return state
    default:
        return state
}
}

export const HomeLuksAC=(home)=>({HOMELUKSREDUSER, home })

export default HomeLuksReduser;