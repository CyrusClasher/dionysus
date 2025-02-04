// Import the functions you need from the SDKs you need
import { error } from "console";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuRm-4CS3HpyGk5CEJsPPN5Q6nLt4Y1Ts",
  authDomain: "dionysus-cyrus.firebaseapp.com",
  projectId: "dionysus-cyrus",
  storageBucket: "dionysus-cyrus.firebasestorage.app",
  messagingSenderId: "6234798214",
  appId: "1:6234798214:web:bd719d3e9ffb288abc7907",
  // apiKey: "AIzaSyAs5SOHVdDXDwjzLhFXRNQONTc_0Q3L1qM",
  // authDomain: "dionysus-yt.firebaseapp.com",
  // projectId: "dionysus-yt",
  // storageBucket: "dionysus-yt.firebasestorage.app",
  // messagingSenderId: "294574424066",
  // appId: "1:294574424066:web:9f028f2958cf265377a71b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export async function uploadFile(
  file: File,
  setProgress?: (progress: number) => void,
) {
  return new Promise((resolve, reject) => {
    try {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
          if (setProgress) setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          //this callback will execute when upload is finished
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            resolve(downloadUrl as string);
          });
        },
      );
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
