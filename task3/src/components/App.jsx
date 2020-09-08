import React from 'react';
import './App.css';

const App = () => {
    return (
        <>
            <div className="header">
                <h1 className="logotype"><strong>Netflix</strong>Roulette</h1>
                <button className="header__add-movie">+ Add Movie</button>
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
            <div className="main">
                <div className="main__topbar">
                    <nav className="main__topbar__nav">
                        <ul>
                            <li><a href="#">All</a></li>
                            <li><a href="#">Documentary</a></li>
                            <li><a href="#">Comedy</a></li>
                            <li><a href="#">Horror</a></li>
                            <li><a href="#">Crime</a></li>
                        </ul>
                    </nav>
                    <div className="main__topbar__sort">
                        <form>
                            <label>Sort by</label>
                            <select>
                                <option>Release date</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="main__result">
                    <p><strong>39</strong> movies found</p>
                </div>
                <div className="main__movies-list">
                    <div className="main__movies-list__movie">
                        <img className="main__movies-list__movie__cover" src="pulp_fiction_cover.jpg" />
                        <div className="main__movies-list__movie__info">
                            <h2>Pulp Fiction</h2>
                            <p className="main__movies-list__movie__info--meta">Action & Adventure</p>
                            <p className="main__movies-list__movie__info--year">2004</p>
                        </div>
                    </div>
                    <div className="main__movies-list__movie">
                        <img className="main__movies-list__movie__cover" src="pulp_fiction_cover.jpg" />
                        <div className="main__movies-list__movie__info">
                            <h2>Pulp Fiction</h2>
                            <p className="main__movies-list__movie__info--meta">Action & Adventure</p>
                            <p className="main__movies-list__movie__info--year">2004</p>
                        </div>
                    </div>
                    <div className="main__movies-list__movie">
                        <img className="main__movies-list__movie__cover" src="pulp_fiction_cover.jpg" />
                        <div className="main__movies-list__movie__info">
                            <h2>Pulp Fiction</h2>
                            <p className="main__movies-list__movie__info--meta">Action & Adventure</p>
                            <p className="main__movies-list__movie__info--year">2004</p>
                        </div>
                    </div>
                    <div className="main__movies-list__movie">
                        <img className="main__movies-list__movie__cover" src="pulp_fiction_cover.jpg" />
                        <div className="main__movies-list__movie__info">
                            <h2>Pulp Fiction</h2>
                            <p className="main__movies-list__movie__info--meta">Action & Adventure</p>
                            <p className="main__movies-list__movie__info--year">2004</p>
                        </div>
                    </div>
                    <div className="main__movies-list__movie">
                        <img className="main__movies-list__movie__cover" src="pulp_fiction_cover.jpg" />
                        <div className="main__movies-list__movie__info">
                            <h2>Pulp Fiction</h2>
                            <p className="main__movies-list__movie__info--meta">Action & Adventure</p>
                            <p className="main__movies-list__movie__info--year">2004</p>
                        </div>
                    </div>
                    <div className="main__movies-list__movie">
                        <img className="main__movies-list__movie__cover" src="pulp_fiction_cover.jpg" />
                        <div className="main__movies-list__movie__info">
                            <h2>Pulp Fiction</h2>
                            <p className="main__movies-list__movie__info--meta">Action & Adventure</p>
                            <p className="main__movies-list__movie__info--year">2004</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p><strong>Netflix</strong>Roulette</p>
            </div>
        </>
    );
}

export default App;