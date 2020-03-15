// import React, { Component } from 'react';

// import './App.css';

// const emailRegex = /^[a-zA-Z0-9.#$X&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;


// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   Object.values(formErrors).forEach(val => {

//     val.length > 0 && (valid = false);
//   });

//   Object.values(rest).forEach(val => {

//     val && (valid = false);
//   });


//   return valid;

// };

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//       firstName: null,
//       lasName: null,
//       email: null,
//       password: null,
//       formErrors: {
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: null

//       }
//     };
//   }

//   handleSubmit = e => {
//     e.preventDefault();

//     if (formValid(this.state)) {
//       console.log(`
// 			-- SUBMIT --
// 			First name: ${this.state.firstName}
// 			Last name: ${this.state.lastName}
// 			Email name: ${this.state.email}
// 			Password: ${this.state.password}
// 		`)
//     }
//     else {
//       console.error('FORM INVALID - DISPLAY ERROR MESSAGE');

//     }
//   };

//   handleChange = e => {
//     e.preventDefault();

//     const { name, value } = e.target;
//     let formErrors = this.state.formErrors;

//     console.log("Name:", name);
//     console.log("value:", value);


//     switch (name) {
//       case 'firstName':
//         formErrors.firstName =
//           value.length < 3
//             ? "minimum 3 required "
//             : '';
//         break;

//       case 'lastName':
//         formErrors.lastName =
//           value.length < 3
//             ? "minimum 3 required "
//             : '';
//         break;
//       case 'email':
//         formErrors.email =
//           emailRegex.test(value)
//             ? "minimum 3 required "
//             : 'invalid email address';
//         break;
//       case 'password':
//         formErrors.password =
//           value.length < 6
//             ? "minimum 6 required "
//             : '';
//         break;
//       default:
//         break;
//     }

//     this.setState({ formErrors, [name]: value }, () => console.log())

//   };


//   render() {
//     const { formErrors } = this.state;


//     return <div>

//       <div className="cards">
//         <h1 className="center_account"> Create Account </h1>
//         <form onSubmit={this.handleSubit} noValidate>
//           <div className="firstName">
//             <label htmlFor="firstName"><b> First Name </b></label>
//             <input
//               className="{formErrors.firstName.length > 0 ? 'error' : null}"
//               placeholder="First Name"
//               type="text"
//               name="firstName"
//               noValidate
//               onChange={this.handleChange} />

//             {formErrors.firstName.length > 0 && (
//               <span className="errorMessage">
//                 {
//                   formErrors.firstName
//                 }
//               </span>
//             )}
//           </div>
//           <div>
//             <label htmlFor="lastName"> <b>Last Name</b> </label>
//             <input
//               className="{formErrors.lastName.length > 0 ? 'error' : null}"
//               placeholder="Last Name"
//               type="text"
//               name="lastName"
//               noValidate
//               onChange={this.handleChange} />

//             {
//               formErrors.lastName.length > 0 && (
//                 <span className="">{formErrors.lastName}</span>
//               )}

//           </div>
//           <div className="margin_label createAccount">
//             <label htmlFor="email"> <b>Email </b><span class="small_text1">(ex.sedtg@mail.de)</span> </label>
//             <input
//               className="{formErrors.email.length > 0 ? 'error' : null}"
//               placeholder="Your email"
//               type="text"
//               name="email"
//               noValidate
//               onChange={this.handleChange} />
//             {
//               formErrors.email.length > 0 && (
//                 <span className="">{formErrors.email}</span>
//               )}

//           </div>
//           <div className="password">
//             <label htmlFor="password"> <b>Password</b> <span className="small_text1">(ex.Nghrt!$%12345)</span></label>
//             <input
//               className="{formErrors.password.length > 0 ? 'error' : null}"
//               placeholder="Your Password"
//               type="text"
//               name="password"
//               noValidate
//               onChange={this.handleChange} />
//             {formErrors.password.length > 0 && (
//               <span className="">{formErrors.password}</span>
//             )}
//           </div>
//           <div className="createAccount">
//             <button type="submit">Create Account </button>

//             <small className="createAccount">Already exist an Account?</small>
//           </div>
//         </form>
//       </div>
//     </div>
//   }
// }

// export default App;
export default null;