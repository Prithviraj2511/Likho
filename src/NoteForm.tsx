import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreatableReactSelect from 'react-select/creatable';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function NoteForm() {
    return <Form>
        <Stack gap={4}>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control required placeholder="Enter Title" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <CreatableReactSelect isMulti />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="markdown">
                <Form.Label>Body</Form.Label>
                <Form.Control required as="textarea" rows={14} />
            </Form.Group>
            <Stack direction="horizontal" gap={2} className="justify-content-end">
                <Button type="submit" variant="primary">Save</Button>
                <Link to="..">
                    <Button type="button" variant="outline-secondary">Cancel</Button>
                </Link>
            </Stack>
        </Stack>
    </Form>
}

export default NoteForm;