import defaultState from "./defaultState"
import * as constants from "../constants/constsComments";

const reducerCommentss=(state=defaultState,action)=>{
    if(action.type === constants.CHANGE_AUTHOR){
        return{
            ...state,
            author: [...state.author,action.author]
        }
    }

    if(action.type === constants.CHANGE_DATA){
        return{
            ...state,
            data: [...state.data,action.data]
        }
    }

    if(action.type === constants.CHANGE_COMMENT){
        return{
            ...state,
            comment: action.comment
        }
    }

    if(action.type === constants.ADD_COMMENT){
        return{
            ...state,
            data: [...state.data, action.data]
        }
    }

    if(action.type === constants.CHANGE_VISIBLE_COMMENTS){
        return{
            ...state,
            isVisiblePost: action.isVisiblePost,
            isVisibleAlbum: action.isVisibleAlbum,
        }
    }

    if(action.type === constants.RETURN_IN_INITIAL_STATE_COMMENTS_PAGE){
        return{
            ...state,
            author: action.author,
            data:action.data,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost
        }
    }

    if(action.type === constants.VISIBLE_AUTHORIZATION_FROM_COMMENTS){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === constants.CHANGE_VISIBLE_COMMENTS_FOR_NOT_AUTHORIZATION_USER){
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