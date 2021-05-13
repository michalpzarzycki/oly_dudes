import firebase from './index';


export function signUpUserWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                resolve(user)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function signInWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
          console.log(result)
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }