import { createReduxModule } from "hooks-for-redux"

const initialValue = {
    onRegisterScreen: false,
    onLoginScreen: false
}

export const [useRegisterAndLogin, { setOnRegister, setOnLogin }] = createReduxModule("registerAndLogin", initialValue, {
    setOnRegister: (state, value) => {
        return { ...state, onRegisterScreen: value }
    },
    setOnLogin: (state, value) => {
        return { ...state, onLoginScreen: value }
    }
})