import {FC} from 'react';
import css from './FormCard.module.css';

export const FormCard: FC = ({children}) => (
    <div className={css.card}>
        {children}
    </div>
);
