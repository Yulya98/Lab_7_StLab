let defaultState={
    email: "",
    password: "",
    activeUserId: "",
    isVisibleProfile: false,
    isVisibleAuthorization: true,
    name: "",
    surname:"",
    emailUser:"",
    sphere:"",
    city:"",
    images:[],
    deleteItem: "",
    nameImg: "",
    path:"",
    idPost:"",
    isVisiblePost: false,
    isVisiblePosts: true,
    lightboxIsOpen: false,
    currentImage: 0,
    subPosts:[],
    idUser: 0,
    isVisibleAlbum: false,
    posts: [],
    author: [],
    data: [],
    comment:"",
    flagForCheckPageCommentsOrProfile: false
}



const mainReducer=(state=defaultState,action)=>{
debugger;
var images =[];
    if(action.type === "CHECK_USER" || action.type === "GET_ITEMS"){
        debugger;
        return {
                ...state
        }
    }

    if(action.type === "CHANGE_EMAIL"){
        return {
            ...state,
            email: action.email
        }
    }

    if(action.type === "CHANGE_LIGTBOX"){
        return{
            ...state,
            currentImage: action.currentImage,
            lightboxIsOpen: action.lightboxIsOpen
        }
    }

    if(action.type === "CHANGE_PASSWORD"){
        return{
            ...state,
            password: action.password
        }
    }
    if(action.type === "CHANGE_ACTIVE_USER"){
        return{
            ...state,
            activeUserId: action.activeUserId
        }
    }

    if(action.type === "CHANGE_ACTIVE_USER_FROM_COMMENTS"){
        return{
            ...state,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile
        }
    }

    if(action.type === "CHANGE_VISIBLE_PROFILE"){
        return{
            ...state,
            isVisibleProfile: action.isVisibleProfile,
            isVisibleAuthorization: action.isVisibleAuthorization
        }
    }

    if(action.type === "INFO_ABOUT_USER"){
        return{
            ...state,
            name:action.name,
            surname:action.surname,
            emailUser: action.emailUser,
            sphere: action.sphere,
            city: action.city,
        }
    }

    if(action.type === "CHANGE_IMAGES"){
        return{
            ...state,
            images: [...state.images,action.images],
            nameImg: "",
            path:""

        }
    }

    if(action.type === "LOAD_IMAGES"){
        return{
            ...state,
            images:[...state.images,action.images]
        }
    }

    if(action.type === "CHANGE_DELETE_ITEM"){
        return{
            ...state,
            deleteItem: action.deleteItem
        }
    }

    if(action.type === "CHANGE_NAME_IMAGE"){
        return{
            ...state,
            nameImg: action.nameImg
        }
    }

    if(action.type === "CHANGE_PATH"){
        return{
            ...state,
            path: action.path
        }
    }

    if(action.type === "RETURN_IN_INITIAL_STATE_ALBUM_PAGE"){
        debugger;
        return{
            ...state,
            images: action.images,
        }
    }

    if(action.type === "CHANGE_ID_POST_AND_VISIBLE"){
        return{
            ...state,
            idPost:action.idPost,
            isVisiblePost: action.isVisiblePost,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === "ADD_ITEM") {
        return {
            ...state,
            currentImage: action.currentImage,
            lightboxIsOpen: action.lightboxIsOpen,
            subPosts: action.subPosts
        }
    }

    if(action.type === "CLOSE_IMAGE"){
        return{
            ...state,
            currentImage: action.currentImage,
            lightboxIsOpen: action.lightboxIsOpen
        }
    }

    if(action.type === "TO_PREVIOUS_PHOTO"){
        return{
            ...state,
            currentImage: action.currentImage
        }
    }
    if(action.type === "GO_TO_NEXT_PHOTO"){
        return{
            ...state,
            currentImage: action.currentImage
        }
    }

    if(action.type === "CHANGE_ID_USER"){
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum,
            idUser: action.idUser,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    // if(action.type === "CHANGE_POSTS"){
    //     return{
    //         ...state,
    //         posts:action.posts
    //     }
    // }

    if(action.type === "CHANGE_POSTS"){
        debugger;
        return{
            ...state,
            posts:[...state.posts,action.posts]
        }
    }

    // if(action.type === "CHANGE_SUBPOSTS"){
    //     return {
    //         ...state,
    //         subPosts: action.subPosts
    //     }
    // }

    if(action.type === "CHANGE_SUBPOSTS"){
        debugger;
        return {
            ...state,
            subPosts: [...state.subPosts,action.subposts]
        }
    }

    if(action.type === "SCROLL_UP_EVENT"){
        return{
            ...state,
            subPosts:action.subPosts
        }
    }

    if(action.type === "SCROLL_DOWN_EVENT"){
        return{
            ...state,
            subPosts: action.subPosts
        }
    }

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

    if(action.type === "CHANGE_VISIBLE_ALBUM"){
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type ==="CHANGE_IN_INITIAL_STATE_IMAGES"){
        return{
            ...state,
            posts: action.posts,
            subPosts:action.subPosts
        }
    }

    if(action.type === "DELETE_PHOTO_FROM_IMAGES"){
        debugger;
        return{
            ...state,
            images: action.images,
            deleteItem: ""
        }
    }

    if(action.type === "DELETE_PHOTOS"){
        return{
            ...state
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
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile,
            activeUserId: action.activeUserId
        }
    }
    if(action.type === "CHANGE_VISIBLE"){
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === "RETURN_IN_INITIAL_STATE_POSTS_PAGE"){
        return{
            author:action.author,
            data: action.data,
        }
    }

    if(action.type === "RETURN_IN_INITIAL_STATE_ALBUM_PAGE"){
        return{
            isVisibleAlbum: action.isVisibleAlbum
        }
    }

    if(action.type === "RETURN_IN_INITIAL_STATE_POSTS_PAGE"){
        return{
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost
        }
    }

    if(action.type === "START_POST_PAGE"){
        return{
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost,
            isVisibleAlbum: action.isVisibleAlbum
        }
    }

    return{
        ...state
    }
};

export default mainReducer;
