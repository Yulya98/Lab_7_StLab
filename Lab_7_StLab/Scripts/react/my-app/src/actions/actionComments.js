import axios from "axios";


export function componentDidMount(idPost) {
    return (dispatch)=> {
        const objPost = {idPost: idPost};
        debugger;
        debugger;
        axios.post('searchAuthor', objPost)
            .then((response) => {
                debugger;
                for (var j = 0; j < response.data.length; j += 3) {
                    debugger;
                    const obj = {
                        authorName: response.data[j],
                        pathToPage: [{src: response.data[j + 1], width: 1, height: 1}],
                        idUser: response.data[j+2]
                    };
                    dispatch(changeAuthor(obj));
                }
            });
        debugger;
        setTimeout(() => {
            axios.post('searchComments', objPost)
                .then((response) => {
                    debugger;
                    for (var j = 0; j < response.data.length; j += 2) {
                        debugger;
                        const obj = {author: response.data[j], text: response.data[j + 1]}
                        dispatch(changeData(obj));
                    }
                });
        },4000);
    }
}

export function changeAuthor(data){
    return{
        type: "CHANGE_AUTHOR",
        author: data
    }
}

export function changeData(data) {
    return{
        type:"CHANGE_DATA",
        data: data
    }
}

export function onChange(e) {
    return (dispatch) =>{
        dispatch(changeComment(e.target.value));
    }
}

export function changeComment(data){
    return{
        type:"CHANGE_COMMENT",
        comment: data
    }
}

export function addComment(idPost, comment,idActiveUser){
    return (dispatch) => {
        var obj = {};
        obj.idPost = idPost;
        obj.text = comment;
        axios.post('addComment', obj);
        const newComment ={};
        newComment.author = idActiveUser;
        newComment.text = comment;
        dispatch(commentAdd(newComment));
    }
}

export function commentAdd(comment){
    return{
        type:"ADD_COMMENT",
        data: comment
    }
}

export function openLightbox(event, obj) {
    return (dispatch) => {
        var currentImage = obj.index;
        var lightboxIsOpen = true;
        dispatch(changeLightbox(currentImage,lightboxIsOpen));
    }
}

export function changeLightbox(currentImage,lightboxIsOpen) {
    return{
        type:"CHANGE_LIGTBOX",
        currentImage: currentImage,
        lightboxIsOpen: lightboxIsOpen
    }
}

export function closeLightbox() {
    return (dispatch)=> {
        dispatch(closeImg());
    }
}

export function closeImg(){
    return{
        type:"CLOSE_IMAGE",
        currentImage: 0,
        lightboxIsOpen: false
    }
}

export function gotoPrevious(){
   return (dispatch) => {
       dispatch(toPreviosPhoto());
   }
}

export function toPreviosPhoto() {
    return{
        type:"TO_PREVIOUS_PHOTO",
        currentImage: this.props.currentImage-1
    }
}

export function gotoNext() {
    return (dispatch) => {
        dispatch(gotoNextPhoto());
    }
}

export function gotoNextPhoto() {
    return{
        type:"GO_TO_NEXT_PHOTO",
        currentImage: this.props.currentImage + 1
    }
}

export function goToAlbums(idUser) {
    debugger;
    return (dispatch) =>{
        dispatch(changeVisibleComments(idUser))
    }
}

export function changeVisibleComments(idUser) {
    debugger;
    return{
        type:"CHANGE_VISIBLE_COMMENTS",
        isVisiblePost: false,
        isVisibleAlbum: true,
        flagForCheckPageCommentsOrProfile: true,
        activeUserId: idUser
    }
}