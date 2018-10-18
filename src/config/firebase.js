import firebase from "firebase/app";
import "firebase/storage";

var config = {
	apiKey: "AIzaSyC86DGjFrqzyTaYhLwj-5J_nUkSOfu_s8E",
	authDomain: "upload-to-storafe.firebaseapp.com",
	databaseURL: "https://upload-to-storafe.firebaseio.com",
	projectId: "upload-to-storafe",
	storageBucket: "upload-to-storafe.appspot.com",
	messagingSenderId: "792220074480",
};

firebase.initializeApp(config);

export default firebase;

export const storage = firebase.storage();
