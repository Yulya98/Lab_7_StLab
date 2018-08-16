import * as constants from "../constants/constantsPosts"

export function changePosts(posts){
    return (dispatch) => {
        dispatch(post(posts))
    }
}

export function post(post){
    return{
        type: constants.CHANGE_POSTS,
        posts: post
    }
}

export function changeSubPosts(subposts){
    return (dispatch) => {
        dispatch(subpost(subposts));
    }
}

export function subpost(subposts) {
    return{
        type: constants.CHANGE_SUBPOSTS,
        subposts: subposts
    }
}

export function changeCurrentImage(currentImage){
    return (dispatch) => {
        dispatch(currentImages(currentImage))
    }
}

export function currentImages(currentImage){
    return{
        type: constants.CHANGE_CURRENT_IMAGE,
        currentImage: currentImage
    }
}

export function changeLightboxIsOpen(lightboxIsOpen) {
    return (dispatch) =>{
        dispatch(lightboxesIsOpen(lightboxIsOpen))
    }
}

export function lightboxesIsOpen(lightboxIsOpen) {
    return{
        type: constants.CHANGE_LIGHTBOXES,
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
        type: constants.VISIBLE_POST,
        isVisiblePost: true,
        isVisiblePosts: false,
        idPost: postId
    }
}

export function goToAlbum(idUser,idAlbum){
    return (dispatch) => {
        dispatch(changeIsVisibleAlbum(idUser,idAlbum))
    }
}

export function changeIsVisibleAlbum(idUser,idAlbum){
    return{
        type: constants.CHANGE_VISIBLE,
        flagForCheckAlbumInPosts: true,
        isVisiblePosts: false,
        activeUserId: idUser,
        flagForCheckPageCommentsOrProfile: true,
        activeAlbumId: idAlbum
    }
}

export function visiblePosts() {
    return (dispatch) => {
        dispatch(returnInInitialStatePosts());
    }
}

export function returnInInitialStatePosts(){
    return{
        type: constants.POSTS_VISIBLE,
        isVisiblePosts: true,
        isVisiblePost: false,
        flagForCheckAlbumInPosts: false
    }
}

export function returnInInitialState(){
    return (dispatch) => {
        dispatch(changeInitialState());
    }
}

export function changeInitialState(){
    return{
        type: constants.CHANGE_IN_INITIAL_STATE_IMAGES,
        posts: [],
        subPosts:[],
        isVisiblePosts: false
    }
}

export function changeRegistrationUser(flag){
    return (dispatch) => {
        dispatch(defineUser(flag))
    }
}

export function defineUser(flag) {
    var flagForVisibleProfile = false;
    if(flag)
        flagForVisibleProfile = true;
    return{
        type: constants.CHANGE_REGISTR_USER,
        isRegistrationUser: flag,
        isVisibleProfile: flagForVisibleProfile
    }
}

export function changeVisibleAuthorization(){
    return (dispatch) => {
        dispatch(visibleAuthorization())
    }
}

export function visibleAuthorization() {
    return{
        type: constants.VISIBLE_AUTHORIZATION,
        isVisibleAuthorization: true,
        isVisiblePosts: false
    }
}

export function returnInInitialStatePages(){
    return (dispatch) =>{
        dispatch(initialState())
    }
}

export function initialState() {
    return{
        type: constants.CHANGE_INITIAL_STATE_POSTS,
        isVisibleAlbum: false,
        isVisiblePosts: true,
        isVisiblePost: false
    }
}

export function changeBiggerPhotoPath(src) {
    return (dispatch) =>{
        dispatch(changeBiggerPhoto(src))
    }
}

export function changeBiggerPhoto(src) {
    debugger;
    return{
        type: "CHANGE_BIGGER_PHOTO_PATH",
        srcPhotoBigger: src,
        isVisibleBiggerPhoto: true,
        isVisiblePosts: false
    }
}