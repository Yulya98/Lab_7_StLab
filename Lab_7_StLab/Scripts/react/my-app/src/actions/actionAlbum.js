import axios from "axios";

export function componentWillMount(){
    return(dispatch)=>{
        debugger;
        debugger;
        axios.post('searchActiveUserId')
            .then(function(response) {
                dispatch(searchActiveUserId(response.data))
            });
    }
}

export function searchActiveUserId(data){
    return{
        type:"CHANGE_ACTIVE_USER",
        activeUserId: data
    }
}

export function  handleClick(nameImg,value) {
    return (dispatch)=> {
        debugger;
        var obj = {};
        obj.NameImg = nameImg;
        obj.Path = value;
        axios.post('addPhoto', obj);
        const objs = {'original': obj.NameImg, 'thumbnail': obj.NameImg, 'description': obj.Path}
        dispatch(changeState(objs));
    }
}

export function changeState(data){
    return{
        type:"CHANGE_IMAGES",
        images: data
    }
}

export function onChangeDeleteItem(e) {
    return (dispatch)=>{
        changeDeleteItem(e.target.value);
    }
}

export function changeDeleteItem(e) {
    return{
        type:"CHANGE_DELETE_ITEM",
        deleteItem: e
    }
}

export function onChangeNameImage(e) {
    return (dispatch)=>{
        dispatch(changeNameImage(e.target.value));
    }
}

export function changeNameImage(e) {
    return{
        type:"CHANGE_NAME_IMAGE",
        nameImg: e
    }
}

export function onChangePath(e) {
    return (dispatch) =>{
        dispatch(changePath(e.target.value))
    }
}

export function changePath(e) {
    return{
        type:"CHANGE_PATH",
        path: e
    }
}

export function loadImages(activeUserId) {
    return (dispatch)=> {
        var obj = {};
        obj.idActiveUers = activeUserId;
        debugger;
        axios.post('searchphoto', obj)
            .then((response) => {
                debugger;
                for (var i = 0; i < response.data.length; i += 2) {
                    const obj = {
                        'original': response.data[i], 'thumbnail': response.data[i], 'description': response.data[i + 1]
                    }
                    dispatch(loadImg(obj));
                }
            });
    }
}

export  function loadImg(obj) {
    return{
        type:"LOAD_IMAGES",
        images: obj
    }
}

export function returnInInitialState(){
    debugger;
    return (dispatch) => {
        dispatch(returnImagesInInitialState());
    }
}

export function returnImagesInInitialState() {
    debugger;
    return{
        type:"RETURN_IN_INITIAL_STATE_IMAGE",
        images: []
    }
}
