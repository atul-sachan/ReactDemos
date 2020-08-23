import React, { Component } from 'react';
import './image-list.css'
import ImageCard from './image-card';

const ImageList = props => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    });
    // const images = props.images.map(({description, id, urls}) => {
    //     return <img key={id} src={urls.regular} alt={description}/>
    // });

    return <div className="image-list">{images}</div>
}

// class ImageList extends Component {
//     constructor(props) {
//         super(props)
        
//         this.state = { 
//             images: this.props.images.map((image)=> {return <li><img src={image.urls.regular} /></li>}) 
//         };
//         console.log(this.state.images);
//         console.log(this.props.images);
//     }

//     componentDidUpdate(){
//         this.setState({ 
//             images: this.props.images.map((image)=> {return <li><img src={image.urls.regular} /></li>}) 
//         });
//     }

//     render() {
//         return (
//             <ul>
//                 {this.state.images}
//             </ul>
//         )
//     }
// }

export default ImageList
