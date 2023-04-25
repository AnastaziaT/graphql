import {UseControllerProps} from "react-hook-form/dist/types/controller";
import {FormState} from "../../types";
import {FieldErrors} from "react-hook-form/dist/types/errors";

export interface AdapterFieldProps extends Pick<UseControllerProps<FormState>, 'name' | 'control'> {
    errors: FieldErrors<FormState>;
    label?: string;
}