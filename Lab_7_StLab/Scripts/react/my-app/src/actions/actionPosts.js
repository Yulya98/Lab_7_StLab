export function changePosts(posts){
    debugger;
    return (dispatch) =>{
        dispatch(post(posts))
    }
}

export function post(post){
    return{
        type:"CHANGE_POSTS",
        posts: post
    }
}

export function changeSubPosts(subposts){
    debugger;
    return (dispatch) => {
        dispatch(subpost(subposts));
    }
}

export function subpost(subposts) {
    return{
        type:"CHANGE_SUBPOSTS",
        subposts: subposts
    }
}

export function changeCurrentImage(currentImage){
    return (dispatch) =>{
        dispatch(currentImages(currentImage))
    }
}

export function currentImages(currentImage){
    return{
        type:"CHANGE_CURRENT_IMAGE",
        currentImage: currentImage
    }
}

export function changeLightboxIsOpen(lightboxIsOpen) {
    return (dispatch)=>{
        dispatch(lightboxesIsOpen(lightboxIsOpen))
    }
}

export function lightboxesIsOpen(lightboxIsOpen) {
    return{
        type: "CHANGE_LIGHTBOXES",
        lightboxIsOpen: lightboxIsOpen
    }
}

export function visiblePost(postId){
    return (dispatch) =>{
        dispatch(changeVisiblePost(postId));
    }
}

export function changeVisiblePost(postId){
    return{
        type:"VISIBLE_POST",
        type:"VISIBLE_POST",
        isVisiblePost: true,
        isVisiblePosts: false,
        idPost: postId
    }
}

export function goToAlbuum(){
    return (dispatch) =>{
        dispatch(changeIsVisibleAlbum())
    }
}

export function changeIsVisibleAlbum(){
debugger;
    return{
        type:"CHANGE_VISIBLE",
        isVisibleAlbum: true,
        isVisiblePosts: false
    }
}


export function returnInInitialState(){
    return (dispatch) =>{
        dispatch(changeInitialState());
    }
}

export function changeInitialState(){
    return{
        type:"CHANGE_IN_INITIAL_STATE_IMAGES",
        posts: [],
        subPosts:[]
    }
}

export function visiblePosts(){
    return (dispatch) =>{
        dispatch(changeVisiblePosts());
    }
}

export function changeVisiblePosts(){
    return{
        type:"START_POST_PAGE",
        isVisiblePosts: true,
        isVisiblePost: false,
        isVisibleAlbum: false
    }
}