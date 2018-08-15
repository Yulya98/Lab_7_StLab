//region no separate reducer

import * as constantsRegistration from "../constants/constantsRegistration";
import * as constantsProfile from "../constants/constantsProfile";
import * as constantsComments from "../constants/constsComments";
import * as constantsAlbum from "../constants/constantsAlbum";
import {INFO_ABOUT_USER} from "../constants/constantsAboutYoiurself";
import * as constantsAuthorization from "../constants/constantsAuthorization";
import * as constantsPosts from "../constants/constantsPosts";
import * as constantsBiggerPhoto from "../constants/constantsBiggerPhoto"

let defaultState= {
    email: "",
    password: "",
    activeUserId: "",
    isVisibleProfile: false,
    isVisibleInformation: false,
    isVisibleAuthorization: false,
    name: "",
    surname: "",
    emailUser: "",
    sphere: "",
    city: "",
    pseoudonym: "",
    images: [],
    deleteItem: "Enter the name of image...",
    nameImg: "Enter the name of image...",
    path: "Enter the path of image...",
    idPost: "",
    isVisiblePost: false,
    isVisiblePosts: true,
    subPosts: [],
    idUser: 0,
    isVisibleAlbum: false,
    posts: [],
    author: [],
    data: [],
    comment: "",
    flagForCheckPageCommentsOrProfile: false,
    RETURN_IN_INITIAL_STATE_IMAGE: false,
    isVisibleRegistration: false,
    registrationEmail: "",
    registrationPassword: "",
    isRegistrationUser: false,
    srcPhotoBigger:"",
    isVisibleBiggerPhoto: false,
    albums: [],
    isVisibleMultiAlbums: false,
    activeAlbumId: 0
};

