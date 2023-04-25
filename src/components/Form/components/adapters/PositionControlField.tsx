import {FC} from "react";
import {PositionControl} from "../../../PositionControl";
import {AdapterFieldProps} from "./types";
import {REQUIRED_FIELD_RULE} from "./constants";
import {FieldPath, useController} from 'react-hook-form';
import {FormState} from "../../types";

export const PositionControlField: FC<AdapterFieldProps> = ({control, name, errors, label}) => {
    const rules = {...REQUIRED_FIELD_RULE};

    const {
        field: {value, onChange},
    } = useController<FormState, FieldPath<FormState>>({name, rules, control});

    return (
        <PositionControl
            onChange={onChange}
            value={value}
            label={label}
            error={!!errors[name]}
            helperText={errors[name]?.message}
        />
    )
}