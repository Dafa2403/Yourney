import React, { useEffect, useState } from "react";
import axios from "axios";
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

const Destinasi = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getDestinasi = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8080/destinasi", {
          signal: controller.signal,
        });
        console.log(res.data);
        isMounted && setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getDestinasi();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const tableExample = [
    {
      destinas: "Yiorgos Avraamu",
      deskripsi:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      linkGambar: "https://picsum.photos/200/300",
      activity: "10 sec ago",
    },
    {
      destinas: "Yiorgos Avraamu",
      deskripsi:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      linkGambar: "https://picsum.photos/200/300",
      activity: "10 sec ago",
    },
    {
      destinas: "Yiorgos Avraamu",
      deskripsi:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      linkGambar: "https://picsum.photos/200/300",
      activity: "10 sec ago",
    },
  ];

  return (
    <>
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
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div>{item.destinas}</div>
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
