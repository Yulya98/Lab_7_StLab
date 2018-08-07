import axios from "axios";

export function componentWillMount(){
    return(dispatch)=>{
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

export function  handleClick(e) {
    return (dispatch)=> {
        var obj = {};
        obj.NameImg = this.state.nameImg;
        obj.Path = this.state.value;
        axios.post('addPhoto', obj);
        const objs = {'original': obj.NameImg, 'thumbnail': obj.NameImg, 'description': obj.Path}
        dispatch(changeState(obj));
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
        changeDeleteItem(e);
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
        dispatch(changeNameImage(e));
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
        dispatch(changePath(e))
    }
}

export function changePath(e) {
    return{
        type:"CHANGE_PATH",
        path: e
    }
}
