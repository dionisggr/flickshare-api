const app = require('./app');
const { PORT } = require('./config')

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`)
});