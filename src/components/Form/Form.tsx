import {FC} from "react";
import css from "./Form.module.css";
import {FormCard} from "./components/FormCard/FormCard";
import Button from '@mui/material/Button';
import {useForm} from "react-hook-form";
import {TextAreaField} from "./components/adapters/TextAreaField";
import {TextInputField} from "./components/adapters/TextInputField";
import {PositionControlField} from "./components/adapters/PositionControlField";
import {RelationControlField} from "./components/adapters/RelationControlField";
import {FormState} from "./types";

const defaultFormState: FormState = {
    position: '',
    relation: '',
    email: '',
    additionalInformation: '',
}

export const Form: FC = () => {
    const {handleSubmit, formState: {errors}, control} = useForm<FormState>({
        defaultValues: defaultFormState,
        mode: 'onBlur'
    });
    const onSubmit = (data: FormState) => console.log(data);

    return (
        <>
            <FormCard>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={css.controlContainer}>
                        <PositionControlField name="position" control={control} errors={errors}/>
                        <RelationControlField name="relation" control={control} errors={errors}/>
                        <TextInputField name="email" control={control} label="Email" errors={errors}/>
                        <TextAreaField name="additionalInformation" control={control} errors={errors}
                                       label="Additional information"/>
                        <div>
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </FormCard>
        </>
    )
}