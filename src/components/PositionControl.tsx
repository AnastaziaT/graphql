import {graphql} from '../gql';
import {FC} from 'react';
import {ControlBase} from "./shared/ControlBase";

const positionsQueryDocument = graphql(/* GraphQL */ `
    query applicantIndividualCompanyPositions {
        applicantIndividualCompanyPositions {
            data {
                id
                name
            }
        }
    }
`);


export const PositionControl: FC = ({onChange, value, error, helperText, label = "Position"}) =>
    <ControlBase
        queryDocument={positionsQueryDocument}
        endPointName="applicantIndividualCompanyPositions"
        label={label}
        onChange={onChange}
        value={value}
        error={error}
        helperText={helperText}
    />
