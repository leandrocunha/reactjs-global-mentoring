import React from 'react';
import './style.css'; 

const AddMovie = () => {
    return (
        <>
            <h3>Add Movie</h3>
            <form className="form">
                <div className="form-group">
                    <label>Ttitle</label>
                    <input placeholder="Movie Title here" type="text" />
                </div>
                <div className="form-group">
                    <label>Release date</label>
                    <input placeholder="Select Date" type="text" />
                </div>
                <div className="form-group">
                    <label>Movie URL</label>
                    <input placeholder="Movie URL here" type="text" />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input placeholder="Select Genre" type="text" />
                </div>
                <div className="form-group">
                    <label>Overview</label>
                    <input placeholder="Overview here" type="text" />
                </div>
                <div className="form-group">
                    <label>Runtime</label>
                    <input placeholder="Runtime here" type="text" />
                </div>
                <div className="form-group form-group--footer">
                    <button>Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default AddMovie;