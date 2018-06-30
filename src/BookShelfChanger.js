import React,{Component} from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component { 
    
    static propTypes = {
        shelfList: PropTypes.array.isRequired,
        selectedShelf: PropTypes.string.isRequired
    }

    state = {
        currentShelf:''
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
                items.push(<option key={shelf} value={shelf}>{shelf}</option>)                
            }
        }

        items.push(<option key="none" value="none">None</option>)
        return items;
    }

    componentDidMount() {        
        this.setState({currentShelf:this.props.selectedShelf})
    }

    onSelectedChange = (e) => {        
        this.setState({currentShelf:e.value})
    }

    render() {
        return(
            <select value={this.state.currentShelf} onChange = {this.onSelectedChange} >
                {this.renderShelfList()}
            </select>
          )
    }
}

export default BookShelfChanger