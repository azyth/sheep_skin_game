import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerBoard from './player_board';

class GameBoard extends Component {


    styles = {
        board: {
            position: 'relative'
        }
    }
    render() { 
        return ( 
            <div style={this.styles.board}>
                <PlayerBoard styles={this.styles.q01} quadrant={1} player={1}></PlayerBoard>
                <PlayerBoard styles={this.styles.q02} quadrant={2} player={2}></PlayerBoard>
                <PlayerBoard styles={this.styles.q03} quadrant={3} player={3}></PlayerBoard>
                <PlayerBoard styles={this.styles.q04} quadrant={4} player={4}></PlayerBoard>
            </div>
         );
    }
}
const mapStateToProps = state => state

export default connect()(GameBoard);