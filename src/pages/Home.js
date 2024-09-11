import React from 'react'

// import clevertap from 'clevertap-web-sdk';

// import { useState } from 'react';

const Home = () => {

    const enablePush = () =>{
      console.log('push log')
        //   clevertap.notifications.push({
        //     "titleText":"Would you like to receive Push Notifications?",
        //     "bodyText":"We promise to only send you relevant content and give you updates on your transactions",
        //     "okButtonText":"Ok",
        //     "rejectButtonText":"Cancel",
        //     "okButtonColor":"#F28046",
        //     "askAgainTimeInSeconds":5,
        //     "serviceWorkerPath": "./firebase-messaging.js"
        // });
        }

  return (
    <div className='homeTop'>
        <h1> Hello World</h1>
        <div className='buttons'>
        <button className='webPushBtn' onClick={enablePush}> Enable Push Notification </button>
        <button className='scrollTest'> scroll</button>
        </div>
    </div>
  )
}

export default Home