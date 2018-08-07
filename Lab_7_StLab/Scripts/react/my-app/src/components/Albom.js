import ImageGallery from 'react-image-gallery'
var axios = require('axios')
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css"

import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss"

import "../../node_modules/react-image-gallery/styles/scss/image-gallery-no-icon.scss"
import "../../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css"


export default class Album extends React.Component {
    constructor(props) {
        super(props);
        this.deleteButton = this.deleteButton.bind(this);
    }

    deleteButton(deleteItem){
        var obj = {};
        obj.nameImg = deleteItem;
        axios.post('deletePhoto',obj);
    }

    componentWillMount() {
        this.props.loadData();
    }

    render() {
        if (this.props.images.length == 0) {
            return (
                <div>
                    <input type="text" name="value" value={this.props.path} onChange={this.props.onChangePath()} />
                    <input type="text" name="nameImg" value={this.props.nameImg} onChange={this.props.onChangeNameImage()} />
                    <button onClick={this.props.handleClick()}>Add photo</button>
                    <h1>You haven't photos</h1>
                </div>
            );
        }
        else {
            return (
                <div>
                    <ImageGallery items={this.props.images} />
                    <div>
                        <input type="text" name="value" value={this.props.path} onChange={this.props.onChangePath(this.props.path)} />
                        <input type="text" name="nameImg" value={this.props.nameImg} onChange={this.props.onChangeNameImage(this.props.nameImg)} />
                        <button onClick={this.props.handleClick}>Add photo</button>
                    </div>
                    <div>
                        <input type="text" name="deleteItem" value={this.props.deleteItem} onChange={this.props.onChangeDeleteItem(this.props.deleteItem)} />
                        <button onClick={this.deleteButton}>Delete photo</button>
                    </div>
                </div>
           );
        }
    }
}