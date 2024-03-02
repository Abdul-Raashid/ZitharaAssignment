// server.js

const express = require('express');
const db = require('./db'); // Import the db module

const app = express();

// Your Express app setup

// Example route to insert records into the database
app.get('/insert', (req, res) => {
  const data = [
      [1, 'Customer 1', 28, '1695943010', 'Location 1', '16/0/2024', '2:46'],
      [2, 'Customer 2', 57, '3983083106', 'Location 2', '22/1/2024', '3:16'],
      [3, 'Customer 3', 49, '4175494949', 'Location 3', '23/0/2024', '7:36'],
      [4, 'Customer 4', 45, '9072684436', 'Location 4', '27/0/2024', '15:46'],
      [5, 'Customer 5', 41, '8320871599', 'Location 5', '30/0/2024', '4:20'],
      [6, 'Customer 6', 23, '5865964723', 'Location 6', '17/1/2024', '14:40'],
      [7, 'Customer 7', 50, '8530128410', 'Location 7', '8/11/2023', '3:19'],
      [8, 'Customer 8', 34, '9052201791', 'Location 8', '24/1/2024', '0:34'],
      [9, 'Customer 9', 20, '8470040947', 'Location 9', '31/11/2023', '22:28'],
      [10, 'Customer 10', 39, '9432246184', 'Location 10', '10/11/2023', '8:13'],
      [11, 'Customer 11', 19, '7606139202', 'Location 11', '8/10/2023', '16:55'],
      [12, 'Customer 12', 62, '2647056799', 'Location 12', '10/0/2024', '14:53'],
      [13, 'Customer 13', 62, '1647610271', 'Location 13', '1/1/2024', '20:32'],
      [14, 'Customer 14', 67, '4770665477', 'Location 14', '30/10/2023', '8:16'],
      [15, 'Customer 15', 58, '6237223966', 'Location 15', '9/1/2024', '10:20'],
      [16, 'Customer 16', 38, '2261783511', 'Location 16', '21/10/2023', '4:49'],
      [17, 'Customer 17', 38, '3205965323', 'Location 17', '2/1/2024', '2:54'],
      [18, 'Customer 18', 60, '3633507419', 'Location 18', '5/0/2024', '10:43'],
      [19, 'Customer 19', 49, '8099864299', 'Location 19', '22/0/2024', '10:54'],
      [20, 'Customer 20', 67, '7637081258', 'Location 20', '17/0/2024', '22:43'],
      [21, 'Customer 21', 57, '4154065308', 'Location 21', '16/1/2024', '10:24'],
      [22, 'Customer 22', 28, '7715550413', 'Location 22', '19/11/2023', '8:5'],
      [23, 'Customer 23', 32, '2146924162', 'Location 23', '8/10/2023', '14:58'],
      [24, 'Customer 24', 19, '8593204103', 'Location 24', '8/0/2024', '15:11'],
      [25, 'Customer 25', 43, '8776603876', 'Location 25', '26/11/2023', '21:48'],
      [26, 'Customer 26', 33, '9018034964', 'Location 26', '16/0/2024', '20:26'],
      [27, 'Customer 27', 37, '2164358895', 'Location 27', '16/1/2024', '5:35'],
      [28, 'Customer 28', 33, '6844825045', 'Location 28', '17/1/2024', '15:9'],
      [29, 'Customer 29', 28, '4760588213', 'Location 29', '30/10/2023', '17:28'],
      [30, 'Customer 30', 26, '1274617312', 'Location 30', '25/10/2023', '12:17'],
      [31, 'Customer 31', 27, '6243065769', 'Location 31', '26/11/2023', '17:54'],
      [32, 'Customer 32', 34, '3016287298', 'Location 32', '9/10/2023', '14:7'],
      [33, 'Customer 33', 55, '4452180166', 'Location 33', '3/0/2024', '8:51'],
      [34, 'Customer 34', 45, '4211113090', 'Location 34', '22/10/2023', '23:8'],
      [35, 'Customer 35', 26, '3884532058', 'Location 35', '24/10/2023', '5:53'],
      [36, 'Customer 36', 51, '1164699919', 'Location 36', '21/11/2023', '3:46'],
      [37, 'Customer 37', 54, '2630306944', 'Location 37', '15/11/2023', '0:5'],
      [38, 'Customer 38', 63, '1150878828', 'Location 38', '2/2/2024', '15:52'],
      [39, 'Customer 39', 24, '9496878558', 'Location 39', '28/0/2024', '13:49'],
      [40, 'Customer 40', 18, '9508716662', 'Location 40', '9/11/2023', ''],
      [41, 'Customer 41', 22, '7412382951', 'Location 41', '9/1/2024', '18:14'],
      [42, 'Customer 42', 26, '4024835778', 'Location 42', '3/1/2024', '12:33'],
      [43, 'Customer 43', 25, '1983686223', 'Location 43', '26/11/2023', '14:40'],
      [44, 'Customer 44', 47, '8920081364', 'Location 44', '8/10/2023', '4:55'],
      [45, 'Customer 45', 63, '4307716555', 'Location 45', '17/1/2024', '7:30'],
      [46, 'Customer 46', 54, '9618361795', 'Location 46', '12/1/2024', '1:14'],
      [47, 'Customer 47', 29, '5897527618', 'Location 47', '10/11/2023', '11:47'],
      [48, 'Customer 48', 52, '7823762673', 'Location 48', '12/11/2023', '12:22'],
      [49, 'Customer 49', 46, '5915416953', 'Location 49', '12/10/2023', '10:33'],
      [50, 'Customer 50', 26, '9638928728', 'Location 50', '26/0/2024', '18:8']
    
  ];

  const queryText = 'INSERT INTO your_table_name (sno, customerName, age, phone, location, date, time) VALUES ($1, $2, $3, $4, $5, $6, $7)';

  data.forEach((record) => {
    db.query(queryText, record, (err, result) => {
      if (err) {
        console.error('Error inserting records:', err);
      } else {
        console.log('Record inserted successfully');
      }
    });
  });

  res.send('Records inserted successfully');
});

// Other routes and middleware

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


