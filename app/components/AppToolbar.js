import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

export default class AppToolbar extends React.Component {
    render() {
        return (
            <Paper zDepth={1}>
                <Toolbar>
                    <ToolbarGroup>
                        <ToolbarTitle text="Bookshelf" />
                    </ToolbarGroup>
                </Toolbar>
            </Paper>
        );
    }
}
