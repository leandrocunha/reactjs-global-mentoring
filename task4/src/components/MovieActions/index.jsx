import React, { PureComponent } from 'react';
import './style.css';

class MovieActions extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { showOptions: false };
        this.toggleOptions = this.toggleOptions.bind(this);        
    }

    toggleOptions() {
        const { showOptions } = this.state; 
        this.setState({ showOptions: !showOptions });
    }

    render() {
        const { showOptions } = this.state;
        const { deleteAction, editAction } = this.props;

        return (
            <div className="main__movies-list__movie__actions">
                <button onClick={this.toggleOptions}>
                    <span>...</span>
                </button>
                {
                    showOptions &&
                        <ul className="main__movies-list__movie__actions__options">
                            <li className="close">
                                <a href="#" onClick={this.toggleOptions}>X</a>
                            </li>
                            <li><a href="#" onClick={() => editAction()}>Edit</a></li>
                            <li><a href="#" onClick={() => deleteAction()}>Delete</a></li>
                        </ul>
                }
            </div>
        );
    }
}

export default MovieActions;