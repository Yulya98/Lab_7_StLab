import axios from "axios";


export function componentDidMount(idPost) {
    return (dispatch)=> {
        const objPost = {idPost: idPost};
        debugger;
        debugger;
        let promise = new Promise((resolve,reject )=> {
            axios.post('searchAuthor', objPost)
                .then((response) => {
                    debugger;
                    for (var j = 0; j < response.data.length; j += 3) {
                        debugger;
                        const obj = {
                            authorName: response.data[j],
                            pathToPage: [{src: response.data[j + 1], width: 1, height: 1}],
                            idUser: response.data[j + 2]
                        };
                        dispatch(changeAuthor(obj));
                    }
                });
        });
        debugger;
        promise.then(result=> {
            axios.post('searchComments', objPost)
                .then((response) => {
                    debugger;
                    for (var j = 0; j < response.data.length; j += 2) {
                        debugger;
                        const obj = {author: response.data[j], text: response.data[j + 1]}
                        dispatch(changeData(obj));
                    }
                });
        });
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

export function returnInInitialState(){
    return (dispatch) =>{
        dispatch(changeInitialState())
    }
}

export function changeInitialState() {
    return{
        type:"RETURN_IN_INITIAL_STATE_COMMENTS_PAGE",
        author:[],
        data: [],
        isVisiblePosts: true,
        isVisiblePost: false
    }
}

export function changeVisibleAuthorization(){
    return (dispatch)=>{
        dispatch(visibleAuthorization())
    }
}

export function visibleAuthorization() {
    return{
        type:"VISIBLE_AUTHORIZATION_FROM_COMMENTS",
        isVisibleAuthorization: true,
        isVisiblePosts: false
    }
}

export function changeVisibleCommentsFromNotAuthorization(){
    debugger;
    return (dispatch) =>{
        debugger;
        dispatch(visibleComments())
    }
}

export function visibleComments(){
    return{
        type:"CHANGE_VISIBLE_COMMENTS_FOR_NOT_AUTHORIZATION_USER",
        isVisiblePosts: true,
        isVisiblePost: false
    }
}