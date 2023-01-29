import React from 'react';
import PhotoEntry from './PhotoEntry';

class AlbumMaker extends React.Component {
    render()
    {
        return(
            <div className="flex-container">
                <PhotoEntry src="Berlin.jpg" location="Berlin, Germany" caption="Heart of Europe" /> 
                <PhotoEntry src="Beverly-hills.jpg" location="Beverly Hills, USA" caption="Southern California"/> 
                <PhotoEntry src="Maple-leaf.jpg" location="Toronto, Canada" caption="Autumn" /> 
                <PhotoEntry src="San-francisco.jpg" location="San Francisco, USA" caption="Wanderlust" /> 
                <PhotoEntry src="Kona.jpg" location="Kona, Hawaii, USA" caption="Deep Thought" /> 
                <PhotoEntry src="London.jpg" location="London, UK" caption="Trafalgar Square" />
            </div>
        )
    }
}

export default AlbumMaker;