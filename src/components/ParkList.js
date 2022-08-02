import React from 'react';
import axios from 'axios';

export default class ParkList extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=YOUR_API_KEY_HERE`
      )
      .then((res) => {
        const parks = res.data;
        console.log(parks);
      });
  }

  render() {
    return <h1>Example</h1>;
  }
}
