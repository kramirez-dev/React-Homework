import React from 'react'
import Navbar from './nabvar';

function NotFound() {
    return (
        <div>
            <Navbar></Navbar>
            <center><img className="m-4" src="https://http.cat/404" style={{ width:'60%' }}></img></center>
        </div>
    )
}

export default NotFound