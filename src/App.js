import React from 'react';
// import logo from './logo.svg';
import './App.css';
import clevertap from 'clevertap-web-sdk';


function App() {
  clevertap.init('W9R-486-4W5Z')
  clevertap.privacy.push({ optOut: false });
  clevertap.privacy.push({useIP: false})
  clevertap.setLogLevel(3)
  // const enablePush = () =>{
  //   clevertap.notifications.push({
  //     "titleText":"Would you like to receive Push Notifications?",
  //     "bodyText":"We promise to only send you relevant content and give you updates on your transactions",
  //     "okButtonText":"Ok",
  //     "rejectButtonText":"Cancel",
  //     "okButtonColor":"#F28046",
  //     "askAgainTimeInSeconds":5,
  //     "serviceWorkerPath": "./firebase-messaging-sw.js"
  // });
  // }
  return (
    <div className="App">
      <div>
        <h1>Hello World</h1>
        {/* <button onClick={enablePush}> Enable Push Notification </button> */}
      </div>
    </div>
  );
}

export default App;
