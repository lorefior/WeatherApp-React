import React, {Component} from 'react';
import { createStore } from 'redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/WeatherLocation/LocationList';
import ForecastExtended from './components/WeatherLocation/ForecastExtended';
import './App.css';

const cities =[
  'Córdoba,AR',
  'Buenos Aires,AR',
  'Kemi,FI',
  'Toronto,CA',
  'Auckland,NZ',
  'Sidney,AU',
  'Miami,US',
  'Milan,IT'
];

const store = createStore(() => {}, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const setCity = value =>  ({ type: 'setCity', value});

class App extends Component {
  constructor(){
    super();
    this.state ={ city:null}
  }

 handleSelectionLocation = city => {
   this.setState({city});
   console.log(`city:   ${city}`);
   store.dispatch(setCity(city));
 }

 render() {
   const {city} = this.state;
   return (

     <Grid>
       <Row>
         <AppBar position='sticky' color="secondary">
           <Toolbar>
             <Typography color='inherit'>
               Weather App LoreFior
             </Typography>
           </Toolbar>
         </AppBar>
       </Row>
       <Row>
           <Col xs={12} md={6}>
            <LocationList 
               cities={cities}
               onSelectedLocation={this.handleSelectionLocation}>

            </LocationList>
           </Col>
           <Col xs={12} md={6}>
             <Paper elevation={4}>
               {city   &&
                 <ForecastExtended city={city}></ForecastExtended> }
               </Paper>
           </Col>
       </Row>

    </Grid>
    
    
   );
 }
}
export default App;
