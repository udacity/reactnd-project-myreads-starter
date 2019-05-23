import React from 'react';
import PropTypes from 'prop-types';
import SwipeableView from 'react-swipeable-views';
import ShelfTab from './ShelfTab';
import Typography from '@material-ui/core/Typography';



function TabContainer(props) {
    return (
        <Typography {...props} dir={props.dir} component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}
TabContainer.prototype = {
    children: PropTypes.node.isRequired,
};

// class TabBook extends React.Component {


//     render() {
//         const {
//             handleTabChanged,
//             handleIndexChanged,
//             handleShelfChanged,
//             currentTab,
//             shelves,
//             isLoaded,
//         } = this.props;
//         return (
//             <div>
//                 < AppTabs
//                     currentTab={currentTab}
//                     handleTabChanged={handleTabChanged}
//                     shelves={shelves}
//                 />
//                 <SwipeableView
//                     axis="x"
//                     index={currentTab}
//                     onChangeIndex={handleIndexChanged}
//                     enableMouseEvents
//                 >
//                     {shelves.map((shelf, index) => {
//                         if (currentTab === index) {
//                             return (
//                                 <TabContainer key={shelf.id}>
//                                     <ShelfTab
//                                         key={"shelf_" + shelf.id}
//                                         books={this.filterIntoShelf(shelf.id)}
//                                         shelf={shelf}
//                                         isLoaded={isLoaded}
//                                         onShelfChanged={handleShelfChanged} />
//                                 </TabContainer>
//                             )
//                         } else { return <label key={"label" + shelf.id}>Invalid Index</label> }
//                     })}
//                 </SwipeableView>
//             </div>
//         );
//     }

// }

function TabBook(props) {

    function filterIntoShelf(books, shelfId) { return books.filter(s => (s.shelf === shelfId)) }

    const {
        handleIndexChanged,
        handleShelfChanged,
        currentTab,
        shelves,
        isLoaded,
        books
    } = props;
    return (
        <SwipeableView
            axis="x"
            index={currentTab}
            onChangeIndex={handleIndexChanged}
            enableMouseEvents
        >
            {shelves.map((shelf, index) => {
                if (currentTab === index) {
                    return (
                        <TabContainer key={shelf.id}>
                            <ShelfTab
                                key={"shelf_" + shelf.id}
                                books={filterIntoShelf(books, shelf.id)}
                                shelf={shelf}
                                isLoaded={isLoaded}
                                onShelfChanged={handleShelfChanged} />
                        </TabContainer>
                    )
                } else { return <label key={"label" + shelf.id}>Invalid Index</label> }
            })}
        </SwipeableView>
    );
}

TabBook.propTypes = {
    handleIndexChanged: PropTypes.func.isRequired,
    handleShelfChanged: PropTypes.func.isRequired,
    currentTab: PropTypes.number.isRequired,
    shelves: PropTypes.array.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    books: PropTypes.array.isRequired
}

export default TabBook;