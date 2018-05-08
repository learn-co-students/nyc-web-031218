var WebSocket = require('ws')
var key = require('./key')
var fetch = require('node-fetch')

var HASHTAG_SOCKETS = "C9VETKNL8"

fetch('https://slack.com/api/rtm.connect?token=' + key.slack + '&pretty=1')
  .then(r => r.json()).then(j => openSocket(j.url))

openSocket = (url) => {
  ws = new WebSocket(url);

  ws.on('open', () => {
    console.log("opened")
  });

  ws.on('close', closeEvent => {
  });

  ws.on('message', message => {
    const m = JSON.parse(message)
    if (m.channel === HASHTAG_SOCKETS && m.type === "message") {
      console.log(m.text)
      if (m.text.includes("elevator") && !m.text.includes("12105")) {
        wrong_elevator(HASHTAG_SOCKETS)
      }
      if (m.text.includes("developer")) {
        send_developer(HASHTAG_SOCKETS)
        react_thumbs_down(HASHTAG_SOCKETS, m.ts)
      }
      // send_message(HASHTAG_SOCKETS, m.text)
    }
  });

  const send_message = (channel_id, message_text)  => {
    ws.send(JSON.stringify({
      "id": 1,
      "type": "message",
      "channel": channel_id,
      "text": message_text
    }))
  }

  const wrong_elevator = (channel_id) => {
    ws.send(JSON.stringify({
      "id": 1,
      "type": "message",
      "channel": channel_id,
      "text": "Elevator Code: 8675309"
    }))
  }

  const send_developer = (channel_id) => {
    ws.send(JSON.stringify({
      "id": 1,
      "type": "message",
      "channel": channel_id,
      "text": ":developer:"
    }))
  }

  const react_thumbs_down = (channel_id, timestamp) => {
    const url = "https://slack.com/api/reactions.add"
    console.log(`timestamp: ${timestamp}`)
    fetch(`${url}?token=${key.slack}&name=thumbsdown&channel=${channel_id}&timestamp=${timestamp}&pretty=1`, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Authorization": `${key.slack}`
      }
    }).then(r => r.json()).then(json => {
      console.log(json)
    })
  }

  ws.on('error', errorEvent => {
    console.log("ERROR ALERT!!!!!")
    console.log(errorEvent)
  });
}
