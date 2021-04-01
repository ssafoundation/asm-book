import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
const SearchForm = () => {
    return (
        <>
            <div className=" home-search-bar">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>

        </>
    );
};

export default SearchForm;