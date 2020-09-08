import React, { PureComponent } from 'react';
import AddMovie from './AddMovie';
import DeleteMovie from './DeleteMovie';
import EditMovie from './EditMovie';
import Header from './Header';
import MovieActions from './MovieActions';
import './App.css';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
        this.toggleModal = this.toggleModal.bind(this);
        this.getModalChild = this.getModalChild.bind(this);
    }

    getModalChild(action) {
        switch (action) {
            case 'addMovie':
                return AddMovie;
            case 'editMovie':
                return EditMovie;
            case 'deleteMovie':
                return DeleteMovie;
            default:
                return null;
        }
    }

    toggleModal(action) {
        const { showModal } = this.state;
        this.setState({ showModal: !showModal, modalChild: action });
    }

    render() {
        const { modalChild, showModal } = this.state;
        const ModalChildCpt = this.getModalChild(modalChild);

        return (
            <>
                <Header addMovie={() => this.toggleModal("addMovie")} />
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
                            <MovieActions deleteAction={() => this.toggleModal("deleteMovie")} editAction={() => this.toggleModal("editMovie")} />
                        </div>
                        <div className="main__movies-list__movie">
                            <img className="main__movies-list__movie__cover" src="pulp_fiction_cover.jpg" />
                            <div className="main__movies-list__movie__info">
                                <h2>Pulp Fiction</h2>
                                <p className="main__movies-list__movie__info--meta">Action & Adventure</p>
                                <p className="main__movies-list__movie__info--year">2004</p>
                            </div>
                            <MovieActions />
                        </div>
                        <div className="main__movies-list__movie">
                            <img className="main__movies-list__movie__cover" src="pulp_fiction_cover.jpg" />
                            <div className="main__movies-list__movie__info">
                                <h2>Pulp Fiction</h2>
                                <p className="main__movies-list__movie__info--meta">Action & Adventure</p>
                                <p className="main__movies-list__movie__info--year">2004</p>
                            </div>
                            <MovieActions />
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
                {
                    showModal &&
                        <div className="modal">
                            <div className="modal__overlay">
                                <div className="modal__overlay__header">
                                    <button className="close" onClick={this.toggleModal}>X</button>
                                </div>
                                <div className="modal__overlay__body">
                                    <ModalChildCpt />
                                </div>
                            </div>
                        </div>
                }
            </>
        );
    }
}

export default App;