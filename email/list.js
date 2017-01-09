var sendgrid_login = require('sendgrid');


module.exports = class MailingList{
    constructor(api_key, list_id, sender_id) {
        this.sg = sendgrid_login(api_key);
        this.sender_id = sender_id;
        this.list_id = list_id;
    }

    add(email, callback) {
        var request = this.sg.emptyRequest()
        request.body = [
            {
                "email": email, 
            }
        ];
        request.method = 'POST'
        request.path = '/v3/contactdb/recipients'
        this.sg.API(request, function (error, response) {
            if (!error && response.statusCode == 201) {
                var request = this.sg.emptyRequest()
                request.method = 'POST'
                request.path = '/v3/contactdb/lists/'+this.list_id+'/recipients/'+response.body.persisted_recipients[0]
                this.sg.API(request, function (error, response) {
                    if (!error && response.statusCode == 201) {
                        callback(true);
                    } else {
                        callback(false);
                        console.log(response.statusCode)
                        console.log(response.body)
                        console.log(response.headers)
                    }
                })
            } else {
                callback(false);
                console.log(response.statusCode)
                console.log(response.body)
                console.log(response.headers)
            }
        }.bind(this))
    }
    scheduleEmail(title, description, date, callback) {
        console.log(title, description, date)
        var request = this.sg.emptyRequest()
        request.body = {
        "categories": [
            "event"
        ], 
        "custom_unsubscribe_url": "", 
        "html_content": "<html><head><title></title></head><body>"+description+"</body></html>", 
        "list_ids": [
            this.list_id, 
        ], 
        "plain_content": description, 
        "sender_id": this.sender_id, 
        "subject": title, 
        "title": title
        };
        request.method = 'POST'
        request.path = '/v3/campaigns'

        this.sg.API(request, function (error, response) {
            callback(response.body.id)
        })
    }
    removeEmail(id, callback) {
        
    }

    updateEmail(id, title, description, date, callback) {
        var updateRequest = this.sg.emptyRequest();
        updateRequest.body = {
            "html_content": "<html><head><title></title></head><body>"+description+"</body></html>",
            "plain_content": description,
        }
        updateRequest.method = 'PATCH'
        updateRequest.path = '/v3/campaigns/'+id
        this.sg.API(updateRequest, function (error, response) {
            if (!error && response.statusCode == 200) {
                callback(true);
            } else {
                callback(false);
                console.log(response.statusCode)
                console.log(response.body)
                console.log(response.headers)
            }
        })
    }
}

