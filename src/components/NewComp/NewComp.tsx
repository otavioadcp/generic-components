import React from 'react';
import NewCompStyles from './NewComp.styles'

const NewComp: React.FC = (props) => {
    const classes = NewCompStyles();

    return(
        <div className={classes.newCompContainer}>
            <h1>NewComp</h1>
        </div>
    )
}

export default NewComp