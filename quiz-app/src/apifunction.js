const loginuser = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username === 'anuj' && password === 'anuj1234') {
                const token = Math.random().toString(36).substring(2);
                resolve({
                    success: true,
                    token: token,
                })
            }else {
                reject(new Error("Invalid username or password"));
            }
        }, 1000)
    })
}

export default loginuser