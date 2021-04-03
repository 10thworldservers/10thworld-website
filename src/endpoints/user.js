import axios from "axios";




export function getUserById(Id) {
    const restOptions = {
        url: 'https://10thworldfunctions20210313113150.azurewebsites.net/api/GetUserById?code=ISGe5C3rDAAUGaVZattBpLaCeuebLIiKFiY4nRui2ILaiGSDQWe6QQ=='
    }
    //requires parameter for id and partition.
    //partition should always be 'emailAddress'
    
}

///
/// Creates or updates a user based on object passed in
/// 
export function createTestUser() {
    const restOptions = {
        method: 'post',
        url: 'https://10thworldfunctions20210313113150.azurewebsites.net/api/CreateUpdateUser?code=qi2XLljGklKphBba2a16hfV3XbufbHh7KFMrXASR5JnSXCNi4tEhGQ==',
        data: {
            id:"8923y098hdfpaious801-9ausdnf90",
            displayName: "John Test",
            emailAddress: "test@gmail.com",
            serverId: ["none"],
            locale:"en-US",
            registered:"true"
        }
    }
    
    axios(restOptions);
}


export function createNewUser(userId, userDisplayName, userEmail) {
    const restOptions = {
        method: 'post',
        url: 'https://10thworldfunctions20210313113150.azurewebsites.net/api/CreateUpdateUser?code=qi2XLljGklKphBba2a16hfV3XbufbHh7KFMrXASR5JnSXCNi4tEhGQ==',
        data: {
            id: userId,
            displayName: userDisplayName,
            emailAddress: userEmail,
            serverId: ["none"],
            registered:"true"
        }
    }

    axios(restOptions);

}