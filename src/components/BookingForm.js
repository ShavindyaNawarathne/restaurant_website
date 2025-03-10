import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function BookingForm({ state, handleOptions, setSelectedDate, submitForm }) {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const bookingStartDate = date.toISOString().split("T")[0];
    date.setDate(date.getDate() + 29);
    const bookingLastDate = date.toISOString().split("T")[0];
    console.log("state" + state)
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                resDate: '',
                resTime: '',
                guests: 1,
                occasion: "Birthday"
            }}
            validationSchema={Yup.object({
                firstName: Yup.string().required("Required"),
                lastName: Yup.string().required("Required"),
                resDate: Yup.string().required("Required"),
                resTime: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                handleOptions(values.resDate, values.resTime);
                submitForm(values);
                resetForm();
                setSubmitting(false);
            }}
        >
            {({ values, handleSubmit, isSubmitting, isValid, dirty }) => (
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" name="firstName" id="firstName" aria-describedby="firstNameError" aria-required="true"/>
                    <ErrorMessage name="firstName" component="div" aria-live="polite" style={{ color: "red" }} />

                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" name="lastName" id="lastName" aria-describedby="lastNameError" aria-required="true"/>
                    <ErrorMessage name="lastName" component="div" aria-live="polite" style={{ color: "red" }} />

                    <label htmlFor="resDate">Choose date</label>
                    <Field type="date" name="resDate" id ="resDate" min={bookingStartDate} max={bookingLastDate} onBlur={(e) => setSelectedDate(e.target.value)} aria-describedby="resDateError" aria-required="true"/>
                    <ErrorMessage name="resDate" component="div" aria-live = "polite" style={{ color: "red" }} />

                    <label htmlFor="resTime">Choose time</label>
                    <Field as="select" name="resTime"id="resTime">
                        <option value="" disabled>Select time</option>
                        {state.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="resTime" component="div" style={{ color: "red" }} />

                    <label htmlFor="guests">Number of guests</label>
                    <Field type="number" name="guests" min="1" max="10" id="guests" />

                    <label htmlFor="occasion">Occasion</label>
                    <Field as="select" name="occasion" id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </Field>

                    <button type="submit" disabled={isSubmitting || !isValid || !dirty} aria-label="on Click">Submit</button>
                </Form>
            )}
        </Formik>
    );
}

export default BookingForm;
