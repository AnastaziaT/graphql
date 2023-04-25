import {useEffect, useState} from "react";
import {CustomSelect} from "./CustomSelect";
import {useGraphQL} from "../../use-graphql";
import {IOptionValue} from "../Form/types";


type ControlBaseProps<T> = {
    queryDocument: T;
    endPointName: string;
    label: string;
    onChange: (value: IOptionValue | '') => void;
    value: IOptionValue | '';
    error: boolean;
    helperText: string;
}
export const ControlBase = <T, >({queryDocument, endPointName, label, onChange, value, error, helperText}: ControlBaseProps<T>) => {
    const [options, setOptions] = useState<IOptionValue[]>([]);

    const { data } = useGraphQL(queryDocument);

    useEffect(() => {
        const resData = data?.data?.[endPointName].data;

        if (resData) {
            setOptions(resData);
        }
    }, [data]);

    return (
        <CustomSelect
            options={options}
            setOptions={setOptions}
            selectedValue={value}
            setSelectedValue={(value) => onChange(value ? {id: value.id, name: value.name} : '')}
            label={label}
            error={error}
            helperText={helperText}
        />
    );
}