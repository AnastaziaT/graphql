type Info = {
    name: string;
    id: string;
}

export type FormState = {
    position: Info | '';
    relation: Info | '';
    email: string;
    additionalInformation?: string;
};

export interface IOptionValue {
    inputValue?: string;
    id: string;
    name: string;
}