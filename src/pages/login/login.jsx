import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { memo, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSignInMutation } from "../../context/api/login-registerApi";
import { useDispatch } from "react-redux";
import { setToken } from "../../context/slices/authSlice";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginAdmin, { isSuccess, data, isError }] = useSignInMutation()
    const navigate = useNavigate()
    let dispatch = useDispatch()
    console.log(data);

    useEffect(() => {
        if (isSuccess) {
            navigate("/admin/product-manage")
            dispatch(setToken(data?.payload?.token))
        }
    }, [isSuccess])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const formik = useFormik({
        initialValues: {
            username: "ali32",
            password: "12345678",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters long")
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            loginAdmin(values);
        },
    });

    const getErrorClass = (field) =>
        formik.touched[field] && formik.errors[field] ? "login__error" : "";

    return (
        <section className={`login ${isError ? "login__error" : ""}`}>
            <div className="login__wrapper">
                <h1 className="login__title">Login</h1>
                <form className="login__form" onSubmit={formik.handleSubmit}>
                    <div className={`login__card ${getErrorClass("username")}`}>
                        <label
                            className={`login__label ${getErrorClass("username")}`}
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className={`login__input ${getErrorClass("username")}`}
                            placeholder="Enter your username"
                            {...formik.getFieldProps("username")}
                        />
                    </div>
                    <div className={`login__card ${getErrorClass("password")}`}>
                        <label
                            className={`login__label ${getErrorClass("password")}`}
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="login__password-eye">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className={`login__input ${getErrorClass("password")}`}
                                placeholder="Enter your password"
                                {...formik.getFieldProps("password")}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((p) => !p)}
                                className="login__password-eye-btn"
                            >
                                {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="login__btn">
                        Submit
                    </button>
                    <div className="login__context">
                        <p className="login__context-text">{"Don't"} have an account?</p>
                        {/* <Link to="/register" className="login__context-link">Register</Link> */}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default memo(Login);
