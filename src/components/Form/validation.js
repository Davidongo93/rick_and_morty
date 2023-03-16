const validation = (userData,errors,setErrors) => {
    const checkEmoji = String.fromCharCode(0x2705);
if (!userData.username) setErrors ({...errors,username:"campo requerido"});
else if (userData.username.length >35) 
setErrors ({...errors,username:"No debe contener mas de 35 caracteres"});
else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.username)
) {
    setErrors ({...errors,username:"Email invalido"});  
} else {
    setErrors({...errors, username:checkEmoji})
}
 if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors ({...errors,password:"Debe contener al menos 6 caracteres y menos de 10 "});
} else if (/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6}$/.test(userData.password)) {
    setErrors ({...errors,password:"Debe contener al menos una letra mayúscula y un número"});  
} else {
    setErrors({...errors, password:checkEmoji})
};
 
};

export default validation;
// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.
// /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$/
