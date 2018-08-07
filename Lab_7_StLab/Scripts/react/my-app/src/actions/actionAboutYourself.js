import axios from "axios";

export function componentDidMount() {
    debugger;
    return (dispatch)=> {
        axios.post('aktiveusersearch')
        .then((response) => {
            dispatch(changeState(response.data))
        });
}
}

export function changeState(data) {
    return{
        type: "INFO_ABOUT_USER",
        name: data[0],
        surname: data[1],
        emailUser: data[2],
        sphere:data[3],
        city:data[4]
    }
}
