import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DocumentDropzone } from '../DocumentDropzone';
import { DocumentTreeView } from '../DocumentTreeView';

const json = null

export const DocumentMasterView = () => {
  return (
    <>
      <Row>
        <Col>
          <DocumentDropzone />
        </Col>
      </Row>

    </>
  )
}