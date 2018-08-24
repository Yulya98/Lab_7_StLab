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
        dispatch(changeVisiblePost(true));
        dispatch(changeVisiblePostPart());
        dispatch(changePostId(postId))
    }
}

export function changeVisiblePost(flag){
    return{
        type: constants.VISIBLE_POST,
        isVisiblePost: flag,
    }
}

export function changeVisiblePostPart(){
    return{
        type: constants.VISIBLE_POST_PART,
        isVisiblePosts: false
    }
}

export function changePostId(postId){
    return{
        type: constants.VISIBLE_POST_POST_ID,
        idPost: postId
    }
}

export function goToAlbum(idUser,idAlbum){
    return (dispatch) => {
        dispatch(changeIsVisibleAlbum(true));
        dispatch(changeVisiblePostPart());
        dispatch(changeUserId());
        dispatch(changeFlag());
        dispatch(changeIdAlbum());
    }
}

export function changeIsVisibleAlbum(flag){
    return{
        type: constants.CHANGE_VISIBLE,
        flagForCheckAlbumInPosts: flag
    }
}

export function changeUserId(idUser){
    return{
        type: constants.CHANGE_USER_ID,
        activeUserId: idUser
    }
}

export function changeFlag(){
    return{
        type: constants.CHANGE_FLAG_PROFILE,
        flagForCheckPageCommentsOrProfile: true
    }
}

export function changeIdAlbum(idAlbum){
    return{
        type: constants.CHANGE_ALBUM_ID,
        activeAlbumId: idAlbum
    }
}


export function visiblePosts() {
    return (dispatch) => {
        dispatch(returnInInitialStatePosts());
        dispatch(changeVisiblePostPart());
        dispatch(changeIsVisibleAlbum(false))
    }
}

export function returnInInitialStatePosts(){
    return{
        type: constants.POSTS_VISIBLE,
        isVisiblePosts: true
    }
}

export function returnInInitialState(){
    return (dispatch) => {
        dispatch(changeInitialState());
        dispatch(changeInitialStateSubPosts());
        dispatch(changeVisiblePostPart());
    }
}

export function changeInitialState(){
    return{
        type: constants.CHANGE_IN_INITIAL_STATE_IMAGES,
        posts: []
    }
}

export function changeInitialStateSubPosts() {
    return{
        type: constants.CHANGE_IN_INITIAL_STATE_SUB_POSTS,
        subPosts:[]
    }
}

export function changeRegistrationUser(flag){
    return (dispatch) => {
        dispatch(defineUser(flag));
        dispatch(defineUserProfile(flag));
    }
}

export function defineUser(flag) {
    var flagForVisibleProfile = false;
    if(flag)
        flagForVisibleProfile = true;
    return{
        type: constants.CHANGE_REGISTR_USER,
        isRegistrationUser: flag,
    }
}

export function defineUserProfile(flag) {
    var flagForVisibleProfile = false;
    if(flag)
        flagForVisibleProfile = true;
    return{
        type: constants.CHANGE_REGISTR_PROFILE,
        isVisibleProfile: flagForVisibleProfile
    }
}

export function changeVisibleAuthorization(){
    return (dispatch) => {
        dispatch(visibleAuthorization())
        dispatch(changeVisiblePostPart());
    }
}

export function visibleAuthorization() {
    return{
        type: constants.VISIBLE_AUTHORIZATION,
        isVisibleAuthorization: true
    }
}

export function returnInInitialStatePages(){
    return (dispatch) =>{
        dispatch(initialState());
        dispatch(returnInInitialStatePosts());
        dispatch(changeVisiblePost(false));

    }
}

export function initialState() {
    return{
        type: constants.CHANGE_INITIAL_STATE_POSTS,
        isVisibleAlbum: false
    }
}

export function changeBiggerPhotoPath(src) {
    return (dispatch) =>{
        dispatch(changeBiggerPhoto(src));
        dispatch(changeVisibleBiggerPhoto());
        dispatch(changeVisiblePosts());
    }
}

export function changeBiggerPhoto(src) {
    debugger;
    return{
        type: constants.CHANGE_BIGGER_PHOTO_PATH,
        srcPhotoBigger: src
    }
}

export function changeVisibleBiggerPhoto(){
    return{
        type: constants.CHANGE_BIGGER_PHOTO_VISIBLE,
        isVisibleBiggerPhoto: true
    }
}

export function changeVisiblePosts(){
    return{
        type: constants.CHANGE_BIGGER_PHOTO_VISIBLE_POSTS,
        isVisiblePosts: false
    }
}