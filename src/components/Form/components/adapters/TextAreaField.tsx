import {IconButton, TextField} from "@mui/material";
import { FieldPath, useController} from "react-hook-form";
import {Clear} from '@mui/icons-material';
import {MAX_LENGTH_10} from "./constants";
import {FC} from "react";
import {AdapterFieldProps} from "./types";
import {FormState} from "../../types";
import {ClearButton} from "../../../shared/ClearButton";

export const TextAreaField: FC<AdapterFieldProps> = ({control, name, label, errors}) => {
    const rules = {...MAX_LENGTH_10};
    const {
        field: {value, onChange},
    } = useController<FormState, FieldPath<FormState>>({name, rules, control});

    return (
        <TextField
            label={label}
            variant="outlined"
            multiline
            minRows={3}
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