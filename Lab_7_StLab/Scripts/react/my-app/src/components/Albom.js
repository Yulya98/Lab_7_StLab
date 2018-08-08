import ImageGallery from 'react-image-gallery'
var axios = require('axios')
import React from 'react';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css"

import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss"

import "../../node_modules/react-image-gallery/styles/scss/image-gallery-no-icon.scss"
import "../../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css"


export default class Album extends React.Component {
    constructor(props) {
        super(props);
        this.deleteButton = this.deleteButton.bind(this);
    }

    deleteButton(){
        debugger;
        var obj = {};
        obj.nameImg = this.props.deleteItem;
        axios.post('deletePhoto',obj);
    }

    componentDidMount() {
        debugger;
        this.props.loadData()
        setTimeout(() => { this.props.loadImages(this.props.activeUserId)}, 4000);
    }

    componentWillUnmount(){
        this.props.returnInInitialState();
    }

    render() {
        debugger;
        if (this.props.images.length == 0) {
            return (
                <div>
                    <input type="text" name="value" value={this.props.path} onChange={this.props.onChangePath} />
                    <input type="text" name="nameImg" value={this.props.nameImg} onChange={this.props.onChangeNameImage} />
                    <button onClick={() => this.props.handleClicks(this.props.nameImg, this.props.path)}>Add photo</button>
                    <h1>You haven't photos</h1>
                </div>
            );
        }
        else {
            return (
                <div>
                    <ImageGallery items={this.props.images} />
                    <div>
                        <input type="text" name="value" value={this.props.path} onChange={this.props.onChangePath} />
                        <input type="text" name="nameImg" value={this.props.nameImg} onChange={this.props.onChangeNameImage} />
                        <button onClick={() =>this.props.handleClicks(this.props.nameImg, this.props.path)}>Add photo</button>
                    </div>
                    <div>
                        <input type="text" name="deleteItem" value={this.props.deleteItem} onChange={this.props.onChangeDeleteItem} />
                        <button onClick={this.deleteButton}>Delete photo</button>
                    </div>
                </div>
           );
        }
    }
}