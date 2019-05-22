import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';


class AppTabs extends Component {

    render() {
        const { currentTab, handleTabChanged, shelves } = this.props;
        return (
            <AppBar position="static" color="default" >
                <Tabs
                    value={currentTab}
                    onChange={handleTabChanged}
                    centered={true}
                    indicatorColor="primary"
                    variant="fullWidth"
                >
                    {shelves.map(shelf => (
                        <Tab
                            key={shelf.id}
                            label={shelf.label}
                            to={"/" + shelf.label.replace(" ", "").toLowerCase()}
                        />
                    ))}
                </Tabs>
            </AppBar>
        );
    }

}
AppTabs.propTypes = {
    currentTab: PropTypes.number.isRequired,
    handleTabChanged: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
}
export default AppTabs;