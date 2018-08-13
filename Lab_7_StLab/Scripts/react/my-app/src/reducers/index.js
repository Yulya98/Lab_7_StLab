let defaultState={
    email: "",
    password: "",
    activeUserId: "",
    isVisibleProfile: false,
    isVisibleAuthorization: false,
    name: "",
    surname:"",
    emailUser:"",
    sphere:"",
    city:"",
    pseoudonym:"",
    images:[],
    deleteItem: "Enter the name of image...",
    nameImg: "Enter the name of image...",
    path:"Enter the path of image...",
    idPost:"",
    isVisiblePost: false,
    isVisiblePosts: true,
    subPosts:[],
    idUser: 0,
    isVisibleAlbum: false,
    posts: [],
    author: [],
    data: [],
    comment:"",
    flagForCheckPageCommentsOrProfile: false,
    RETURN_IN_INITIAL_STATE_IMAGE: false,
    isVisibleRegistration: false,
    registrationEmail:"",
    registrationPassword:"",
    isRegistrationUser: false
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
            isVisibleAuthorization: action.isVisibleAuthorization,
            activeUserId: action.activeUserId,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile,
            isRegistrationUser: action.isRegistrationUser
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
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
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
            subPosts:action.subPosts,
            isVisiblePosts:action.isVisiblePosts
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

    if(action.type === "RETURN_IN_INITIAL_STATE_POSTS_PAGE"){
        return{
            ...state,
            author:action.author,
            data: action.data,
        }
    }

    if(action.type === "RETURN_IN_INITIAL_STATE_ALBUM_PAGE"){
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum
        }
    }

    if(action.type === "RETURN_IN_INITIAL_STATE_POSTS_PAGE"){
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost
        }
    }

    if(action.type === "START_POST_PAGE"){
        return{
            ...state,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost,
            isVisibleAlbum: action.isVisibleAlbum
        }
    }

    if(action.type === "CHANGE_FLAG_FOR_POSTS_ALBUM"){
        return{
            ...state,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
        }
    }

    if(action.type === "CHANGE_NAME_REGISTRATION"){
        return{
            ...state,
            name:action.name
        }
    }

    if(action.type === "CHANGE__SURNAME_REGISTRATION"){
        return{
            ...state,
            surname: action.surname
        }
    }

    if(action.type === "CHANGE__PSEOUDONYM_REGISTRATION"){
        return{
            ...state,
            pseoudonym: action.pseoudonym
        }
    }

    if(action.type === "CHANGE__EMAIL_REGISTRATION"){
        return{
            ...state,
            registrationEmail: action.registrationEmail
        }
    }

    if(action.type === "CHANGE__SPHERE_REGISTRATION"){
        return{
            ...state,
            sphere: action.sphere
        }
    }

    if(action.type === "CHANGE__CITY_REGISTRATION"){
        return{
            ...state,
            city: action.city
        }
    }

    if(action.type === "CHANGE__PASSWORD_REGISTRATION"){
        return{
            ...state,
            registrationPassword: action.registrationPassword
        }
    }

    if(action.type === "CHANGE_VISIBLE_PROFILE_FROM_AUTHORIZATION"){
        return{
            ...state,
            isVisibleProfile: action.isVisibleProfile,
            isVisibleRegistration: action.isVisibleRegistration,
            isRegistrationUser:action.isRegistrationUser
        }
    }

    if(action.type === "CHANGE_VISIBLE_REGISTRATION"){
        return{
            ...state,
            isVisibleRegistration: action.isVisibleRegistration,
            isVisibleAuthorization: action.isVisibleAuthorization
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

    if(action.type === "POSTS_VISIBLE"){
        return{
            ...state,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
        }
    }

    if(action.type === "RETURN_IN_INITIAL_STATE_IMAGE"){
        return{
            ...state,
            images: action.images,
            flagForCheckAlbumInPosts:action.flagForCheckAlbumInPosts,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile
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

export default mainReducer;
