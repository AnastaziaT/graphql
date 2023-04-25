import {TextField} from "@mui/material";
import {FieldPath, useController} from "react-hook-form";
import {EMAIL_RULE, REQUIRED_FIELD_RULE} from "./constants";
import {FC} from "react";
import {AdapterFieldProps} from "./types";
import {FormState} from "../../types";
import {ClearButton} from "../../../shared/ClearButton";

export const TextInputField: FC<AdapterFieldProps> = ({control, name, label, errors}) => {
    const rules = {...EMAIL_RULE, ...REQUIRED_FIELD_RULE};
    const {
        field: {value, onChange},
    } = useController<FormState, FieldPath<FormState>>({name, rules, control});

    return (
        <TextField
            label={label}
            variant="outlined"
            onChange={onChange}
            value={value}
            error={!!errors[name]}
            helperText={errors[name]?.message}
            InputProps={{
                endAdornment: value ? (
                        <ClearButton onChange={onChange}/>
                    )
                    : null,
            }}
        />
    )
}
