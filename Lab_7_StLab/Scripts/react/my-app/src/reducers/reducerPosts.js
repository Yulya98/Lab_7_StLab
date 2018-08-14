import {defaultState} from "./defaultState"

const reducerPosts=(state=defaultState,action) => {
    if(action.type === "CHANGE_POSTS"){
        debugger;
        return{
            ...state,
            posts:[...state.posts,action.posts]
        }
    }

    if(action.type === "CHANGE_SUBPOSTS"){
        debugger;
        return {
            ...state,
            subPosts: [...state.subPosts,action.subposts]
        }
    }

    if(action.type === "CHANGE_CURRENT_IMAGE"){
        return{
            ...state,
            currentImage: action.currentImage
        }
    }

    if(action.type === "CHANGE_LIGHTBOXES"){
        return{
            ...state,
            lightboxIsOpen: action.lightboxIsOpen
        }
    }

    if(action.type === "VISIBLE_POST"){
        debugger;
        return{
            ...state,
            isVisiblePost: action.isVisiblePost,
            isVisiblePosts: action.isVisiblePosts,
            idPost: action.idPost
        }
    }

    if(action.type === "CHANGE_VISIBLE"){
        debugger;
        return{
            ...state,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts,
            isVisiblePosts: action.isVisiblePosts,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile,
            activeUserId: action.activeUserId
        }
    }

    if(action.type === "POSTS_VISIBLE"){
        return{
            ...state,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
        }
    }

    if(action.type ==="CHANGE_IN_INITIAL_STATE_IMAGES"){
        return{
            ...state,
            posts: action.posts,
            subPosts:action.subPosts,
            isVisiblePosts:action.isVisiblePosts
        }
    }

    if(action.type === "CHANGE_REGISTR_USER"){
        return{
            ...state,
            isRegistrationUser: action.isRegistrationUser,
            isVisibleProfile: action.isVisibleProfile
        }
    }

    if(action.type === "VISIBLE_AUTHORIZATION"){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === "CHANGE_INITIAL_STATE_POSTS"){
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost
        }
    }

    return{
        ...state
    }
};

export default reducerPosts;