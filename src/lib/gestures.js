import {GestureDescription, Finger, FingerCurl, FingerDirection} from 'fingerpose';


export const OpenPalmGesture = new GestureDescription('open_palm');

for (const finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    console.log(finger);
    OpenPalmGesture.addCurl(finger, FingerCurl.NoCurl);
    OpenPalmGesture.addDirection(finger, FingerDirection.VerticalUp);
}
