const express = require('express');
const bodyParser = require('body-parser');
const loanRoutes = require('../routes/loanRoutes');
const cors = require('cors');
const { sequelize } = require('./config');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/api/v1/personal_loan', loanRoutes);


// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Sync Sequelize models
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((error) => {
  console.error('Error syncing database:', error);
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


