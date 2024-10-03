import { FC } from 'react';
import styles from './SelectCategorys.module.css';
import Form from 'react-bootstrap/esm/Form';

//interface SelectCategorysProps {}

// Список категорій
const SelectCategorys: FC = () => (
    <div className={styles.SelectCategorys}>
        <Form.Select aria-label="Default select example" size="sm" className="w-25">
            <option>Select a category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </div>
);

export default SelectCategorys;
