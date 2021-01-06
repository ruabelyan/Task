import React from "react";
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      }, bgColor:{
        backgroundColor:'white !important',
     },
        width_97: {
            width:'97% !important'
        }
  }),
);

const  LoginForm = ({
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
  }) => {
    const classes = useStyles();
    
return (
    <Formik
       initialValues={{ email: '', password: '', confirmPassword: '', firstName: '', lastName: ''}}
       
       validate={values => {
         const errors = {};
        
         if(values.firstName === ''){
            errors.firstName = true;
         }
         if(!values.lastName){
            errors.lastName = true;
         }
         if (!values.password || values.password.length <= 6) {
            errors.password = true;
          }
          if (!values.confirmPassword ) {
            errors.confirmPassword = true;
          }
          if(values.confirmPassword !== values.password){
            errors.confirmPassword = true;
         }
         if (!values.email) {
           errors.email = true;
         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
           errors.email = <p className='text-danger m-2'>Invalid email address</p>
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           console.log(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
      {({ values,errors,touched, handleChange,handleBlur,handleSubmit,isSubmitting, }) => (

     <form   onSubmit={handleSubmit}>
        <div className="row center_row">
            <div className="col-12">
                <h1 className="text-white p-2 text-center">Login Form</h1>
                <div className="row">
                    <div className="col-12">
                    <p className={(errors.firstName && touched.firstName) ? `m-2 position_valid d-block text-danger` : `m-2 d-none`}>Field is empty</p>
                    <TextField
                        className={(errors.firstName && touched.firstName) ? `${classes.bgColor} ${classes.width_97} rounded m-2 border_red ` : `${classes.bgColor} ${classes.width_97}  m-2 rounded `}
                        id="firstName-textarea"
                        placeholder="FistName"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="filled"
                        />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                    <p className={(errors.lastName && touched.lastName) ? `m-2 position_valid d-block text-danger` : `m-2 d-none`}>Field is empty</p>
                    <TextField
                        className={(errors.lastName && touched.lastName) ?  `${classes.bgColor} ${classes.width_97} rounded m-2 border_red ` : `${classes.bgColor} ${classes.width_97}  m-2 rounded `}
                        id="lastName-textarea"
                        placeholder="LastName"
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="filled"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <p className={(errors.email && touched.email && errors.email) ? `m-2 position_valid d-block text-danger mt-` : `m-2 d-none`}>Invalid email address</p>
                    <TextField
                         className={(errors.email && touched.email) ?  `${classes.bgColor} ${classes.width_97} rounded m-2 border_red ` : `${classes.bgColor} ${classes.width_97}  m-2 rounded `}
                        id="filled-textarea"
                        placeholder="Email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        variant="filled"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <p className={(errors.password && touched.password && errors.password) ? `m-2 position_valid d-block text-danger mt-` : `m-2 d-none`}>password must be at least 6 characters</p>
                    <TextField
                        className={(errors.password && touched.password) ?  `${classes.bgColor} ${classes.width_97} rounded m-2 border_red ` : `${classes.bgColor} ${classes.width_97}  m-2 rounded `}
                        id="password-input"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        autoComplete="current-password"
                        variant="filled"
                        />
                
                    </div>
                    <div className="col-12">
                    <p className={(errors.confirmPassword && touched.confirmPassword && errors.confirmPassword) ? `m-2 position_valid d-block text-danger mt-` : `m-2 d-none`}>Passwords do not match</p>
                    <TextField
                        className={(errors.confirmPassword && touched.confirmPassword) ?  `${classes.bgColor} ${classes.width_97} rounded m-2 border_red ` : `${classes.bgColor} ${classes.width_97}  m-2 rounded `}
                        id="confirm-password-input"
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        autoComplete="current-password"
                        variant="filled"

                        />
                    </div>
                </div>
                <div  className="row">
                    <div  className="col-12">
                        <div className={`${classes.root} ${classes.width_97} mt-2 p-2 ml-2`}>
                            <input  type='submit' disabled={isSubmitting} value='Register' className='w-100 buttonRegister '/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    )}
    </Formik>
)
}
export default LoginForm;