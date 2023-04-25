import {Clear} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {FC} from "react";

export const ClearButton: FC = ({onChange}) => (
    <IconButton onClick={() => onChange('')} size="small">
        <Clear fontSize="small"/>
    </IconButton>
)