var request = require('request');


module.exports = class MailingList{
    constructor(url, list, password, secure) {
        this.session = request.defaults({jar: true}); // we want to have a seperate set of cookies for each instance
        this.url = url;
        this.list = list;
        this.password = password;
        this.secure = secure;
        this.logged_in = false;
    }

    connect(callback) {
        this.session.post(
            {
                url: this.url + this.list,
                form: {adminpw: this.password, dmlogin: "Let+me+in..."},
                agentOptions: {rejectUnauthorized: this.secure}},
                function (error, response, body) {
                    if (callback) {
                        if (!error && response.statusCode == 200 && !body.includes("Authorization\nfailed.")) {
                            callback(true);
                            this.logged_in = true;
                        } else {
                            callback(false)
                            this.logged_in = false;
                        }
                    }
                }
        );
    }

    connected(callback) {
        this.session.get(
            {
                url: this.url + this.list,
                agentOptions: {rejectUnauthorized: this.secure}},
                function (error, response, body) {
                    if (callback) {
                        if (!error && response.statusCode == 200 && body.includes("General Options Section")) {
                            callback(true);
                            this.logged_in = true;
                        } else {
                            callback(false)
                            this.logged_in = false;
                        }
                    }
                }
        );
    }

    add(email, callback) {
        console.log("not logged in");
        if (!this.logged_in) {
            if (callback) {
                callback(false);
            }
            return;
        }
        var form_data  = {
            subscribe_or_invite: 0,
            send_welcome_msg_to_this_batch: 1,
            send_notifications_to_list_owner: 1,
            subscribees: [email],
        }
        console.log(this.url + this.list + '/members/add')
        this.session.post(
            {
                url: this.url + this.list + '/members/add',
                formData: form_data,
                agentOptions: {rejectUnauthorized: this.secure}
             },
             function (error, response, body) {
                if (callback) {
                    if (!error && response.statusCode == 200 && !body.includes("Administrator Authentication")) {
                        callback(true);
                    } else {
                        console.log(email, "couldn't add ")
                        callback(false);
                    }
                }
             }
         );
    }
}

