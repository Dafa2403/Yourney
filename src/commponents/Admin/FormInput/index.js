import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CRow,
  CInputGroup,
  CInputGroupText,
  CFormTextarea,
} from "@coreui/react";

const FormControl = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Input Data Destinasi</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Input data destinasi wisata
            </p>
            <CFormInput
              type="text"
              placeholder="Nama Destinasi"
              aria-label="default input example"
              label="Nama Desitinasi"
            />
            <br />
            <CInputGroup>
              <CInputGroupText>Deskripsi</CInputGroupText>

              <CFormTextarea aria-label="With textarea"></CFormTextarea>
            </CInputGroup>
            <br />

            <div className="mb-3">
              <CFormInput
                type="file"
                id="formFileMultiple"
                label="Multiple files input example"
                multiple
              />
            </div>
            <br />
            <CButton type="submit" className="mb-3">
              Submit
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default FormControl;
