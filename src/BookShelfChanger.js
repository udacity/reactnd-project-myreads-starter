import React,{Component} from 'react'

    

class BookShelfChanger extends Component {    

    state ={
        shelfList:[],
        selectedValue:''
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
                if(shelf === this.props.selectedValue){
                    items.push(<option key={shelf} value={shelf} selected>{shelf}</option>)
                }
                else
                    items.push(<option key={shelf} value={shelf}>{shelf}</option>)
            }
        }

        items.push(<option key="none" value="none">None</option>)
        return items;
    }

    componentDidMount(){        
        this.setState({shelfList:this.props.shelfList})
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