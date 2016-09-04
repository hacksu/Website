var request = require('request');


module.exports = class MailingList{
    constructor(url, list, password, secure) {
        this.session = request.defaults({jar: true}); // we want to have a seperate set of cookies for each instance
        this.url = url;
        this.list = list;
        this.password = password;
        this.secure = secure;
    }

    connect(callback) {
        this.session.post(
            {
                url: this.url + this.list,
                form: {adminpw: this.password, dmlogin: "Let+me+in..."},
                agentOptions: {rejectUnauthorized: this.secure}},
                function (error, response, body) {
                  if (!error && response.statusCode == 200) {
                    callback(true);
                  }
                }
        );
    }

    add(email) {
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
               if (!error && response.statusCode == 200) {
               }
             }
         );
    }
}
