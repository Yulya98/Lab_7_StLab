import {defaultState} from "./defaultState"

const reducerCommentss=(state=defaultState,action)=>{
    if(action.type === "CHANGE_AUTHOR"){
        return{
            ...state,
            author: [...state.author,action.author]
        }
    }

    if(action.type === "CHANGE_DATA"){
        return{
            ...state,
            data:[...state.data,action.data]
        }
    }

    if(action.type === "CHANGE_COMMENT"){
        return{
            ...state,
            comment: action.comment
        }
    }

    if(action.type === "ADD_COMMENT"){
        return{
            ...state,
            data: [...state.data, action.data]
        }
    }

    if(action.type === "CHANGE_VISIBLE_COMMENTS"){
        debugger;
        return{
            ...state,
            isVisiblePost: action.isVisiblePost,
            isVisibleAlbum: action.isVisibleAlbum,
        }
    }

    if(action.type === "RETURN_IN_INITIAL_STATE_COMMENTS_PAGE"){
        return{
            ...state,
            author: action.author,
            data:action.data,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost
        }
    }

    if(action.type === "VISIBLE_AUTHORIZATION_FROM_COMMENTS"){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === "CHANGE_VISIBLE_COMMENTS_FOR_NOT_AUTHORIZATION_USER"){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization,
            isVisiblePost: action.isVisiblePost
        }
    }

    return{
        ...state
    }
};

export default reducerCommentss;