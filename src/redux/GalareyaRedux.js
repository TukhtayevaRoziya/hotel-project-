import a from '../Container/Galareya/Galareya.module.css'
import Indicator from 'react-carousel-indicator'
import img1 from "../Container/Galareya/GalareyaPhoto/GalareyaCook.png"
import img2 from "../Container/Galareya/GalareyaPhoto/GalareyaSwimm.png"
import img3 from "../Container/Galareya/GalareyaPhoto/GalareyaBad.png"
import img4 from "../Container/Galareya/GalareyaPhoto/GalareyaRestaurant.png"
import img5 from "../Container/Galareya/GalareyaPhoto/GalareyaBad1.png"
import img6 from "../Container/Galareya/GalareyaPhoto/GalareyaBath.png"
import img7 from "../Container/Galareya/GalareyaPhoto/GalareyaDengiz.png"

let GALAREYA='GALAREYA'

let galareya = [
    { id: 1, d_class: a.galareya_img1_header, img_class1: a.galareya_img1_img1, img_class2: a.galareya_img1_img2, src1: img1, src2: img2 },
    { id: 2, d_class: a.galareya_img2_header, img_class1: a.galareya_img2_img1, img_class2: a.galareya_img2_img2, src1: img3, src2: img4 },
    { id: 3, d_class: a.galareya_img3_header, img_class1: a.galareya_img3_img1, img_class2: a.galareya_img3_img2, src1: img5, src2: img4 },
    { id: 4, d_class: a.galareya_img4_header, img_class1: a.galareya_img4_img1, img_class2: a.galareya_img4_img2, src1: img6, src2: img7 },   
]

const GalareyaRedux=(state=galareya , action)=>{
    switch (action.type) {
        case GALAREYA:
 return (<Indicator itemsPerSlide={10} itemGap={0}> {state} </Indicator>)
        default:
            return state
    } 
}

export const Galareya=(galareyas)=>({GALAREYA , galareyas})
export default GalareyaRedux;