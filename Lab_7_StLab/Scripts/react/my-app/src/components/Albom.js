import ImageGallery from 'react-image-gallery'
import axios from "axios";
import React from 'react';
import "../resources/css/album/albumStyle.css"
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";

import "../../node_modules/react-image-gallery/styles/scss/image-gallery-no-icon.scss";
import "../../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css";


export default class Album extends React.Component {
    constructor(props) {
        debugger;
        super(props);
        debugger;
        this.deleteButton = this.deleteButton.bind(this);

    }

    deleteButton(){
        debugger;
        var obj = {};
        obj.nameImg = this.props.deleteItem;
        console.log(obj.nameImg);
        document.getElementsByName("deleteItem")[0].value = '';
        axios.post('photoDelete', obj);
        this.props.deleteItemFromArray(this.props.images, obj.nameImg);
    }

    componentDidMount() {
        debugger;
        this.props.loadData(this.props.flagForCheckPageCommentsOrProfile);
        setTimeout(() => { this.props.loadImages(this.props.activeUserId)}, 4000);
    }

    componentWillUnmount(){
        debugger;
        this.props.returnInInitialState();
    }

    render() {
        debugger;
        if (this.props.images.length == 0) {
            return (
                <div>
                    <div className="image_gallery_style">
                         <input className="edit_input" type="text" name="value" value={this.props.path} onChange={this.props.onChangePath} /><br /><br />
                         <input className="edit_input" type="text" name="nameImg" value={this.props.nameImg} onChange={this.props.onChangeNameImage} /><br /><br />
                         <button className="edit_button" onClick={() => this.props.handleClicks(this.props.nameImg, this.props.path)}>Add photo</button>
                    </div>
                    <div className="span_style"><spsn className="span_style_span">You haven't photos</spsn></div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className="image_gallery_style">
                        <ImageGallery items={this.props.images} />
                    </div>
                    <div className="inputs">
                        <input className="edit_input" type="text" name="value" value={this.props.path} onChange={this.props.onChangePath} /><br /><br />
                        <input className="edit_input" type="text" name="nameImg" value={this.props.nameImg} onChange={this.props.onChangeNameImage} /><br /><br />
                        <div className="margin_block">
                             <button className="edit_button" onClick={() =>this.props.handleClicks(this.props.nameImg, this.props.path)}>Add photo</button><br /><br /><br />
                        </div>
                        <input className="edit_input" type="text" name="deleteItem" value={this.props.deleteItem} onChange={this.props.onChangeDeleteItem} /><br /><br />
                        <div className="margin_block">
                             <button className="edit_button" onClick={this.deleteButton}>Delete photo</button>
                        </div>
                    </div>
                </div>
           );
        }
    }
}