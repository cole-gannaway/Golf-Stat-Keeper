import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { Component } from 'react';
import IRoundStats from '../../interfaces/IRoundStats';
import AddIcon from '@material-ui/icons/Add';

import firebase from 'firebase';
import FireBaseConfig from '../../config/firebase.config.json'
import FirebaseUtils from '../../utils/firebase-utils';
import DatabaseService from '../../services/database-service';
import EditRoundStatsPage from '../EditRoundMetaDataPage/EditRoundMetaDataPage';

import EditRoundButton from '../EditRoundButton/EditRoundButton';
import FirebasePathBuilder from '../../services/firebase-path-builder';

// Configure Firebase.
var config = FireBaseConfig;
var app = firebase.initializeApp(config);
var db = firebase.database(app);
const dbService = new DatabaseService(db);

class Main extends Component<{}, { data: any, selectedRoundStatsId: string }> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: [],
      selectedRoundStatsId: '',
    }

    // handlers
    this.handleNewRound = this.handleNewRound.bind(this);
    this.resetSelectedRoundId = this.resetSelectedRoundId.bind(this);
    this.handleClickEditRound = this.handleClickEditRound.bind(this);
  }
  public componentDidMount() {
    // listen to updates
    const path = new FirebasePathBuilder().rootPath().createPath();
    const roundStatsRef = db.ref(path);
    roundStatsRef.on('value', (snapshot: any) => {
      const data = snapshot.val();
      this.setState({ data: data });
    });

  }

  public render() {
    // convert to arrays
    const rounds: IRoundStats[] = FirebaseUtils.convertObjectToArray(this.state.data);

    const rows = rounds.map((round, i) => {
      return (<TableRow key={'row' + i.toString()}>
        <TableCell>
          <EditRoundButton selectedRoundStatsId={round.key} onClick={this.handleClickEditRound}></EditRoundButton>
        </TableCell>
        <TableCell>
          {round.roundId}
        </TableCell>
        <TableCell>
          {round.playerName}
        </TableCell>
        <TableCell>
          {new Date(round.date).toDateString()}
        </TableCell>
      </TableRow>);
    });

    let content = (<div></div>);

    const roundStats = rounds.find(round => this.state.data[this.state.selectedRoundStatsId]);
    if (this.state.selectedRoundStatsId !== '' && roundStats) {
      content = (<EditRoundStatsPage dbService={dbService} roundStats={roundStats} goHome={this.resetSelectedRoundId} ></EditRoundStatsPage>);
    } else {
      content = (<div>
        <Button onClick={this.handleNewRound}>New <AddIcon /></Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Round</TableCell>
              <TableCell>Player</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </div>)
    }
    return (<div>
      {content}
    </div>);
  }


  private async handleNewRound(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const key = await dbService.createNewRoundStats();
    if (key) {
      this.setState({ selectedRoundStatsId: key });
    }
  }

  private resetSelectedRoundId() {
    this.setState({ selectedRoundStatsId: '' });
  }

  private handleClickEditRound(selectedRoundStatsId: string) {
    this.setState({ selectedRoundStatsId: selectedRoundStatsId });
  }
}

export default Main;
