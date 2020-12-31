
import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import IRoundStats from '../../interfaces/IRoundStats';
import DatabaseService from '../../services/database-service';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

import EditRoundStatsPage from '../EditRoundStatsContainer/EditRoundStatsContainer';
import FirebaseUtils from '../../utils/firebase-utils';
import IHoleStats from '../../interfaces/IHoleStats';

class EditRoundMetaDataPage extends Component<{ dbService: DatabaseService, roundStats: IRoundStats, goHome: () => void }, { courseName: string, roundId: string, playerName: string, isEditHoles: boolean }> {


  constructor(props: any) {
    super(props);

    this.state = {
      courseName: this.props.roundStats.courseName,
      roundId: this.props.roundStats.roundId,
      playerName: this.props.roundStats.playerName,
      isEditHoles: false
    }
    // handlers
    this.handleChangeRoundId = this.handleChangeRoundId.bind(this);
    this.handleChangePlayerName = this.handleChangePlayerName.bind(this);
    this.handleChangeCourseName = this.handleChangeCourseName.bind(this);
    this.handleSaveRoundMetaData = this.handleSaveRoundMetaData.bind(this);
    this.handleToggleEditRoundStats = this.handleToggleEditRoundStats.bind(this);
    this.handleViewMetaData = this.handleViewMetaData.bind(this);
  }


  public render() {
    let content = (<div></div>);
    if (this.state.isEditHoles) {
      const holeStatsArr: IHoleStats[] = FirebaseUtils.convertObjectToArray(this.props.roundStats.stats);
      content = <EditRoundStatsPage dbService={this.props.dbService} roundKey={this.props.roundStats.key} roundNickname={this.props.roundStats.roundId} holeStatsArr={holeStatsArr} goBack={this.handleViewMetaData}></EditRoundStatsPage>
    } else {
      content = (<div>
        <div><TextField label="Round Id" value={this.state.roundId} onChange={this.handleChangeRoundId}></TextField></div>
        <div><TextField label="Name" value={this.state.playerName} onChange={this.handleChangePlayerName}></TextField></div>
        <div><TextField label="Course" value={this.state.courseName} onChange={this.handleChangeCourseName}></TextField></div>
        <div>
          <Button onClick={this.handleToggleEditRoundStats}><EditIcon></EditIcon></Button>
          <Button onClick={this.handleSaveRoundMetaData}><SaveIcon></SaveIcon></Button>
        </div>
        <div><Button onClick={this.props.goHome}><ArrowBackIcon></ArrowBackIcon></Button></div>
      </div >);
    }
    return content;
  }
  private handleChangeRoundId(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    this.setState({ roundId: event.target.value })
  }
  private handleChangePlayerName(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    this.setState({ playerName: event.target.value })
  }
  private handleChangeCourseName(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    this.setState({ courseName: event.target.value })
  }

  private async handleSaveRoundMetaData(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.props.dbService.updateRoundMetadata(this.props.roundStats.key, {
      courseName: this.state.courseName,
      roundId: this.state.roundId,
      playerName: this.state.playerName
    });
  }
  private handleToggleEditRoundStats(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState({ isEditHoles: !this.state.isEditHoles });
  }
  private handleViewMetaData() {
    this.setState({ isEditHoles: false });
  }
}

export default EditRoundMetaDataPage;
