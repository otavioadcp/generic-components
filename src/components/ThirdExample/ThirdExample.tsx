import React from 'react';
import ThirdExampleStyles from './ThirdExample.styles'

const ThirdExample: React.FC = (props) => {
    const classes = ThirdExampleStyles();

    return(
        <div className={classes.thirdExampleContainer}>
            <h1>ThirdExample</h1>
        </div>
    )
}

export default ThirdExample