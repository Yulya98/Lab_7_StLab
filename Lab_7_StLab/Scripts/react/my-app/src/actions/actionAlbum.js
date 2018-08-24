import axios from "axios";
import * as constants from "../constants/constantsAlbum";

export function componentWillMount(flagForCheckPage){
    return(dispatch) => {
        if(!flagForCheckPage) {
            axios.post('searchActiveUserId')
                .then(function (response) {
                    dispatch(searchActiveUserIdFromProfile(response.data));
                    dispatch(changeFlagForCheckPage())
                });
        }
    }
}

export function searchActiveUserIdFromProfile(data){
    return{
        type: constants.CHANGE_ACTIVE_USER,
        activeUserId: data,
    }
}

export function changeFlagForCheckPage(){
    return{
        type: constants.CHANGE_FLAG_FOR_CHECK_PAGE,
        flagForCheckPage: false
    }
}

// export function searchActiveUserIdFromComments(){
//     return{
//         type: constants.CHANGE_ACTIVE_USER_FROM_COMMENTS,
//         flagForCheckPageCommentsOrProfile: false
//     }
// }

export function  handleClicks(nameImg,value,idAlbum) {
    return (dispatch) => {
        var obj = {};
        obj.NameImg = nameImg;
        obj.Path = value;
        obj.idAlbum = idAlbum;
        debugger;
        axios.post('addPhoto', obj);
        const objs = {'original': obj.Path, 'thumbnail': obj.Path, 'description': obj.NameImg};
        dispatch(changeState(objs));
        dispatch(changeInInitialStateNameImg());
        dispatch(changeInInitialStatePath());
    }
}

export function changeState(data){
    return{
        type: constants.CHANGE_IMAGES,
        images: data
    }
}

export function changeInInitialStateNameImg(){
    return{
        type: constants.CHANGE_INITIAL_STATE_IMG_NAME,
        nameImg: ""
    }
}

export function changeInInitialStatePath(){
    return{
        type: constants.CHANGE_INITIAL_STATE_IMG_PATH,
        path: ""
    }
}

export function onChangeDeleteItem(e) {
    return (dispatch)=>{
        dispatch(changeDeleteItem(e.target.value));
    }
}

export function changeDeleteItem(e) {
    return{
        type: constants.CHANGE_DELETE_ITEM,
        deleteItem: e
    }
}

export function onChangeNameImage(e) {
    return (dispatch) => {
        dispatch(changeNameImage(e.target.value));
    }
}

export function changeNameImage(e) {
    return{
        type: constants.CHANGE_NAME_IMAGE,
        nameImg: e
    }
}

export function onChangePath(e) {
    return (dispatch) => {
        dispatch(changePath(e.target.value))
    }
}

export function changePath(e) {
    return{
        type: constants.CHANGE_PATH,
        path: e
    }
}

export function loadImages(activeUserId,idAlbum) {
    return (dispatch)=> {
        var obj = {};
        obj.idActiveUers = activeUserId;
        obj.idAlbum = idAlbum;
        let promise = new Promise((resolve,reject )=> {
            axios.post('searchphoto', obj)
                .then((response) => {
                    for (var i = 0; i < response.data.length; i += 2) {
                        const obj = {
                            'original': response.data[i],
                            'thumbnail': response.data[i],
                            'description': response.data[i + 1]
                        }
                        dispatch(loadImg(obj));
                    }
                });
        });
    }
}

export  function loadImg(obj) {
    return{
        type: constants.LOAD_IMAGES,
        images: obj
    }
}

export function returnInInitialState(){
    return (dispatch) => {
        dispatch(returnImagesInInitialState());
        dispatch(changeImagesAlbumInPosts());
        dispatch(changeCheckPageCommentsOrProfile());
    }
}

export function returnImagesInInitialState() {
    return{
        type: constants.RETURN_IN_INITIAL_STATE_IMAGE,
        images: []
    }
}

export function changeImagesAlbumInPosts(){
    return{
        type: constants.RETURN_IN_INITIAL_STATE_PAGE_POSTS,
        flagForCheckAlbumInPosts: false
    }
}

export function changeCheckPageCommentsOrProfile() {
    return{
        type: constants.RETURN_IN_INITIAL_STATE_FLAG_FOR_CHECK_PAGE_COMMENTS,
        flagForCheckPageCommentsOrProfile: false
    }
}

export function deleteItemFromArray(array,deleteItem){
    var index = -1;
    return (dispatch)=>{
        for(var j=0; j<array.length;j++){
            if(array[j].description === deleteItem)
                index = j;
        }
        if(index != -1){
            array.splice(index,1);
            dispatch(searchOnValue(array));
            dispatch(chamgeDeleteItem());
        }
        else
            alert("Incorrect data");
    }
}

export function searchOnValue(array){
    return{
        type: constants.DELETE_PHOTO_FROM_IMAGES,
        images: array
    }
}

export function chamgeDeleteItem(){
    return{
        type: constants.DELETE_PHOTO_ITEM,
        deleteItem: ""
    }
}
