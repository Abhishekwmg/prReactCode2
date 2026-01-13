import { useState } from "react";
import { formData } from "../multi-step-form/form-data";

export default function MultiForm() {
    const [step, setStep] = useState(0);
    const [input, setInput] = useState("");

    const formDataLength = formData.length - 1;

    function handleNextStep() {
        if (step > formDataLength) return;
        setStep((prevStep) => prevStep + 1);
    }

    function handlePrevStep() {
        if (step < 1) return;
        setStep((prevStep) => prevStep - 1);
    }

    const currentFormData = formData[step];

    return (
        <>
            <h1>Multi Step Form</h1>
            <p>
                Step {step} of {formDataLength}
            </p>
            <form key={currentFormData.id}>
                <h3>{currentFormData.title}</h3>
                <p>{currentFormData.description}</p>
                {currentFormData.fields.map((d) => {
                    return (
                        <div key={d.name}>
                            {d.type === "select" ? (
                                <select>
                                    {d.options.map((option) => {
                                        return (
                                            <option key={option.label} value={option.value}>
                                                {option.label}
                                            </option>
                                        );
                                    })}
                                </select>
                            ) : (
                                <label>
                                    {d.label}
                                    <input
                                        value={input}
                                        onChange={e => setInput(e.target.value)}
                                        name={d.name}
                                        type={d.type}
                                        placeholder={d.placeholder}
                                        required={d.required}
                                    />
                                </label>
                            )}
                        </div>
                    );
                })}
            </form>
            <button disabled={step === 0} onClick={handlePrevStep}>
                Prev
            </button>
            <button disabled={step === formDataLength} onClick={handleNextStep}>
                Next
            </button>
        </>
    );
}
