let USER_NAME;
(function() {
    const URL = 'https://jsfeajax.herokuapp.com/';

    window.DataService = {
        sendRequest: sendRequest,
    }
    
    async function sendRequest (body, path = '/todo', method = 'POST',) {
        let response = await fetch(URL+ USER_NAME +path, {
            method: method,
            headers: {'Content-Type': 'application/json;charset=utf-8'}, 
            body: JSON.stringify(body)
        })
        let data = await response.json();
        return data;
        };
})();