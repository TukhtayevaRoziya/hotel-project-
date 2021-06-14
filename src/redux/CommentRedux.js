import man from "../Container/Servis/Comment/man img.png";
import boy from "../Container/Servis/Comment/boy img.png";
import girl from "../Container/Servis/Comment/girl img.png";
import people from "../Container/Servis/Comment/people img.png";
import foto from "./Ellipse.png"
import moduleName from "../Container/Servis/Comment/Comment.module.css";
let COMMENT = "COMMENT"

let comment = {
    add: [
        {
            id: 1, box_class: moduleName.text_box, avatar: man, name: "Tom Holland",
            post: "Lorem with desktop publishing software  of Lorem Ipsum."
        },

        {
            id: 2, box_class: moduleName.text_box2, avatar: boy, name: "Николенко Александр",
            post: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Его п которых Lorem Ipsum."
        },

        {
            id: 3, box_class: moduleName.text_box2, avatar: girl, name: "Nathalie  Isabelle",
            post: "Le impression. Il a été popularisé dans les années 1960 grâce à la vente de Let PageMaker."
        },

        {
            id: 4, box_class: moduleName.text_box2, avatar: foto, name: "Jorj Isako",
            post: "Lorem ipsum Le impression. Il a été popularisé dans les années 1960 grâce à  comme Aldus PageMaker."
        }
    ],

}
export const CommentRedux = (state = comment, action) => {
    switch (action.type) {
        case COMMENT:
            let statecopy = { ...state }
            statecopy.add = [...state.add]
            let newpost2 = {
                id: 5,
                box_class: moduleName.text_box2,
                avatar: people,
                name: action.newname,
                post: action.newpost
            }
            statecopy.add.push(newpost2);
            // action.newname = '';
            // action.newpost = '';
            return statecopy;
        default:
            return state
    }
}

export const CommentAC = (newname, newpost) => ({ type: COMMENT, newname, newpost })