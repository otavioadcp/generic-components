import React from 'react';
import FirstExampleStyles from './FirstExample.styles'

const FirstExample: React.FC = (props) => {
    const classes = FirstExampleStyles();

    return(
        <div className={classes.firstExampleContainer}>
            <h1>FirstExample</h1>
        </div>
    )
}

export default FirstExample