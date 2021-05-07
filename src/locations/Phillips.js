import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';

const Phillips = () =>  {
    return (
        <div className = "Phillips">
            <h1>Phillips Hall</h1>
            <Picture height = '600'url = "https://images.squarespace-cdn.com/content/v1/5a25412ba9db090486f68573/1543501056974-IE96J0MP58OJJ6A93YCQ/ke17ZwdGBToddI8pDm48kB7ALyYGH1q6f1spk2spnOd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfCndZuQbC_QZStuee8ixpSyXao8kgrqUMyYNEpejwFP4Widr0EGKtyyKjwFAjwJJQ/Phillips-01web.jpg" alt = "Phillips"></Picture>
            <p>Phillips Hall opened in 1919 and honored three members of the Phillips family who taught at the university during the nineteenth century. It's home to all things Math, Physics and Astronomy and sits right on West Cameron Avenue. </p>
            <Links location1 = "/CarolinaInn" location2 ="/Ackland" title1="Carolina Inn" title2 = "Ackland Art Museum"></Links>
            <Rameses id = '8'></Rameses>
        </div>
    );
}

export default Phillips; 
