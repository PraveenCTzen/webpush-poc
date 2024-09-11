import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import { WebRoutes } from './WebRoutes';
import OneSignal from 'react-onesignal';
// import clevertap from 'clevertap-web-sdk';


function App() {
  
  const [initialized, setInitialized] = useState(false);
  OneSignal.init({ appId: '2fc4c79b-5bf1-49d6-9bae-889cf6ea486a' }).then(() => {
    setInitialized(true);
    OneSignal.Slidedown.promptPush();
  })
  OneSignal.Slidedown.promptPush();

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
    <WebRoutes/>
    // <div className="App">
    //   <div>
    //     <h1>Hello World</h1>
    //     {/* <button onClick={enablePush}> Enable Push Notification </button> */}
    //   </div>
    // </div>
  );
}

export default App;
