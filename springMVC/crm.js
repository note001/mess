const crm = {
    setUserId(obj) {
        window.localStorage.setItem("USERID", obj);

    },
    setRole(obj) {
        window.localStorage.setItem("ROLES", obj);
    },
    setModule(obj) {
        window.localStorage.setItem("MODULES", obj);
    },
    setToken(obj) {
        window.localStorage.setItem("TOKEN", obj);
    },

    getToken() {
        return window.localStorage.getItem("TOKEN");
    },

    getModules() {
        return window.localStorage.getItem("MODULES");
    }


}
