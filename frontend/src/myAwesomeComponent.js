import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
function blabla(event){
    console.log(event);
    console.log("bla");
}
const MyAwesomeReactComponent = () => (
    <RaisedButton
        onClick={blabla}
        label="Default" />
);

export default MyAwesomeReactComponent;
