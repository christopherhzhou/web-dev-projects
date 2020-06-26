import React from 'react';
import classes from './CreateIngredient.module.css';

const createIngredient = props => {
    return (
        <div>
            <input 
                className={classes.createIngredient} 
                onChange={props.change}
                onKeyPress={props.pressed}
                value={props.value}
            />
            <button 
                className={classes.createIngredientButton}
                onClick={props.click}>
                    Add
            </button>
        </div>
    );
}

export default createIngredient;