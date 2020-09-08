import React from 'react';

const Header = ({ addMovie }) => {
    return (
        <div className="header">
            <h1 className="logotype"><strong>Netflix</strong>Roulette</h1>
            <button className="header__add-movie" onClick={() => addMovie()}>+ Add Movie</button>
            <div className="header__search">
                <form className="header__search__form">
                    <div className="header__search__form__form-group">
                        <label>Find your movie</label>
                        <input type="text" placeholder="What do you want to watch?" />
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Header;