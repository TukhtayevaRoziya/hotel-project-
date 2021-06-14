import a from '../Container/Galareya/Galareya.module.css'
import Indicator from 'react-carousel-indicator'

let GALAREYA='GALAREYA'

let galareya = [
    
    { id: 1, d_class: a.galareya_img1_header, img_class1: a.galareya_img1_img1, img_class2: a.galareya_img1_img2, src1: 'GalareyaCook.png', src2: 'GalareyaSwimm.png' },
    { id: 2, d_class: a.galareya_img2_header, img_class1: a.galareya_img2_img1, img_class2: a.galareya_img2_img2, src1: 'GalareyaBad.png', src2: 'GalareyaRestaurant.png' },
    { id: 3, d_class: a.galareya_img3_header, img_class1: a.galareya_img3_img1, img_class2: a.galareya_img3_img2, src1: 'GalareyaBad1.png', src2: 'GalareyaRestaurant.png' },
    { id: 4, d_class: a.galareya_img4_header, img_class1: a.galareya_img4_img1, img_class2: a.galareya_img4_img2, src1: 'GalareyaBath.png', src2: 'GalareyaDengiz.png' },   
//      { id: 5, d_class: a.galareya_img1_header, img_class1: a.galareya_img1_img1, img_class2: a.galareya_img1_img2, src1: 'GalareyaCook.png', src2: 'GalareyaSwimm.png' },
//     { id: 6, d_class: a.galareya_img2_header, img_class1: a.galareya_img2_img1, img_class2: a.galareya_img2_img2, src1: 'GalareyaBad.png', src2: 'GalareyaRestaurant.png' },
//     { id: 7, d_class: a.galareya_img3_header, img_class1: a.galareya_img3_img1, img_class2: a.galareya_img3_img2, src1: 'GalareyaBad1.png', src2: 'GalareyaRestaurant.png' },
//     { id: 8, d_class: a.galareya_img4_header, img_class1: a.galareya_img4_img1, img_class2: a.galareya_img4_img2, src1: 'GalareyaBath.png', src2: 'GalareyaDengiz.png' },  
//        { id: 9, d_class: a.galareya_img1_header, img_class1: a.galareya_img1_img1, img_class2: a.galareya_img1_img2, src1: 'GalareyaCook.png', src2: 'GalareyaSwimm.png' },
//     { id: 10, d_class: a.galareya_img2_header, img_class1: a.galareya_img2_img1, img_class2: a.galareya_img2_img2, src1: 'GalareyaBad.png', src2: 'GalareyaRestaurant.png' },
//     { id: 11, d_class: a.galareya_img3_header, img_class1: a.galareya_img3_img1, img_class2: a.galareya_img3_img2, src1: 'GalareyaBad1.png', src2: 'GalareyaRestaurant.png' },
//     { id: 12, d_class: a.galareya_img4_header, img_class1: a.galareya_img4_img1, img_class2: a.galareya_img4_img2, src1: 'GalareyaBath.png', src2: 'GalareyaDengiz.png' },
//     { id: 13, d_class: a.galareya_img1_header, img_class1: a.galareya_img1_img1, img_class2: a.galareya_img1_img2, src1: 'GalareyaCook.png', src2: 'GalareyaSwimm.png' },
//     { id: 14, d_class: a.galareya_img2_header, img_class1: a.galareya_img2_img1, img_class2: a.galareya_img2_img2, src1: 'GalareyaBad.png', src2: 'GalareyaRestaurant.png' },
//     { id: 15, d_class: a.galareya_img3_header, img_class1: a.galareya_img3_img1, img_class2: a.galareya_img3_img2, src1: 'GalareyaBad1.png', src2: 'GalareyaRestaurant.png' },
//     { id: 16, d_class: a.galareya_img4_header, img_class1: a.galareya_img4_img1, img_class2: a.galareya_img4_img2, src1: 'GalareyaBath.png', src2: 'GalareyaDengiz.png' },
    
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