import React from 'react';
import SecondExampleStyles from './SecondExample.styles'

const SecondExample: React.FC = (props) => {
    const classes = SecondExampleStyles();

    return(
        <div className={classes.secondExampleContainer}>
            <h1>SecondExample</h1>
        </div>
    )
}

export default SecondExample