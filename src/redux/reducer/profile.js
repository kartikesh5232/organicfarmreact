const loginStatus = false;

const profile = (state = loginStatus, action) => {

    switch (action.type) {
        case "addProfile":


            return true;



        case "delProfile":

            return false

        default:
            return loginStatus;

    }

}

export default profile;