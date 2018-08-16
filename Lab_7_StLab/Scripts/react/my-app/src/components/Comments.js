import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import '../resources/css/comments/commentsStyle.css'

export default class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [], idPost:this.props.idPost, currentImage: 0, author: [], comment:""};
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this)
    }

    componentDidMount() {
        this.props.componentDidMount(this.props.idPost);
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    componentWillUnmount(){
        this.props.returnInInitialState();
    }

    render() {
        if(this.props.isRegistrationUser != false) {
            return (
                <div className="commentsStyle">
                    {this.props.author.map(item => <div><div className="span_margin"><span className="span_style_mini">Author name: {item.authorName}</span></div>
                        <Gallery photos={item.pathToPage} onClick={this.openLightbox}/>
                        <Lightbox images={item.pathToPage}
                                  onClose={this.closeLightbox}
                                  onClickPrev={this.gotoPrevious}
                                  onClickNext={this.gotoNext}
                                  currentImage={this.props.currentImage}
                                  isOpen={this.state.lightboxIsOpen}
                        /></div>)}
                    {this.props.data.map(item => <div><span>{item.author}</span>
                        <p>{item.text}</p></div>)}
                    <div>
                        <div className="change_position_input">
                            <input className="edit_input" type="text" name="comment" value={this.props.comment}
                                   onChange={this.props.onChange}/><br/><br/>
                        </div>
                        <div className="change_position_button">
                            <button className="edit_button"
                                    onClick={() => this.props.addComment(this.props.idPost, this.props.comment, this.props.idActiveUser)}>Add
                                comment
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                    <div className="change_location_buttons"><button className="button_style_not_authorization_user" onClick={()=>{this.props.changeVisibleCommentsFromNotAuthorization()}}>Return to posts</button></div>
                    <button className="button_style_not_authorization_user" onClick={()=>this.props.changeVisibleAuthorization()}>Registration</button>
                    <div className="commentsStyle">
                        {this.props.author.map(item => <div><div className="span_margin"><span className="span_style_mini">Author name: {item.authorName}</span></div>
                            <Gallery photos={item.pathToPage} onClick={this.openLightbox}/>
                            <Lightbox images={item.pathToPage}
                                      onClose={this.closeLightbox}
                                      onClickPrev={this.gotoPrevious}
                                      onClickNext={this.gotoNext}
                                      currentImage={this.props.currentImage}
                                      isOpen={this.state.lightboxIsOpen}
                            /></div>)}
                        {this.props.data.map(item => <div><span>{item.author}</span>
                            <p>{item.text}</p></div>)}
                    </div>
                </div>
            )
        }
    }
}

