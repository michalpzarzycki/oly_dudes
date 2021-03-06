

export const signInRequest = () => ({
    type: 'SIGN_IN_REQUEST',
  
  })

export const signInSuccess = (user: any) => ({
    type: 'SIGN_IN_SUCCESS',
    payload: {
        data: user,
    }
})

export const singInFailure = (error: any) => ({
    type: 'SIGN_IN_FAILURE',
    payload: {
        error
    }
})
export const signUpRequest = () => ({
    type: 'SIGN_UP_REQUEST',
 
  })

export const signUpSuccess = (user: any) => ({
    type: 'SIGN_UP_SUCCESS',
    payload: {
        data: user,
    }
})

export const singUpFailure = (error: any) => ({
    type: 'SIGN_UP_FAILURE',
    payload: {
        error
    }
})
export const signOutRequest = () => ({
    type: 'SIGN_OUT_REQUEST',

  })

export const signOutSuccess = () => ({
    type: 'SIGN_OUT_SUCCESS',
    payload: {
        user:{}
    },
    
})

export const singOutFailure = () => ({
    type: 'SIGN_OUT_FAILURE',
    payload: true
})