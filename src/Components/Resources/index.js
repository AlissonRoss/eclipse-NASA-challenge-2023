import React from "react";

export default function Resources() {

    return (
        <div className="App-resources" id='resources'>
            <div>
            <h3>Resources</h3>
                <ul>
                    <li> <a href='https://science.nasa.gov/eclipses/' style={{ color: 'white', fontSize: '16px'}}>Eclipses</a></li>
                    <li> <a href='https://science.nasa.gov/eclipses/safety/' style={{ color: 'white', fontSize: '16px'}}>Eclipse Safety</a></li>
                    <li> <a href='https://svs.gsfc.nasa.gov/14143#media_group_83344' style={{ color: 'white', fontSize: '16px'}}>Lunar Eclipses</a></li>
                    <li> <a href='https://science.nasa.gov/earth/facts/' style={{ color: 'white', fontSize: '16px'}}>Facts about Earth</a></li>
                    <li> <a href='https://science.nasa.gov/eclipses/faq/' style={{ color: 'white', fontSize: '16px'}}>Eclipses FAQ</a></li>
                </ul>           
            </div>
        </div>
    );
}