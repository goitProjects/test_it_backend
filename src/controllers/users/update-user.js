// const User = require('../../models/users/usersModel');

// const updateUser = (request, response) => {
//   const user = request.body;
//   const id = request.params.id;

//   const sendError = () => {
//     response.status(400);
//     response.json({
//       status: 'error',
//       text: 'there is no such user'
//     });
//   };

//   const sendResponse = (newUser) => {
//     if (!newUser) {
//       return sendError();
//     }

//     response.json({
//       status: 'success',
//       user: newUser
//     });
//   };

//   User
//     .findOneAndUpdate({
//         _id: id
//       },
//       user, {
//         new: true
//       }
//     )
//     .then(sendResponse)
//     .catch(sendError);

// };

// module.exports = updateUser;
