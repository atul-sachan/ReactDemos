import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './search-bar';
import ImageList from './image-list';


class App extends Component {
    
    constructor(){
        super();
        this.state ={ images: []};
        // this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    // onSearchSubmit(term){
    //     //console.log(term);
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query: term},
    //         headers:{
    //             Authorization: 'Client-ID vYLIhogduscsV04L25z4S7527Ak4hgRVBwTV9ke02rg'
    //         }
    //     }).then((response)=>{
    //         console.log(response.data);
    //     });
    // }

    // async onSearchSubmit(term){
    //     //console.log(term);
    //     const response = await axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query: term},
    //         headers:{
    //             Authorization: 'Client-ID vYLIhogduscsV04L25z4S7527Ak4hgRVBwTV9ke02rg'
    //         }
    //     });
    //     this.setState({images: response.data.results});
    // }

    onSearchSubmit = async (term)=>{
        //console.log(term);
        const response = await unsplash.get('/search/photos',{
            params: {query: term, per_page: 50, page:1}
        });
        this.setState({images: response.data.results});
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App
