const https = require('https')
https.get('https://random-data-api.com/api/v2/users?size=2&is_xml=json', (resp) => {
    let data = ''
    resp.on('data', (chunck) => {
        data = data + chunck
    })
    resp.on('end', () => {
        console.log(JSON.parse(data)[0].first_name)
    })
})