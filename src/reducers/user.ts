interface LoginStatus {
    loginStatus: string
}
const initialState = {
  loginStatus: 'signedOut'
}


const user = (state: LoginStatus = initialState, action: any) => {
    console.log("ACTION")
    console.log(action.type, action.payload)
    switch (action.type) {
        case 'SIGN_IN_REQUEST':
            return {
                ...state,
                loginStatus: 'loading'
            }
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                loginStatus: 'signedIn'
            }
        case 'SIGN_IN_FAILURE':
            return {
                ...state,
                user: action.payload,
                loginStatus:'signedOut'
            }
        case 'SIGN_UP_REQUEST':
            return {
                ...state,
                loginStatus:'loading'
            }
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                user: action.payload,
                loginStatus:'signedOut'
            }
        case 'SIGN_UP_FAILURE':
            return {
                ...state,
                user: action.payload,
                loginStatus:'signedOut'
            }
        case 'SIGN_OUT_REQUEST':
            return {
                ...state,
                loginStatus:'loading'
            }
        case 'SIGN_OUT_SUCCESS':
            return {
                ...state,
                user: action.payload.user,
                loginStatus:'signedOut'
            }
        case 'SIGN_OUT_FAILURE':
            return {
                ...state,
                loginStatus:'signedIn'
            }
        default:
            return state
    }
}
export default user;