import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionMultiAlbum"
import MultiAlbum from "../components/MultiAlbum"


class containerMultiAlbum extends React.Component{
    render(){
        debugger;
        return(
            <div>
                {this.props.isVisibleMultiAlbums && <MultiAlbum addAlbum={this.props.addAlbum} changeNewAlbumName={this.props.changeNewAlbumName} nameOfNewAlbum={this.props.nameOfNewAlbum} returnInInitialState={this.props.returnInInitialState} flagForCheckPageCommentsOrProfile={this.props.flagForCheckPageCommentsOrProfile} componentWillMount={this.props.componentWillMount} activeUserId={this.props.activeUserId} getAlbum={this.props.getAlbum} albums={this.props.albums} changeVisibleMultiAlbums={this.props.changeVisibleMultiAlbums}></MultiAlbum>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default connect (mapStateToProps, actionCreators)(containerMultiAlbum);