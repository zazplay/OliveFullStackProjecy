import { FC } from 'react';
import styles from './AddNews.module.css';
import Form from 'react-bootstrap/esm/Form';

//public string Title { get; set; }
//     public string Description { get; set; }
//     public string ImgSrc { get; set; }
//     public string Source { get; set; }

const AddNews: FC = () => (
  <div className={styles.AddNews}>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
  </div>
);

export default AddNews;
