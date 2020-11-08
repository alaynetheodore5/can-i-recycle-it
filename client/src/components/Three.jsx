import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Three = props => {

    return (    
        <div className="bg-light">
            <h1>How to recycle: use these three rules to recycle right</h1>
            <p>Its time to get back to the basics. The fact is that some recycling actions make a bigger impact than others. So please remember these three basic rules the next time you recycle.  </p>
        <div className="big-three">
            <img src="/Images/what-to-recycle.png" alt="what to recycle"/>
            <h2>Recycle clean bottles, cans, paper and cardboard.</h2>
        </div>
        <div className="big-three">
            <img src="/Images/no-food-recycling-illustration.png" alt=""/>
            <h2>Keep food and liquid out of your recycling.</h2>
        </div>        
        <div className="big-three">
            <img src="/Images/no-plastic-recycling-illustration.png" alt=""/>
            <h2>No loose plastic bags and no bagged recyclables.</h2>
        </div>
        </div>
    )
}

export default Three;