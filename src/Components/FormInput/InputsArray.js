export const inputsArray = [
    {
        id: 1,
        idname: 'username',
        type: 'text',
        label: 'Username',
        errorMessage: 'should be 3-16 letters and no special charecter and no number',
        required: true,
        pattern:"^[a-zA-Z]{3,16}$"
    },
    {
        id: 2,
        idname: 'email',
        type: 'email',
        label: 'Email',
        errorMessage: 'enter a valid email',
        required: true,
        pattern:"/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/"
    },
    {
        id: 3,
        idname: 'birthday',
        type: 'date',
        label:'Birthday',
        errorMessage:''
    },
    {
        id: 4,
        idname: 'password',
        type: 'password',
        label:'Password',
        errorMessage: 'should contain atleast 1-special chaecter,1-Capital letter,1-numerical andtotal length should be minimum 8',
        required: true,
        pattern:"^[a-zA-Z0-9!@#$%^&*]&{8,16}$"
    },
    {
        id: 5,
        idname: 'confirmpassword',
        type: 'password',
        label:'Confirm Password',
        errorMessage: 'passwords are not matching',
        required: true,
        
    },
]