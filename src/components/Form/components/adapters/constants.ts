export const EMAIL_RULE = {
    pattern: {
        value: /^[-0-9A-z.]+@([-0-9A-Za-z]+\.)[A-Za-z.]+$/,
        message: 'Email is incorrect',
    },
};

export const REQUIRED_FIELD_RULE = {required: {value: true, message: 'Required field'}};

export const MAX_LENGTH_10 = { maxLength: { value: 10, message: 'Maximum field length is 10 characters' } };