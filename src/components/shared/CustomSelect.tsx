import {FC} from 'react';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import {DeleteRounded} from '@mui/icons-material';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import {IOptionValue} from "../Form/types";

const convertOptionToString = (opt: IOptionValue) => `${opt.name} [${opt.id}]`;
const filterOptions = createFilterOptions<IOptionValue>({
    matchFrom: 'start',
    stringify: convertOptionToString,
});

interface ICustomSelectProps {
    options: IOptionValue[];
    setOptions: (options: IOptionValue[]) => void;
    selectedValue: IOptionValue | '';
    setSelectedValue: (selectedValue: IOptionValue | '') => void;
    label: string;
    error: boolean;
    helperText: string;
}

export const CustomSelect: FC<ICustomSelectProps> =
    ({
         options,
         setOptions,
         selectedValue,
         setSelectedValue,
         label,
         error,
         helperText
     }) => {
        const handleChange = (event, newValue) => {
            if (typeof newValue === 'string') {
                return;
            }
            if (newValue && newValue.inputValue && !newValue.id) {
                const newOption = {
                    inputValue: newValue.inputValue,
                    name: newValue.inputValue,
                    id: newValue.inputValue,
                };

                setSelectedValue(newOption);
                setOptions([...options, newOption]);
            } else {
                setSelectedValue(newValue);
            }
        };

        const handleFilter = (options, params) => {
            const filtered = filterOptions(options, params);
            const {inputValue} = params;

            if (inputValue !== '' && !filtered.length) {
                filtered.push({
                    inputValue,
                    name: `Click to add "${inputValue}"`,
                    id: '',
                });
            }
            return filtered;
        };

        const getOptionValue = (option) => {
            if (typeof option === 'string') {
                return option;
            }
            if (option.inputValue && !option.id) {
                return option.inputValue;
            }
            return convertOptionToString(option);
        };

        const renderOption = (props, option) => {

            const handleClick = (e) => {
                setOptions(options.filter((opt) => opt.id !== option.id));
                e.stopPropagation();
            }
            // тк имена не уникальны, выводим в скобках id
            return (
                <li key={option.id} {...props} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>{option.id ? convertOptionToString(option) : option.name}</div>
                    {option.inputValue && option.id ? (
                        <IconButton onClick={handleClick} aria-label="delete" color="primary">
                            <DeleteRounded/>
                        </IconButton>
                    ) : null}
                </li>
            )
        };

        const renderInput = (params) => <TextField {...params} label={label} error={error} helperText={helperText}/>;

        return (
            <Autocomplete
                value={selectedValue}
                onChange={handleChange}
                filterOptions={handleFilter}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={options}
                getOptionLabel={getOptionValue}
                renderOption={renderOption}
                freeSolo
                renderInput={renderInput}
            />
        );
    };
