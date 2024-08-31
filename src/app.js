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

app.use('/api/v1/personal_loan', loanRoutes);

app.use(express.static(path.join(__dirname, '../frontend/build')));

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((error) => {
  console.error('Error syncing database:', error);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// const express = require('express');
// const bodyParser = require('body-parser');
// const loanRoutes = require('../routes/loanRoutes');
// const cors = require('cors');
// const { sequelize } = require('./config');

// const app = express();
// const port = process.env.PORT || 8000;

// app.use(bodyParser.json());
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Use routes
// app.use('/api/v1/personal_loan', loanRoutes);

// // Sync Sequelize models
// sequelize.sync().then(() => {
//   console.log('Database synced');
// }).catch((error) => {
//   console.error('Error syncing database:');
// });

// app.listen(port,  () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
