function get (key){
    return JSON.parse(localStorage.getItem(key))
}

function set (key, value){
    localStorage.setItem(key, JSON.stringify(value))
}

module.exports = {
    get,
    set
}