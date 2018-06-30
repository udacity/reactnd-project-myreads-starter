import React,{Component} from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component { 
    
    static propTypes = {
        shelfList: PropTypes.array.isRequired,
        selectedShelf: PropTypes.string.isRequired
    }
       
    renderShelfList() 
    {
        let items = []
        let shelfs = new Set(this.props.shelfList)

        items.push(<option key="move" value="move" disabled>Move to...</option>)     
        if(this.props.shelfList === undefined || this.props.shelfList === [])
        {
            return;
        }
        else {        
            for(let shelf of shelfs)
            {
                if(shelf === this.props.selectedShelf){
                    items.push(<option key={shelf} value={shelf} selected>{shelf}</option>)
                }
                else
                    items.push(<option key={shelf} value={shelf}>{shelf}</option>)
            }
        }

        items.push(<option key="none" value="none">None</option>)
        return items;
    }

    render() {
        return(
            <select>
                {this.renderShelfList()}
            </select>
          )
    }
}

export default BookShelfChanger