import React from 'react';
import { Zoom, Fab } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from 'prop-types';


function FabSearch(props) {
    const { isShown, href } = props;
    return (<Zoom
        key="primary"
        in={isShown}
        unmountOnExit
    >
        <Fab
            style={{
                position: 'sticky',
                bottom: 16 * 2,
                right: 16 * 2
            }}
            color="primary"
            href={href}
        >
            <SearchIcon />
        </Fab>
    </Zoom>
    )
}

FabSearch.propTypes = {
    isShown: PropTypes.bool.isRequired,
    href: PropTypes.string.isRequired
}

export default FabSearch;