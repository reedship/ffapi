const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const app = express()
app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });
