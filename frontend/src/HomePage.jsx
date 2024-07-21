// CODE WITHOUT GLOWING EFFECT ON THE ICONS 
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils, faBroom, faExclamationCircle, faUserFriends, faCommentDots } from '@fortawesome/free-solid-svg-icons';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <nav className="flex justify-between items-center p-4 bg-white shadow-md">
//         <img
//           alt="Your Company"
//           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//           className="h-10 w-auto"
//         />
//         <p className="text-right font-medium tracking-tight text-gray-900">
//           Profile
//         </p>
//       </nav>

//       <div className="flex-grow flex items-center justify-center bg-gray-100 overflow-hidden">
//         <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg p-6">
//           <div className="space-y-4">
//             <Link to="/request-lunch" className="flex items-center space-x-12 hover:bg-gray-100 p-3 rounded cursor-pointer">
//               <FontAwesomeIcon icon={faUtensils} className="text-2xl" />
//               <div>
//                 <h3 className="text-base font-medium">Lunch Request</h3>
//                 <p className="text-sm text-gray-600">Get your lunch at the door of your college</p>
//               </div>
//             </Link>
//             <Link to="/request-housekeeping" className="flex items-center space-x-10 hover:bg-gray-100 p-3 rounded cursor-pointer">
//               <FontAwesomeIcon icon={faBroom} className="text-2xl" />
//               <div>
//                 <h3 className="text-base font-medium">Housekeeping Request</h3>
//                 <p className="text-sm text-gray-600">Clean at a click</p>
//               </div>
//             </Link>
//             <Link to="/register-issue" className="flex items-center space-x-11 hover:bg-gray-100 p-3 rounded cursor-pointer">
//               <FontAwesomeIcon icon={faExclamationCircle} className="text-2xl" />
//               <div>
//                 <h3 className="text-base font-medium">Complain Request</h3>
//                 <p className="text-sm text-gray-600">Register an issue to the management team</p>
//               </div>
//             </Link>
//             <div className="flex items-center space-x-10 hover:bg-gray-100 p-3 rounded cursor-pointer">
//               <FontAwesomeIcon icon={faUserFriends} className="text-2xl" />
//               <div>
//                 <h3 className="text-base font-medium">Referral</h3>
//                 <p className="text-sm text-gray-600">Refer to a friend</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-11 hover:bg-gray-100 p-3 rounded cursor-pointer">
//               <FontAwesomeIcon icon={faCommentDots} className="text-2xl" />
//               <div>
//                 <h3 className="text-base font-medium">Feedback</h3>
//                 <p className="text-sm text-gray-600">Give us insightful feedback to improve</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;



//CODE WITH GLOWING EFFECT IN ICONS
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBroom, faExclamationCircle, faUserFriends, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Components/Navbar';


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-100 overflow-hidden mb-10">
        <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            <Link to="/request-lunch" className="flex items-center space-x-12 hover:bg-gray-100 p-3 rounded cursor-pointer group">
              <FontAwesomeIcon icon={faUtensils} className="text-2xl group-hover:text-blue-500 transition duration-300" />
              <div>
                <h3 className="text-base font-medium">Lunch Request</h3>
                <p className="text-sm text-gray-600">Get your lunch at the door of your college</p>
              </div>
            </Link>
            <Link to="/request-housekeeping" className="flex items-center space-x-10 hover:bg-gray-100 p-3 rounded cursor-pointer group">
              <FontAwesomeIcon icon={faBroom} className="text-2xl group-hover:text-blue-500 transition duration-300" />
              <div>
                <h3 className="text-base font-medium">Housekeeping Request</h3>
                <p className="text-sm text-gray-600">Clean at a click</p>
              </div>
            </Link>
            <Link to="/register-issue" className="flex items-center space-x-11 hover:bg-gray-100 p-3 rounded cursor-pointer group">
              <FontAwesomeIcon icon={faExclamationCircle} className="text-2xl group-hover:text-blue-500 transition duration-300" />
              <div>
                <h3 className="text-base font-medium">Complain Request</h3>
                <p className="text-sm text-gray-600">Register an issue to the management team</p>
              </div>
            </Link>
            <div className="flex items-center space-x-10 hover:bg-gray-100 p-3 rounded cursor-pointer group">
              <FontAwesomeIcon icon={faUserFriends} className="text-2xl group-hover:text-blue-500 transition duration-300" />
              <div>
                <h3 className="text-base font-medium">Referral</h3>
                <p className="text-sm text-gray-600">Refer to a friend</p>
              </div>
            </div>
            <div className="flex items-center space-x-11 hover:bg-gray-100 p-3 rounded cursor-pointer group">
              <FontAwesomeIcon icon={faCommentDots} className="text-2xl group-hover:text-blue-500 transition duration-300" />
              <div>
                <h3 className="text-base font-medium">Feedback</h3>
                <p className="text-sm text-gray-600">Give us insightful feedback to improve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
