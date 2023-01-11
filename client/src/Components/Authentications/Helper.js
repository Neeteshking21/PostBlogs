import { _tokenKey } from '../../env'


export async function setToken(data) {
    try {
        console.log(data)
        const token = data.token
        const tokenHeader = _tokenKey
        if (!token) {
            // alert("Unable To Login, Please Try Again Later");
            return { status: "failed", "message": "Token Not Found" }
        }

        await localStorage.removeItem(tokenHeader);
        await localStorage.setItem(tokenHeader, token);

        return { status: "success", "message": "Token Set Successfully" }
    }
    catch (error) {
        return { status: "failed", "message": "Failed To LoggedIn" }
    }
}

export function removeToken() {
    try {
        const tokenHeader = _tokenKey
        localStorage.removeItem(tokenHeader);
        return { status: "success", "message": "Token Set Successfully" }
    }
    catch (error) {
        return { status: "failed", "message": "Failed To LoggedOut" }
    }
}
export async function getToken() {
    try {
        const tokenHeader = _tokenKey
        let token = await localStorage.getItem(tokenHeader);
        if(token !== undefined || token !== null){
            return { status: "success", "token": token }
        }
        return { status: "failed", "message": "Token Not Foumd" }
    }
    catch (error) {
        return { status: "failed", "message": "Failed Not Found" }
    }
}