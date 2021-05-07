//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './locations/HomePage.js';
import {Link} from 'react-router-dom'
import Map from './locations/Map';
import axios from 'axios';
import YoutubeAPI from './locations/YoutubeAPI';
import Search from './locations/Search';
import VideoList from './locations/VideoList';
import Videoplayer from './locations/Videoplayer';


import Other from './locations/Other'
import Morehead from './locations/Morehead.js';
import OldWell from './locations/OldWell.js';
import UpperQuad from './locations/UpperQuad.js';
import HanesArt from './locations/HanesArt.js';
import SupDogs from './locations/SupDogs.js';
import Ackland from './locations/Ackland.js';
import CarolinaInn from './locations/CarolinaInn';
import Phillips from './locations/Phillips';
import Sitterson from './locations/Sitterson';
import HanesHall from './locations/HanesHall';
import BellTower from './locations/BellTower';
import Wilson from './locations/Wilson';
import PolkPlace from './locations/PolkPlace';
import Kenan from './locations/Kenan';
import DeanDome from './locations/DeanDome';
import RamsHead from './locations/RamsHead';
import Chase from './locations/Chase';
import UL from './locations/UL';
import ThePit from './locations/ThePit';
import StudentStore from './locations/StudentStore';
import Davis from './locations/Davis';
import Lenoir from './locations/Lenoir';
import Hamilton from './locations/Hamilton';
import Arboretum from './locations/Arboretum';

window.$id = Math.floor(Math.random()*24 +1);

class App extends Component{
  state = {
    videosMetaInfo: [],
    selectedVideoId: null
  };

  onVideoSelected = videoId => {
    this.setState({
      selectedVideoId:videoId
    })
  }

  onSearch = async keyword => {
    const response = await YoutubeAPI.get("/search", {
      params: {
        q: keyword
      }
    });
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    });
    console.log(this.state);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">
            <h1>Explore Chapel Hill!</h1>
          </Link>
          <Switch>
            <Route path = "/" exact component = {HomePage}></Route>
            <Route path = "/OldWell" component = {OldWell}></Route>
            <Route path = "/Morehead" component = {Morehead}></Route>
            <Route path = "/UpperQuad" component = {UpperQuad}></Route>
            <Route path = "/HanesArt" component = {HanesArt}></Route>
            <Route path = "/SupDogs" component = {SupDogs}></Route>
            <Route path = "/Ackland" component = {Ackland}></Route>
            <Route path = "/CarolinaInn" component = {CarolinaInn}></Route>
            <Route path = "/Phillips" component = {Phillips}></Route>
            <Route path = "/Sitterson" component = {Sitterson}></Route>
            <Route path = "/HanesHall" component = {HanesHall}></Route>
            <Route path = "/BellTower" component = {BellTower}></Route>
            <Route path = "/Wilson" component = {Wilson}></Route>
            <Route path = "/PolkPlace" component = {PolkPlace}></Route>
            <Route path = "/Kenan" component = {Kenan}></Route>
            <Route path = "/DeanDome" component = {DeanDome}></Route>
            <Route path = "/RamsHead" component = {RamsHead}></Route>
            <Route path = "/Chase" component = {Chase}></Route>
            <Route path = "/UL" component = {UL}></Route>
            <Route path = "/ThePit" component = {ThePit}></Route>
            <Route path = "/StudentStore" component = {StudentStore}></Route>
            <Route path = "/Davis" component = {Davis}></Route>
            <Route path = "/Lenoir" component = {Lenoir}></Route>
            <Route path = "/Hamilton" component = {Hamilton}></Route>
            <Route path = "/Arboretum" component = {Arboretum}></Route>
            <Route path = "/Other" component = {Other}></Route>
          </Switch>
          
          <Search onSearch ={this.onSearch}></Search>
          <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosMetaInfo}
          />
          <Videoplayer videoId ={this.state.selectedVideoId}></Videoplayer>
          
        </div>
      </Router>
    );
  }
}

export default App;
