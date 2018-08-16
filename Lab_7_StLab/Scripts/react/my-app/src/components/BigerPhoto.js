var React = require('react')
import "../resources/css/biggerPhoto/biggerPhotoStyle.css"

export default class RegistrtionForm extends React.Component {
    render(){
        debugger;
        return(
        <div className="container_big_photo">
            <div className="button_position">
                <button className="button_style" onClick={this.props.changeVisibleBiggerPhoto}>To Posts</button>
            </div>
            <img src={this.props.srcPhotoBigger} className="image_style_bigger_photo"/>
        </div>
        )
    }
}