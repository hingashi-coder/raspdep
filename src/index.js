const { exec } = require('child_process')
const axios = require('axios')
const env = process.env
console.log(env.SLACK_URL)
exec('uname -a', (err, stdout, stderr) => {
    if (err) {
      console.log(`stderr: ${stderr}`)
    } else {
      axios.post(env.SLACK_URL,
       {
         'text': stdout
       })
    }
  }
)