const mainReducer=(state=defaultState,action)=>{
    debugger;

    if(action.type === constantsAuthorization.CHANGE_EMAIL){
        return {
            ...state,
            email: action.email
        }
    }

    if(action.type === constantsAlbum.CHANGE_ACTIVE_USER){
        return{
            ...state,
            activeUserId: action.activeUserId,
            flagForCheckPage: action.flagForCheckPage
        }
    }

    if(action.type === constantsAuthorization.CHANGE_PASSWORD){
        return{
            ...state,
            password: action.password
        }
    }
    if(action.type === constantsAlbum.HANGE_ACTIVE_USER){
        return{
            ...state,
            activeUserId: action.activeUserId
        }
    }

    if(action.type === constantsAuthorization.CHANGE_VISIBLE_PROFILE){
        return{
            ...state,
            isVisibleProfile: action.isVisibleProfile,
            isVisibleAuthorization: action.isVisibleAuthorization,
            activeUserId: action.activeUserId,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile,
            isRegistrationUser: action.isRegistrationUser
        }
    }

    if(action.type === INFO_ABOUT_USER){
        return{
            ...state,
            name:action.name,
            surname:action.surname,
            emailUser: action.emailUser,
            sphere: action.sphere,
            city: action.city,
        }
    }

    if(action.type === constantsAlbum.CHANGE_IMAGES){
        return{
            ...state,
            images: [...state.images,action.images],
            nameImg: "",
            path:""

        }
    }

    if(action.type === constantsAlbum.LOAD_IMAGES){
        return{
            ...state,
            images:[...state.images,action.images]
        }
    }

    if(action.type === constantsAlbum.CHANGE_DELETE_ITEM){
        return{
            ...state,
            deleteItem: action.deleteItem
        }
    }

    if(action.type === constantsAlbum.CHANGE_NAME_IMAGE){
        return{
            ...state,
            nameImg: action.nameImg
        }
    }

    if(action.type === constantsAlbum.CHANGE_PATH){
        return{
            ...state,
            path: action.path
        }
    }

    if(action.type === constantsPosts.CHANGE_POSTS){
        debugger;
        return{
            ...state,
            posts:[...state.posts,action.posts]
        }
    }

    if(action.type === constantsPosts.CHANGE_SUBPOSTS){
        debugger;
        return {
            ...state,
            subPosts: [...state.subPosts,action.subposts]
        }
    }

    if(action.type === constantsComments.CHANGE_AUTHOR){
        return{
            ...state,
            author: [...state.author,action.author]
        }
    }

    if(action.type === constantsComments.CHANGE_DATA){
        return{
            ...state,
            data:[...state.data,action.data]
        }
    }

    if(action.type === constantsComments.CHANGE_COMMENT){
        return{
            ...state,
            comment: action.comment
        }
    }

    if(action.type === constantsPosts.CHANGE_CURRENT_IMAGE){
        return{
            ...state,
            currentImage: action.currentImage
        }
    }

    if(action.type === constantsPosts.CHANGE_LIGHTBOXES){
        return{
            ...state,
            lightboxIsOpen: action.lightboxIsOpen
        }
    }

    if(action.type === constantsPosts.VISIBLE_POST){
        debugger;
        return{
            ...state,
            isVisiblePost: action.isVisiblePost,
            isVisiblePosts: action.isVisiblePosts,
            idPost: action.idPost
        }
    }

    if(action.type === constantsPosts.CHANGE_IN_INITIAL_STATE_IMAGES){
        return{
            ...state,
            posts: action.posts,
            subPosts:action.subPosts,
            isVisiblePosts:action.isVisiblePosts
        }
    }

    if(action.type === constantsAlbum.DELETE_PHOTO_FROM_IMAGES){
        debugger;
        return{
            ...state,
            images: action.images,
            deleteItem: ""
        }
    }


    if(action.type === constantsComments.ADD_COMMENT){
        return{
            ...state,
            data: [...state.data, action.data]
        }
    }

    if(action.type === constantsComments.CHANGE_VISIBLE_COMMENTS){
        debugger;
        return{
            ...state,
            isVisiblePost: action.isVisiblePost,
            isVisibleAlbum: action.isVisibleAlbum,
        }
    }

    if(action.type === constantsPosts.CHANGE_VISIBLE){
        debugger;
        return{
            ...state,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts,
            isVisiblePosts: action.isVisiblePosts,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile,
            activeUserId: action.activeUserId
        }
    }

    if(action.type === constantsRegistration.CHANGE_NAME_REGISTRATION){
        return{
            ...state,
            name:action.name
        }
    }

    if(action.type === constantsRegistration.CHANGE__SURNAME_REGISTRATION){
        return{
            ...state,
            surname: action.surname
        }
    }

    if(action.type === constantsRegistration.CHANGE__PSEOUDONYM_REGISTRATION){
        return{
            ...state,
            pseoudonym: action.pseoudonym
        }
    }

    if(action.type === constantsRegistration.CHANGE__EMAIL_REGISTRATION){
        return{
            ...state,
            registrationEmail: action.registrationEmail
        }
    }

    if(action.type === constantsRegistration.CHANGE__SPHERE_REGISTRATION){
        return{
            ...state,
            sphere: action.sphere
        }
    }

    if(action.type === constantsRegistration.CHANGE__CITY_REGISTRATION){
        return{
            ...state,
            city: action.city
        }
    }

    if(action.type === constantsRegistration.CHANGE__PASSWORD_REGISTRATION){
        return{
            ...state,
            registrationPassword: action.registrationPassword
        }
    }

    if(action.type === constantsRegistration.CHANGE_VISIBLE_PROFILE_FROM_AUTHORIZATION){
        return{
            ...state,
            isVisibleProfile: action.isVisibleProfile,
            isVisibleRegistration: action.isVisibleRegistration,
            isRegistrationUser:action.isRegistrationUser
        }
    }

    if(action.type === constantsAuthorization.CHANGE_VISIBLE_REGISTRATION){
        return{
            ...state,
            isVisibleRegistration: action.isVisibleRegistration,
            isVisibleAuthorization: action.isVisibleAuthorization
        }
    }

    if(action.type === constantsComments.RETURN_IN_INITIAL_STATE_COMMENTS_PAGE){
        return{
            ...state,
            author: action.author,
            data:action.data,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost
        }
    }

    if(action.type === constantsPosts.POSTS_VISIBLE){
        return{
            ...state,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
        }
    }

    if(action.type === constantsAlbum.RETURN_IN_INITIAL_STATE_IMAGE){
        return{
            ...state,
            images: action.images,
            flagForCheckAlbumInPosts:action.flagForCheckAlbumInPosts,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile
        }
    }

    if(action.type === constantsPosts.CHANGE_REGISTR_USER){
        return{
            ...state,
            isRegistrationUser: action.isRegistrationUser,
            isVisibleProfile: action.isVisibleProfile
        }
    }

    if(action.type === constantsPosts.VISIBLE_AUTHORIZATION){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === constantsComments.VISIBLE_AUTHORIZATION_FROM_COMMENTS){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === constantsComments.CHANGE_VISIBLE_COMMENTS_FOR_NOT_AUTHORIZATION_USER){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization,
            isVisiblePost: action.isVisiblePost
        }
    }

    if(action.type === constantsPosts.CHANGE_INITIAL_STATE_POSTS){
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts: action.isVisiblePosts,
            isVisiblePost: action.isVisiblePost
        }
    }

    if(action.type === constantsProfile.CHANGE_VISIBLE_ALBUM_FROM_PROFILE){
        return {
            ...state,
            isVisibleAlbum: action.isVisibleAlbum,
            isVisiblePosts:action.isVisiblePosts,
            isVisibleInformation:action.isVisibleInformation,
            flagForCheckAlbumInPosts:action.flagForCheckAlbumInPosts,
            isVisibleMultiAlbums: action.isVisibleMultiAlbums
        }
    }

    if(action.type === constantsProfile.CHANGE_VISIBLE_INFORMATION){
        debugger;
        return{
            ...state,
            isVisibleInformation: action.isVisibleInformation,
            isVisibleAlbum:action.isVisibleAlbum,
            isVisiblePosts:action.isVisiblePosts,
            flagForCheckAlbumInPosts:action.flagForCheckAlbumInPosts,
            isVisibleMultiAlbums:action.isVisibleMultiAlbums
        }
    }

    if(action.type === constantsProfile.CHANGE_VISIBLE_POSTS_FROM_PROFILE){
        debugger;
        return{
            ...state,
            isVisibleInformation: action.isVisibleInformation,
            isVisibleAlbum:action.isVisibleAlbum,
            isVisiblePosts:action.isVisiblePosts,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts,
            isVisibleMultiAlbums: action.isVisibleMultiAlbums
        }
    }

    if(action.type === constantsBiggerPhoto.CHANGE_VISIBLE_BIGGER_PHOTO){
        return{
            ...state,
            isVisibleBiggerPhoto: action.isVisibleBiggerPhoto,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === constantsPosts.CHANGE_BIGGER_PHOTO_PATH){
        return{
            ...state,
            srcPhotoBigger: action.srcPhotoBigger,
            isVisibleBiggerPhoto: action.isVisibleBiggerPhoto,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === "CHANGE_ALBUMS"){
        return{
            ...state,
            albums: [...state.albums, action.albums]
        }
    }

    if(action.type === "ADD_ALBUMS"){
        return{
            ...state,
            albums: [...state.albums, action.albums]
        }
    }

    if(action.type === "CHANGE_VISIBLE_MULTI_ALBUMS"){
        return{
            ...state,
            isVisibleMultiAlbums: action.isVisibleMultiAlbums,
            isVisibleAlbum: action.isVisibleAlbum,
            activeAlbumId: action.activeAlbumId
        }
    }

    return{
        ...state
    }
};
export default mainReducer;

//endregion



//region separate reducer doesn't work

// import {combineReducers} from "redux";
// import reducerRegistration from "../reducers/reducerRegistration";
// import reducerProfile from "../reducers/reducerProfile";
// import reducerPosts from "../reducers/reducerPosts";
// import reducerComments from "../reducers/reducerComments";
// import reducerAuthorization from "../reducers/reducerAuthorization";
// import reducerAlbum from "../reducers/reducerAlbum";
// import reducerAboutYourself from "../reducers/reducerAboutYourself"
// import reducerBiggerPhoto from "../reducers/reducerBigerPhoto"

//  const rootReducer = combineReducers({
//     reducerRegistration,
//     reducerProfile,
//     reducerPosts,
//     reducerComments,
//     reducerAuthorization,
//     reducerAlbum,
//     reducerAboutYourself,
//     reducerBiggerPhoto
// });
//
// export default rootReducer;

//endregion


