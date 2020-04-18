import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export class HomePage extends Component {
    state = {
        movie: []
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES' });
    }


    render() {
        return (
            <div>
                <h1>WELCOME HOME</h1>
                {this.props.movies.map(movie =>
                    <li>
                        <img src={movie.poster} alt={movie.id} />
                    </li>
                )}
            </div>
        )
    }
}




const putPropsOnReduxStore = (reduxStore) => ({
    movies: reduxStore.movies,
});



export default withRouter(connect(putPropsOnReduxStore)(HomePage));