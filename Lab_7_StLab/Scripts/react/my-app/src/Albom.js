import ImageGallery from 'react-image-gallery'
var axios = require('axios')
import "../node_modules/react-image-gallery/styles/css/image-gallery.css"

import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss"

import "../node_modules/react-image-gallery/styles/scss/image-gallery-no-icon.scss"
import "../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css"


export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [], value: "",nameImg:"", deleteItem:"",userId: this.props.idActiveUser };
        debugger;
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.deleteButton = this.deleteButton.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick(e) {
        e.preventDefault();
        var obj = {};
        obj.NameImg = this.state.nameImg;
        obj.Path = this.state.value;
        axios.post('addPhoto', obj);
        const objs = {'original': obj.NameImg, 'thumbnail': obj.NameImg, 'description': obj.Path }
        this.setState({
            images: [...this.state.images, objs]
        });
    }

    componentWillMount() {
        debugger;
        var obj = {};
        obj.idActiveUers = this.state.userId;
        debugger;
        axios.post('searchphoto', obj)
            .then((response) => {
                debugger;
                for (var i = 0; i < response.data.length; i+=2) {
                    const obj = {
                        'original': response.data[i], 'thumbnail': response.data[i], 'description': response.data[i+1]  }
                    this.setState({
                        images: [...this.state.images, obj]
                    });
                }
            });
    }

    deleteButton(){
        var obj = {};
        obj.nameImg = this.state.deleteItem;
        debugger;
        axios.post('deletePhoto',obj);
    }

    render() {
        if (this.state.images.length == 0) {
            return (
                <div>
                    <input type="text" name="value" value={this.state.value} onChange={this.onChange} />
                    <input type="text" name="nameImg" value={this.state.nameImg} onChange={this.onChange} />
                    <button onClick={this.handleClick}>Add photo</button>
                    <h1>You haven't photos</h1>
                </div>
            );
        }
        else {
            return (
                <div>
                    <ImageGallery items={this.state.images} />
                    <div>
                        <input type="text" name="value" value={this.state.value} onChange={this.onChange} />
                        <input type="text" name="nameImg" value={this.state.nameImg} onChange={this.onChange} />
                        <button onClick={this.handleClick}>Add photo</button>
                    </div>
                    <div>
                        <input type="text" name="deleteItem" value={this.state.deleteItem} onChange={this.onChange} />
                        <button onClick={this.deleteButton}>Delete photo</button>
                    </div>
                </div>
           );
        }
    }
}