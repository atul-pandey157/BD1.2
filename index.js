let express = require('express');
let app = express();

const port = 3000;

function getWelcomeMessage() {
  return 'Welcome to our service!';
}
function getGreetingMessage(username) {
  return 'Hello, ' + username + '!';
}


app.get('/Welcome', (req, res) => {
  res.send(getWelcomeMessage());
});
app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
