import React, { useRef, useState } from "react";
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
import styled from "styled-components";

export default function ResetWalletPin({ modal, closeModal }) {
  const formRef = useRef();
  const [error, setError] = useState();
  const [pin, setPin] = useState();

  const initialValues = {
    old_pin: "",
    new_pin: "",
    confirm_pin: "",
  };

  const validateSchema = Yup.object().shape({
    old_pin: Yup.string().required("Pin is required!"),
    new_pin: Yup.string().required("Pin is required!"),
    confirm_pin: Yup.string()
      .required("Pin is required!")
      .oneOf([Yup.ref("new_pin")], "Pins do not match"),
  });

  return (
    <ComponentStyle>
      <AppModal
        modalState={modal}
        heading="Reset Wallet PIN"
        desc="Provide the required info below to reset 
      your wallet pin."
        closeModal={closeModal}
        walletBalance={false}
      >
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={() => {}}
        >
          {({ isSubmitting, isValid }) => (
            <div className="flex-[1] py-[0]">
              <Form className="mt-10">
                {/* <PinInput
                  name="old_pin"
                  label="Enter Old 4 digit pin"
                  // label=""
                  numInputs={4}
                /> */}
                <Input
                  error={error}
                  showError={error}
                  label="Enter OTP"
                  type="number"
                  name="otp"
                  placeHolder="Enter otp"
                />
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-[#767e93]">
                    Your PIN must contain the following:
                  </span>
                  <div className="flex align-center gap-3">
                    <p className="text-sm text-[#767E93] font-700 flex align-center gap-1 ">
                      Security level:
                      <span className="text-[#F58220] font-black  text-sm">
                        Very Strong
                      </span>
                    </p>
                    <div className="flex gap-1">
                      <div className="w-8 h-2 rounded-lg bg-[#108C4A] flex mt-2"></div>
                      <div className="w-8 h-2 rounded-lg bg-[#108C4A] flex mt-2"></div>
                      <div className="w-8 h-2 rounded-lg bg-[#108C4A] flex mt-2"></div>
                      <div className="w-8 h-2 rounded-lg bg-[#108C4A] flex mt-2"></div>
                    </div>
                  </div>
                </div>

                <div className="examples">
                  <p>Examples are:</p>
                  <ul>
                    <li>Choose a PIN thats different from your DOB</li>
                    <li>
                      Use a sequence of random numbers you can
                      <br /> remember
                    </li>
                  </ul>
                </div>

                <PinInput
                  name="new_pin"
                  label="Enter New 4 digit pin"
                  // label=""
                  numInputs={4}
                />
                <PinInput
                  name="confirm_pin"
                  label="Confirm New 4 digit pin"
                  // label=""
                  numInputs={4}
                />
                <div className="checkbox">
                  <input type="checkbox" />
                  <p>
                    i have read the <span>Terms and Conditions</span>
                  </p>
                </div>

                <Button
                  text="Reset Pin"
                  background="#F58220"
                  color="#ffffff"
                  style={{ flexDirection: "row-reverse", marginTop: "4rem" }}
                  height="50px"
                  fontSize="16px"
                />
              </Form>
            </div>
          )}
        </Formik>
      </AppModal>
    </ComponentStyle>
  );
}

const ComponentStyle = styled.div`
  .checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .checkbox [type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 25px;
    accent-color: #f58220;
    color: white;
  }

  .checkbox span {
    color: #f58220;
    font-size: 14px;
    line-height: 21px;
    font-weight: 700;
  }
  .pinstate span {
    color: #767e93;
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
  }
  .examples p {
    color: #767e93;
    line-height: 24px;
    font-size: 13px;
    font-weight: 800;
  }
  .examples li {
    padding-left: 20px;
    color: #767e93;
    line-height: 24px;
    font-size: 13px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .examples {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`;
