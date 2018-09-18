
const login = () => {
    return fetch("https://github.com/")
        .then((data) => true)
        .catch((error) => false)
}

export {login}