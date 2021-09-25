import React, { useState } from 'react';

export default ( {createTask} ) => {
    const [description, setDescription] = useState(undefined);
    const [disabledInput, setDisabledInput] = useState(true);
    const handleSubmit = e => {
        e.preventDefault();
        if(description !== undefined && description !== '') {
          createTask(description);
        }
    }
    const handleChange = e => {
        setDescription(e.target.value);
        if(e.target.value !== undefined && e.target.value !== '') {
          setDisabledInput(false);
        } else {
          setDisabledInput(true);
        }
    }
    return (
        <div>
            <h2>Please enter a new task</h2>
            <form onSubmit={ e => handleSubmit(e) }>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea 
                    className="form-control" id="description" 
                    onChange={ e => handleChange(e) }></textarea>    
                </div>
                <br />
                <button type="submit" className="btn btn-primary" disabled={disabledInput}>Submit</button>
            </form>
        </div>
    );
}
