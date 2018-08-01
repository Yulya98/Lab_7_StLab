import ImageGallery from 'react-image-gallery'
var axios = require('axios')
import "../node_modules/react-image-gallery/styles/css/image-gallery.css"

import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss"

import "../node_modules/react-image-gallery/styles/scss/image-gallery-no-icon.scss"
import "../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css"


export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [], value: "" };

        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onChange(e) {
        var val = e.target.value;
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick(e) {
        e.preventDefault();
        var obj = {};
        obj.Path = this.state.value;
        axios.post('addPhoto', obj);
        this.forceUpdate();
        document.getElementByName("value");
    }

    componentWillMount() {
        axios.post('searchphoto')
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    const obj = {
                        'original': response.data[i], 'thumbnail': response.data[i]  }
                    this.setState({
                        images: [...this.state.images, obj]
                    });
                }
                console.log(this.state.images.length);
            });
    }

    render() {
        if (this.state.images.length == 0) {
            return (
                <div>
                    <input type="text" name="value" value={this.state.value} onChange={this.onChange} />
                    <button onClick={this.handleClick}>Add photo</button>
                    <h1>You haven't photos</h1>
                </div>
            );
        }
        else {
            return (
                <div>
                    <ImageGallery items={this.state.images} />
                    <input type="text" name="value" value={this.state.value} onChange={this.onChange} />
                    <button onClick={this.handleClick}>Add photo</button>
                </div>
           );
        }
    }
}

//import React from 'react';
//import { render } from 'react-dom';
//import Gallery from 'react-photo-gallery';
//import Lightbox from 'react-images';
//var axios = require('axios')


//export default class App extends React.Component {
//    constructor() {
//        super();
//        this.state = { currentImage: 0 , photos:[], value:''};
//        this.closeLightbox = this.closeLightbox.bind(this);
//        this.openLightbox = this.openLightbox.bind(this);
//        this.gotoNext = this.gotoNext.bind(this);
//        this.gotoPrevious = this.gotoPrevious.bind(this)
//        this.onChange = this.onChange.bind(this);
//        this.handleClick = this.handleClick.bind(this);
//    }

//    openLightbox(event, obj) {
//        this.setState({
//            currentImage: obj.index,
//            lightboxIsOpen: true,
//        });
//    }

//    closeLightbox() {
//        this.setState({
//            currentImage: 0,
//            lightboxIsOpen: false,
//        });
//    }

//    gotoPrevious() {
//        this.setState({
//            currentImage: this.state.currentImage - 1,
//        });
//    }

//    gotoNext() {
//        this.setState({
//            currentImage: this.state.currentImage + 1,
//        });
//    }

//   onChange(e) {
//        var val = e.target.value;
//        this.setState({ [e.target.name]: e.target.value });
//    }

//    handleClick(e) {
//        e.preventDefault();
//        var obj = {};
//        obj.Path = this.state.value;
//        axios.post('addPhoto', obj);
//        this.forceUpdate();
//        document.getElementByName("photos");
//    }

//    componentWillMount() {
//        axios.post('searchphoto')
//            .then((response) => {
//                for (var i = 0; i < response.data.length; i++) {
//                    var obj = {
//                        src: response.data[i], width:3, height:1 }
//                    this.setState({
//                        photos: [...this.state.photos, obj]
//                    });
//                }
//            });
//    }

//    render() {
//        console.log(this.state.photos);
//        return (
//            <div>
//                <Gallery photos={this.state.photos} onClick={this.openLightbox} />
//                <Lightbox images={this.state.photos}
//                    onClose={this.closeLightbox}
//                    onClickPrev={this.gotoPrevious}
//                    onClickNext={this.gotoNext}
//                    currentImage={this.state.currentImage}
//                    isOpen={this.state.lightboxIsOpen}
//                />
//                <input type="text" name="value" value={this.state.value} onChange={this.onChange} />
//                <button onClick={this.handleClick}>Add photo</button>
//            </div>
//        )
//    }
//}