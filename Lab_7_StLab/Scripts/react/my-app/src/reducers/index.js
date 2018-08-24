import * as constantsRegistration from "../constants/constantsRegistration";
import * as constantsProfile from "../constants/constantsProfile";
import * as constantsComments from "../constants/constsComments";
import * as constantsAlbum from "../constants/constantsAlbum";
import * as constantsAboutYourself from "../constants/constantsAboutYoiurself";
import * as constantsAuthorization from "../constants/constantsAuthorization";
import * as constantsPosts from "../constants/constantsPosts";
import * as constantsBiggerPhoto from "../constants/constantsBiggerPhoto"
import * as constantsMultiAlbum from "../constants/constantsMultiAlbum"

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
    activeAlbumId: 0,
    nameOfNewAlbum: ""
};

const mainReducer=(state=defaultState,action)=>{

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
        }
    }

    if(action.type === constantsAlbum.CHANGE_FLAG_FOR_CHECK_PAGE){
        return{
            ...state,
            flagForCheckPage: action.flagForCheckPage,
        }
    }

    if(action.type === constantsAuthorization.CHANGE_PASSWORD){
        return{
            ...state,
            password: action.password
        }
    }
    if(action.type === constantsAlbum.CHANGE_ACTIVE_USER){
        return{
            ...state,
            activeUserId: action.activeUserId
        }
    }

    if(action.type === constantsAuthorization.CHANGE_VISIBLE_PROFILE){
        return{
            ...state,
            isVisibleProfile: action.isVisibleProfile
        }
    }

    if(action.type === constantsAuthorization.CHANGE_VISIBLE_AUTHORIZATION){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization
        }
    }

    if(action.type === constantsAuthorization.CHANGE_USER_REGISTRATION){
        return{
            ...state,
            isRegistrationUser: action.isRegistrationUser
        }
    }

    if(action.type === constantsAuthorization.CHANGE_VISIBLE_AUTHORIZATION){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization
        }
    }

    if(action.type === constantsAboutYourself.INFO_ABOUT_USER_CHANGE_NAME){
        return{
            ...state,
            name:action.name
        }
    }

    if(action.type === constantsAboutYourself.INFO_ABOUT_USER_CHANGE_SURNAME){
        return{
            ...state,
            surname:action.surname
        }
    }

    if(action.type === constantsAboutYourself.INFO_ABOUT_USER_CHANGE_EMAIL_USER){
        return{
            ...state,
            emailUser: action.emailUser
        }
    }

    if(action.type === constantsAboutYourself.INFO_ABOUT_USER_CHANGE_SPHERE_USER){
        return{
            ...state,
            sphere: action.sphere
        }
    }

    if(action.type === constantsAboutYourself.INFO_ABOUT_USER_CHANGE_CITY_USER){
        return{
            ...state,
            city: action.city
        }
    }

    if(action.type === constantsAlbum.CHANGE_IMAGES){
        return{
            ...state,
            images: [...state.images,action.images]
        }
    }

    if(action.type === constantsAlbum.CHANGE_INITIAL_STATE_IMG_NAME){
        return{
            ...state,
            nameImg: ""
        }
    }

    if(action.type === constantsAlbum.CHANGE_INITIAL_STATE_IMG_PATH){
        return{
            ...state,
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
        }
    }

    if(action.type === constantsPosts.VISIBLE_POST_PART){
        debugger;
        return{
            ...state,
            isVisiblePosts: action.isVisiblePosts,
        }
    }

    if(action.type === constantsPosts.VISIBLE_POST_POST_ID){
        debugger;
        return{
            ...state,
            idPost: action.idPost,
        }
    }

    if(action.type === constantsPosts.CHANGE_IN_INITIAL_STATE_IMAGES) {
        return {
            ...state,
            posts: action.posts
        }
    }

    if(action.type === constantsPosts.CHANGE_IN_INITIAL_STATE_SUB_POSTS) {
        return {
            ...state,
            subPosts: action.subPosts
        }
    }

    if(action.type === constantsAlbum.DELETE_PHOTO_FROM_IMAGES){
        debugger;
        return{
            ...state,
            images: action.images,
        }
    }

    if(action.type === constantsAlbum.DELETE_PHOTO_ITEM){
        debugger;
        return{
            ...state,
            deleteItem: action.deleteItem
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
            isVisiblePost: action.isVisiblePost
        }
    }

    if(action.type === constantsComments.CHANGE_VISIBLE_ALBUM){
        debugger;
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum
        }
    }

    if(action.type === constantsPosts.CHANGE_VISIBLE){
        debugger;
        return{
            ...state,
            flagForCheckAlbumInPosts: action.flagForCheckAlbumInPosts
        }
    }

    if(action.type === constantsPosts.CHANGE_USER_ID){
        debugger;
        return{
            ...state,
            activeUserId: action.activeUserId
        }
    }

    if(action.type === constantsPosts.CHANGE_FLAG_PROFILE){
        debugger;
        return{
            ...state,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile
        }
    }

    if(action.type === constantsPosts.CHANGE_ALBUM_ID){
        debugger;
        return{
            ...state,
            activeAlbumId: action.activeAlbumId
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
            isVisibleProfile: action.isVisibleProfile
        }
    }

    if(action.type === constantsRegistration.CHANGE_VISIBLE_REGISTRATIONS){
        return{
            ...state,
            isVisibleRegistration: action.isVisibleRegistration
        }
    }

    if(action.type === constantsRegistration.CHANGE_USER_REGISTRATION){
        return{
            ...state,
            isRegistrationUser: action.isRegistrationUser
        }
    }

    if(action.type === constantsAuthorization.CHANGE_VISIBLE_REGISTRATION){
        return{
            ...state,
            isVisibleRegistration: action.isVisibleRegistration
        }
    }

    if(action.type === constantsAuthorization.CHANGE_VISIBLE_AUTHORIZATION_FLAG){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization
        }
    }

    if(action.type === constantsComments.RETURN_IN_INITIAL_STATE_COMMENTS_PAGE){
        return{
            ...state,
            author: action.author
        }
    }

    if(action.type === constantsComments.RETURN_IN_INITIAL_STATE_COMMENTS_PAGE_DATA){
        return{
            ...state,
            data: action.data
        }
    }

    if(action.type === constantsComments.RETURN_IN_INITIAL_STATE_COMMENTS_PAGE_POSTS){
        return{
            ...state,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === constantsComments.RETURN_IN_INITIAL_STATE_COMMENTS_PAGE_POST){
        return{
            ...state,
            isVisiblePost: action.isVisiblePost
        }
    }

    if(action.type === constantsPosts.POSTS_VISIBLE){
        return{
            ...state,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === constantsAlbum.RETURN_IN_INITIAL_STATE_IMAGE){
        return{
            ...state,
            images: action.images
        }
    }

    if(action.type === constantsAlbum.RETURN_IN_INITIAL_STATE_PAGE_POSTS){
        return{
            ...state,
            flagForCheckAlbumInPosts:action.flagForCheckAlbumInPosts
        }
    }

    if(action.type === constantsAlbum.RETURN_IN_INITIAL_STATE_FLAG_FOR_CHECK_PAGE_COMMENTS){
        return{
            ...state,
            flagForCheckPageCommentsOrProfile: action.flagForCheckPageCommentsOrProfile
        }
    }

    if(action.type === constantsPosts.CHANGE_REGISTR_USER){
        return{
            ...state,
            isRegistrationUser: action.isRegistrationUser
        }
    }

    if(action.type === constantsPosts.CHANGE_REGISTR_PROFILE){
        return{
            ...state,
            isVisibleProfile: action.isVisibleProfile
        }
    }

    if(action.type === constantsPosts.VISIBLE_AUTHORIZATION){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization
        }
    }

    if(action.type === constantsComments.VISIBLE_AUTHORIZATION_FROM_COMMENTS){
        return{
            ...state,
            isVisibleAuthorization: action.isVisibleAuthorization
        }
    }

    if(action.type === constantsPosts.CHANGE_INITIAL_STATE_POSTS){
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum
        }
    }

    if(action.type === constantsProfile.CHANGE_VISIBLE_ALBUM_FROM_PROFILE){
        return {
            ...state,
            isVisibleAlbum: action.isVisibleAlbum
        }
    }

    if(action.type === constantsProfile.CHANGE_VISIBLE_POSTS_FROM_PROFILE_FLAG){
        return {
            ...state,
            isVisiblePosts:action.isVisiblePosts
        }
    }

    if(action.type === constantsProfile.CHANGE_VISIBLE_INFORMATION_FROM_PROFILE){
        return {
            ...state,
            isVisibleInformation:action.isVisibleInformation
        }
    }

    if(action.type === constantsProfile.CHANGE_VISIBLE_CHECK_ALBUM_FROM_PROFILE){
        return {
            ...state,
            flagForCheckAlbumInPosts:action.flagForCheckAlbumInPosts
        }
    }

    if(action.type === constantsProfile.CHANGE_VISIBLE_CHECK_MULTI_ALBUM_FROM_PROFILE){
        return {
            ...state,
            isVisibleMultiAlbums: action.isVisibleMultiAlbums
        }
    }

    if(action.type === constantsBiggerPhoto.CHANGE_VISIBLE_BIGGER_PHOTO){
        return{
            ...state,
            isVisibleBiggerPhoto: action.isVisibleBiggerPhoto
        }
    }

    if(action.type === constantsBiggerPhoto.CHANGE_VISIBLE_BIGGER_PHOTO_POSTS){
        return{
            ...state,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === constantsPosts.CHANGE_BIGGER_PHOTO_PATH){
        return{
            ...state,
            srcPhotoBigger: action.srcPhotoBigger
        }
    }

    if(action.type === constantsPosts.CHANGE_BIGGER_PHOTO_VISIBLE){
        return{
            ...state,
            isVisibleBiggerPhoto: action.isVisibleBiggerPhoto
        }
    }

    if(action.type === constantsPosts.CHANGE_BIGGER_PHOTO_VISIBLE_POSTS){
        return{
            ...state,
            isVisiblePosts: action.isVisiblePosts
        }
    }

    if(action.type === constantsMultiAlbum.CHANGE_ALBUMS){
        return{
            ...state,
            albums: [...state.albums, action.albums]
        }
    }

    if(action.type === constantsMultiAlbum.ADD_ALBUMS){
        return{
            ...state,
            albums: [...state.albums, action.albums]
        }
    }

    if(action.type === constantsMultiAlbum.CHANGE_VISIBLE_MULTI_ALBUMS){
        return{
            ...state,
            isVisibleMultiAlbums: action.isVisibleMultiAlbums
        }
    }

    if(action.type === constantsMultiAlbum.CHANGE_VISIBLE_ALBUM_FROM_MULTI_ALBUMS){
        return{
            ...state,
            isVisibleAlbum: action.isVisibleAlbum
        }
    }

    if(action.type === constantsMultiAlbum.CHANGE_VISIBLE_ALBUM_IF_FROM_ALBUMS){
        return{
            ...state,
            activeAlbumId: action.activeAlbumId
        }
    }

    if(action.type === constantsMultiAlbum.CHANGE_INITIAL_STATE_MULTI_ALBUM){
        return{
            ...state,
            albums: action.albums
        }
    }

    if(action.type === constantsMultiAlbum.CHANGE_NEW_ALBUM_NAME){
        return{
            ...state,
            nameOfNewAlbum: action.nameOfNewAlbum
        }
    }

    return{
        ...state
    }
};
export default mainReducer;



