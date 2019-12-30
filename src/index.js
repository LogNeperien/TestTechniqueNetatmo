import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Container, Row} from "react-bootstrap";
import DayTemperature from "../src/javascript/components/DayTemperature";
import Header from "../src/javascript/components/Header";
import ButtonStation from "../src/javascript/components/ButtonStation";

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/App.css';
import './stylesheets/index.css';

class Index extends React.Component{
	
	
	render () {	
		return (
		
		<div>
			<Header message={'STATION METEO NUMERO 15'}/>

			<ButtonStation/>

			<Row id={"widgets-wrapper"}>
				<DayTemperature xs={12} sm={12} md={12} lg={12} message={'today'}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4} message={'minimum temperature'} color={'rgb(130,130,130,1)'}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4} message={'maximum temperature'} color={'rgb(130,130,130,1)'}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4} message={'average temperature'} color={'rgb(130,130,130,1)'}/>
                <DayTemperature xs={3} sm={3} md={2} lg={2} message={'yesterday'}/>
				<DayTemperature xs={3} sm={3} md={2} lg={2} message={'two days ago'}/>
				<DayTemperature xs={3} sm={3} md={2} lg={2} message={'three days ago'}/>
				<DayTemperature xs={3} sm={3} md={2} lg={2} message={'four days ago'}/>
				<DayTemperature xs={3} sm={3} md={2} lg={2} message={'five days ago'}/>
				<DayTemperature xs={3} sm={3} md={2} lg={2} message={'six days ago'}/>
            </Row>
		</div>
		  );
	}
}

// ========================================

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
