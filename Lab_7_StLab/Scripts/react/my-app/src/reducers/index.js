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
    comment:[]
}

const mainReducer=(state=defaultState,action)=>{

    if(action.type === "CHECK_USER"){
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

    if(action.type === "CHANGE_PASSWORD"){
        return{
            ...state,
            password: action.password
        }
    }
    if(action.type ==="CHANGE_ACTIVE_USER"){
        return{
            ...state,
            activeUserId: action.activeUserId
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
            images: action.images
        }
    }

    if(action.type === "CHANGE_DELETE_ITEM"){
        return{
            deleteItem: action.deleteItem
        }
    }

    if(action.type === "CHANGE_NAME_IMAGE"){
        return{
            nameImg: action.nameImg
        }
    }

    if(action.type === "CHANGE_PATH"){
        return{
            path: action.path
        }
    }

    if(action.type === "CHANGE_ID_POST_AND_VISIBLE"){
        return{
            idPost:action.idPost,
            isVisiblePost: action.isVisiblePost,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === "ADD_ITEM") {
        return {
            currentImage: action.currentImage,
            lightboxIsOpen: action.lightboxIsOpen,
            subPosts: action.subPosts
        }
    }

    if(action.type === "CLOSE_IMAGE"){
        return{
            currentImage: action.currentImage,
            lightboxIsOpen: action.lightboxIsOpen
        }
    }

    if(action.type === "TO_PREVIOUS_PHOTO"){
        return{
            currentImage: action.currentImage
        }
    }
    if(action.type === "GO_TO_NEXT_PHOTO"){
        return{
            currentImage: action.currentImage
        }
    }

    if(action.type === "CHANGE_ID_USER"){
        return{
            isVisibleAlbum: action.isVisibleAlbum,
            idUser: action.idUser,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === "CHANGE_POSTS"){
        return{
            ...state,
            posts:action.posts
        }
    }

    if(action.type === "CHANGE_SUBPOSTS"){
        return {
            ...state,
            subPosts: action.subPosts
        }
    }
    if(action.type === "SCROLL_UP_EVENT"){
        return{
            subPosts:action.subPosts
        }
    }

    if(action.type === "SCROLL_DOWN_EVENT"){
        return{
            subPosts: action.subPosts
        }
    }

    if(action.type === "CHANGE_AUTHOR"){
        return{
            ...state,
            author: action.author
        }
    }

    if(action.type === "CHANGE_DATA"){
        return{
            ...state,
            data: action.data
        }
    }

    if(action.type === "CHANGE_COMMENT"){
        return{
            comment: action.comment
        }
    }
};

export default mainReducer;
