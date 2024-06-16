import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact () {
    const formData = { userName: "", userEmail: "", userMessage: ""};

    const [data, setData] = useState(formData);
    const handleInputChange = (e) => {
        const {id, value} = e.target;

        setData({ ...data, [id]: value});
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Thank you for your message ${data.userName}`);
        setData(formData);
    };
    return (
        <Row>
            <Col sm={9}>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            placeholder="e.g. Jack Jones"
                            value={data.userName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userEmail"
                            placeholder="Enter your email address"
                            value={data.userEmail}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Message</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userMessage"
                            placeholder="Enter your message"
                            value={data.userMessage}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Send</button>
                </form>
            </Col>
        </Row>
    );
}

export default Contact