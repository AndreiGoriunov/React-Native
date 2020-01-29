import React, {Component} from 'react';


class HtmlGarageParser extends Component {


   render(){
       updateList();
       return null;
   }

}

async function updateList() {
    try {
        let response = await fetch(
            'http://secure.parking.ucf.edu/GarageCount/',
        );
        let responseText = await response.text();
        console.log(responseText);
    } catch (error) {
        console.error(error);
    }
}

export default HtmlGarageParser;