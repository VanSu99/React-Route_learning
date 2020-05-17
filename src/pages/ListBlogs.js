import React from "react";
import { Row, Col } from "antd";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { listBlogs } from '../fakeData/listBlog';

const StyledBlog = styled.div`
    border: 1px solid #333;
    height: 100%;
`;


function ListBlogs(props) {
	//console.log(listBlogs);
	return (
		<div>
			<h2>Hello guys, this is ListBlogs</h2>
			<Row gutter={[16, 24]}>
				{
                    listBlogs.map(article => (
                        <Col xs={{span: 24}} sm={{span: 12}} md={{span: 6}} key={article.id}>
					        <StyledBlog>
                                <h3>
                                    <Link to={`/blog/${article.id}`}>{ article.title }</Link>
                                </h3>
                                <p>{ article.content }</p>
                            </StyledBlog>
				        </Col>
                    ))
                }
			</Row>
		</div>
	);
}

export default ListBlogs;
