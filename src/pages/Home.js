import React from 'react'

import clevertap from 'clevertap-web-sdk';

// import { useState } from 'react';

const Home = () => {

    const enablePush = () =>{
      console.log('push log');
        //   clevertap.notifications.push({
        //     "titleText":"Would you like to receive Push Notifications?",
        //     "bodyText":"We promise to only send you relevant content and give you updates on your transactions",
        //     "okButtonText":"Ok",
        //     "rejectButtonText":"Cancel",
        //     "okButtonColor":"#F28046",
        //     "askAgainTimeInSeconds":5,
        //     "serviceWorkerPath": "./firebase-messaging-sw.js"
        // });
        }

  return (
    <div>
        <h1> Hello World</h1>
        <button onClick={enablePush}> Enable Push Notification </button>
    </div>
  )
}

export default Home