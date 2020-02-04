import React from 'react'

class Shelfs extends React.Component{ 
    render() {
        const { shelfKey, shelfNames } = this.props;
        console.log ( 'my shelf =>' + shelfKey)
        return(
            <div className =' bookshelf'>
                <h2 className ='bookshelf-title' > {shelfNames }</h2>

            </div>
        )

    }

}

export default Shelfs