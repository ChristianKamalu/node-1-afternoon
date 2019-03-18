express = require('express');
bodyParser = require('body-parser');
app = express();
mc = require('./controllers/messages_controller')

app.use(bodyParser.json())
app.use( express.static( __dirname + '/../public/build' ) );

app.get(`/api/messages`, mc.read)
app.post(`/api/messages`, mc.create)
app.put(`/api/messages/:id`, mc.update)
app.delete(`/api/messages/:id`, mc.delete)

PORT = 3001;
app.listen(PORT, () => console.log(`Red ${PORT} checking in`))