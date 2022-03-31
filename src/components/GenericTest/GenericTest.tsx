import React from 'react';
import GenericTestStyles from './GenericTest.styles'

const GenericTest: React.FC = (props) => {
    const classes = GenericTestStyles();

    return(
        <div className={classes.genericTestContainer}>
            <h1>GenericTest</h1>
        </div>
    )
}

export default GenericTest