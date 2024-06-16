import React, { useState } from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PortfolioList from './PortfolioList';

import data from "../data/portfolio.json";

function PortfolioDashboard() {
    const [portfolio, setPortfolio] = useState(data);

    const onFilterPortfolio = (e) => {
        const filter = e.target.value.toLowerCase();

        if (filter === "") {
            setPortfolio(data);
        } else {
            const filteredPortfolio = data.filter((item) =>
            item.tags.includes(filter)
        );
        setPortfolio(filteredPortfolio);
        }
    };

    return(
        <Row>
            <Col sm={12}>
                <PortfolioList portfolio={portfolio} onFilter={onFilterPortfolio} />
            </Col>
        </Row>
    );
}

export default PortfolioDashboard;