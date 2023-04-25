import {graphql} from '../gql';
import {ControlBase} from "./shared/ControlBase";

const postsQueryDocument = graphql(/* GraphQL */ `
    query applicantIndividualCompanyRelations {
        applicantIndividualCompanyRelations {
            data {
                id
                name
            }
        }
    }
`);

export const RelationControl = ({onChange, value, error, helperText, label = "Relation"}) =>
    <ControlBase
        queryDocument={postsQueryDocument}
        endPointName="applicantIndividualCompanyRelations"
        label={label}
        onChange={onChange}
        value={value}
        error={error}
        helperText={helperText}
    />