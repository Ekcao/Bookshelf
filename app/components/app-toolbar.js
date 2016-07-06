import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

export default class AppToolbar extends React.Component {
    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle text="Bookshelf" />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
