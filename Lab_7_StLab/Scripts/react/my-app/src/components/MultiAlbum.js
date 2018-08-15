var React = require('react')
import "../resources/css/biggerPhoto/biggerPhotoStyle.css"

export default class MultiAlbum extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        debugger;
        this.props.componentWillMount(this.props.flagForCheckPageCommentsOrProfile);
        setTimeout(() => {this.props.getAlbum(this.props.activeUserId)}, 4000);
    }

    render(){
        debugger;
        if(this.props.albums.length !=0) {
            return (
                <div>
                    {this.props.albums.map(item => <a href="#" onClick={() => this.props.changeVisibleMultiAlbums(item.idAlbum)}>{item.nameAlbum}</a>)}
                </div>
            )
        }
        else {
            return (
                <div>
                    You haven't photos...
                </div>
            )
        }
    }
}