import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import useRefreshToken from "../../../hooks/useRefreshToken";
import useAuth from "../../../hooks/useAuth";

const Destinasi = () => {
  const [Destinasi, setDestinasi] = useState({});
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  // console.log("des", auth.accessToken);
  const arr = [];
  useEffect(() => {
    const res = axios
      .get("/destinasi", {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then((res) => {
        arr.push(res.data);
        for (let i = 0; i < arr.length; i++) {
          const element = arr[i];
          // console.log(element);
          setDestinasi(element);
        }
      });
    // console.log(arr);
  }, []);
  console.log(Destinasi);

  return (
    <>
      <CButton onClick={() => refresh()}>test</CButton>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>List Data</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Nama Destinasi</CTableHeaderCell>
                    <CTableHeaderCell>Deskripsi</CTableHeaderCell>
                    <CTableHeaderCell>Image</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {Destinasi.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div>{item.nama_desinasi}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div style={{ width: 300 }}>
                          <p>{item.deskripsi}</p>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div size="xl">
                          <p>{item.linkGambar}</p>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton color="warning">Edit</CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Destinasi;
