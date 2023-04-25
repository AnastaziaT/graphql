import {FC} from "react";
import {FieldPath, useController} from "react-hook-form";
import {RelationControl} from "../../../RelationControl";
import {AdapterFieldProps} from "./types";
import {REQUIRED_FIELD_RULE} from "./constants";
import {FormState} from "../../types";


export const RelationControlField: FC<AdapterFieldProps> = ({control, name, errors, label}) => {
    const rules = {...REQUIRED_FIELD_RULE};
    const {
        field: {value, onChange},
    } = useController<FormState, FieldPath<FormState>>({name, rules, control});

    return (
        <RelationControl
            onChange={onChange}
            value={value}
            error={!!errors[name]}
            helperText={errors[name]?.message}
            label={label}
        />
    )
}