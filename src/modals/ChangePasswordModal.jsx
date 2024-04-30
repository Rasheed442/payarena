import React, { useRef, useState, useEffect } from "react";
import AppModal from "../components/Modal/AppModal";
import { Field, Form, Formik } from "formik";
import {
  ComboSelect,
  Input,
  Password,
  PinInput,
  TextArea,
} from "../components/Fields";
import Button from "../components/bits/Button";
import * as Yup from "yup";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ChangePasswordModal({ modal, closeModal }) {
  const formRef = useRef();
  const [error, setError] = useState();
  const [pin, setPin] = useState();
  const [OldPassword, setOldPassword] = useState();
  const [NewPassword, setNewPassword] = useState();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    old_password: "",
    new_password: "",
    confirm_password: "",
  };
  const token = JSON.parse(localStorage.getItem("token"));

  const AuthDetails = { OldPassword, NewPassword };

  const validateSchema = Yup.object().shape({
    old_password: Yup.string().required("Password is required!"),
    new_password: Yup.string()
      .required("Password is required!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirm_password: Yup.string()
      .required("Password is required!")
      .oneOf([Yup.ref("new_password")], "Passwords do not match"),
  });

  useEffect(() => {
    toast.success("jjj");
    console.log("hhh");
  }, []);

  async function ChangePassword(e) {
    try {
      setLoading(true);
      e.preventDefault();
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}account/change-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(AuthDetails),
        }
      );
      const server = await response.json();
      setLoading(false);
      console.log(server);
      if (server?.Success) {
        // alert(server?.Message);
        // toast(server?.Message);
        toast.success(server?.Message);

        setLoading(false);
      } else {
        toast.error(server?.Message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <AppModal
      modalState={modal}
      heading="Change Password"
      desc="Provide the required info below to change 
      your password"
      closeModal={closeModal}
      walletBalance={false}
    >
      <ToastContainer />
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={() => {}}
      >
        {({ isSubmitting, isValid }) => (
          <div className="flex-[1] py-[0]">
            <Form className="mt-10" onSubmit={ChangePassword}>
              <Password
                error={error}
                showError={error}
                onChange={(e) => setOldPassword(e.target.value)}
                label="Enter Old Password"
                placeHolder="Enter Old Password"
                name="old_password"
              />

              <Password
                error={error}
                onChange={(e) => setNewPassword(e.target.value)}
                showError={error}
                label="Enter New Password"
                placeHolder="Enter New Password"
                name="new_password"
              />

              {/* <Password
                error={error}
                showError={error}
                label="Confirm New Password"
                placeHolder="Confirm New Password"
                name="confirm_password"
              /> */}

              <Button
                text={
                  loading ? (
                    <TailSpin
                      height="30"
                      width="30"
                      color="#ffffff"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  ) : (
                    "UPDATE"
                  )
                }
                background="#F58220"
                color="#ffffff"
                style={{ flexDirection: "row-reverse", marginTop: "4rem" }}
                height="50px"
                fontSize="13px"
              />
            </Form>
          </div>
        )}
      </Formik>
    </AppModal>
  );
}
