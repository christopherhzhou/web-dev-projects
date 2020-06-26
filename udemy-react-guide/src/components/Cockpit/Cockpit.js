import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request...
        setTimeout(() => {
            alert('Saved data to cloud')
        }, 1000)
    }, []);

    const assignedClasses = [];
    let btnClasses = '';
    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>I am a React app</h1>
            <p className={assignedClasses.join(' ')}>Woah, react is cool!</p>
            <button className={btnClasses} 
                onClick={props.clicked}>Toggle persons</button>
        </div>
        
    );
};

export default cockpit;