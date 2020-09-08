import React from 'react';
import './style.css'; 

const EditMovie = () => {
    return (
        <>
            <h3>Edit Movie</h3>
            <form className="form">
                <div className="form-group">
                    <label>Ttitle</label>
                    <input defaultValue="Movie Title here" type="text" />
                </div>
                <div className="form-group">
                    <label>Release date</label>
                    <input defaultValue="Select Date" type="text" />
                </div>
                <div className="form-group">
                    <label>Movie URL</label>
                    <input defaultValue="Movie URL here" type="text" />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input defaultValue="Select Genre" type="text" />
                </div>
                <div className="form-group">
                    <label>Overview</label>
                    <input defaultValue="Overview here" type="text" />
                </div>
                <div className="form-group">
                    <label>Runtime</label>
                    <input defaultValue="Runtime here" type="text" />
                </div>
                <div className="form-group form-group--footer">
                    <button>Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default EditMovie;