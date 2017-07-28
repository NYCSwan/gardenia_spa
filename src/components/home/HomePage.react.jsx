import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import history from '../../history';
import { auth, database } from '../core/firebase';

import Journal from '../journal/Journal.react';
import Notes from '../note/Notes.react';
import NewNote from '../note/NewNote.react';
import Plants from '../plant/Plants.react';

import './HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Homepage'
    };

    this.journalRef = database.ref('/journal');
    this.notesRef = database.ref('/notes');
    this.plantsRef = database.ref('/plants');
  }

  componentDidMount() {
    this.notesRef.on('value', snapshot => {
      console.log('component mounted! Doooope');
      console.log(`HomePage: ${snapshot.val()}`);
      this.setState({
        notes: snapshot.val()
      });
    });
  }

  componentWillUnmount() {}

  render() {
    const { currentUser, notes, notesRef, title } = this.state;

    return (
      <div className="homePage-container">
        <h1 className="page-title">
          {title}
        </h1>
        <Plants />
      </div>
    );
  }
}

HomePage.propTypes = {
  currentUser: PropTypes.object,
  journalRef: PropTypes.object,
  plantsRef: PropTypes.object,
  notesRef: PropTypes.object,
  notes: PropTypes.object
};

export default HomePage;
