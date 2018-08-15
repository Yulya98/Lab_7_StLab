import axios from "axios";
import * as constants from "../constants/constantsAlbum";


export function componentWillMount(flagForCheckPage){
    debugger;
    return(dispatch) => {
        if(!flagForCheckPage) {
            axios.post('searchActiveUserId')
                .then(function (response) {
                    dispatch(searchActiveUserIdFromProfile(response.data));
                });
        }
        else {
            dispatch(searchActiveUserIdFromComments())
        }
    }
}

export function searchActiveUserIdFromProfile(data){
    return{
        type: constants.CHANGE_ACTIVE_USER,
        activeUserId: data,
        flagForCheckPage: false
    }
}

export function searchActiveUserIdFromComments(){
    return{
        type: constants.CHANGE_ACTIVE_USER_FROM_COMMENTS,
        flagForCheckPageCommentsOrProfile: false
    }
}

export function getAlbum(activeUserId) {
    debugger;
    return (dispatch) => {
        var obj = {};
        obj.userId = activeUserId;
        axios.post('searchAlbum', obj)
            .then((response) => {
                for(var i=0;i<response.data.length;i+=2) {
                    var obj ={};
                    obj.idAlbum = response.data[i];
                    obj.nameAlbum = response.data[i+1];
                    dispatch(changeAlbumsData(obj))
                }
            })
    }
}

export function changeAlbumsData(data) {
    debugger;
    return{
        type:"CHANGE_ALBUMS",
        albums: data
    }
}

export function addAlbum(activeUserId,nameOfAlbum) {
    return (dispatch) => {
        var obj = {};
        obj.userId = activeUserId;
        obj.nameOfAlbum = nameOfAlbum;
        axios.post('addAlbum', obj)
            .then((response) => {
                var obj ={};
                obj.idAlbum = response.data[0];
                obj.nameAlbum = nameOfAlbum;
                dispatch(addAlbumsData(obj));
            })
    }
}

export function addAlbumsData(obj) {
    return{
        type:"ADD_ALBUMS",
        albums: obj
    }
}

export function changeVisibleMultiAlbums(activeAlbumId){
    return (dispatch) => {
        dispatch(visibleMultiAlbum(activeAlbumId))
    }
}

export function visibleMultiAlbum(activeAlbumId) {
    return{
        type:"CHANGE_VISIBLE_MULTI_ALBUMS",
        isVisibleMultiAlbums: false,
        isVisibleAlbum: true,
        activeAlbumId: activeAlbumId
    }
}

