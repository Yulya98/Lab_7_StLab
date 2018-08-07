export function componentDidMount() {
    return (dispatch)=> {
        const objPost = {idPost: this.state.idPost};
        debugger;
        axios.post('searchAuthor', objPost)
            .then((response) => {
                debugger;
                for (var j = 0; j < response.data.length; j += 2) {
                    debugger;
                    const obj = {
                        authorName: response.data[j],
                        pathToPage: [{src: response.data[j + 1], width: 1, height: 1}]
                    }
                    dispatch(changeAuthor(obj));
                }
            });
        axios.post('searchComments', objPost)
            .then((response) => {
                debugger;
                for (var j = 0; j < response.data.length; j += 2) {
                    debugger;
                    const obj = {author: response.data[j], text: response.data[j + 1]}
                    dispatch(changeData(obj));
                }
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
        dispatch(changeComment(e));
    }
}

export function changeComment(data){
    return{
        type:"CHANGE_COMMENT",
        comment: data
    }
}

export function addComment(){
    var obj = {};
    obj.idPost = this.props.idPost;
    obj.text = this.props.comment;
    axios.post('addComment', obj);
    //добваить перепендер
}