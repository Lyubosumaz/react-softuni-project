const userService = {
    register: function (data) {
        return fetch(`http://localhost:4000/api/user/register`, {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json());
    }
};

export default userService;