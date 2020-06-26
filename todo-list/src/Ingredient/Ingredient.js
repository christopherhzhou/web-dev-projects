import React from 'react';
import classes from './Ingredient.module.css'; // classes obj working!

// props: create (bool), changed, checked, name, delete, mouseOver, mouseOut
const ingredient = props => {
    let ingClasses = [classes.ingredient];
    let ingNameClasses = [classes.ingredientName];

    if (props.init) {
        ingNameClasses.push(classes.init);
    }
    else if (props.create) {
        ingNameClasses.push(classes.nameCreate);
    }

    if (props.checked) {
        ingNameClasses.push(classes.done);
    }

    const delButtonClasses = props.create || props.hideDelete ? classes.hideDelButton : classes.showDelButton;

    return (
        <div 
            className={ingClasses.join(' ')}
            onMouseOver={props.mouseOver}
            onMouseOut={props.mouseOut}>
                <input 
                    type="checkbox" 
                    onChange={props.changed}
                    disabled={props.create} 
                    checked={props.checked}
                    className={classes.checkbox}
                    id="ing-checkbox" />
                <label className={ingNameClasses.join(' ')}>
                    {props.name}
                </label>
                <button 
                    onClick={props.delete} 
                    className={delButtonClasses}>Delete
                </button>
        </div>
    );
}

export default ingredient;