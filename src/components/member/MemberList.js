import React, { useEffect, useState } from "react";
import { Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getListMember, deleteMember } from "../../apis/memberService";
import MemberComponent from "./MemberComponent";

const MemberList = ({ match }) => {
  const { path } = match;

  const [members, setMembers] = useState([]);

  const [modalShow, setModalShow] = useState({
    show: false,
    id: null,
    status: 0,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getListMember().then((response) => {
      console.log(response.data);
      setMembers(response.data);
    });
  };

  // const handleDelete = (id, status) => {
  //   deleteMember(id, status);
  //   setModalShow({
  //     show: true,
  //     id,
  //     status,
  //   });
  // };
  const handleDelete = (id, status) => {
    if (status == 0) {
      Swal.fire({
        title: "Are You Sure?",
        icon: "warning",
        confirmButtonText: "Delete",
      }).then((result) => {
        console.log(`id: ${id} status: ${status}`);
        if (result.isConfirmed) {
          deleteMember(id, status);
          Swal.fire("Deleted", "been deleted", "success");
          loadData();
        }
      });
    }
  };

  return (
    <section className="py-5 container mt-5">
      <h3>Members Page</h3>
      <Link to="/members/add" className="btn btn-sm btn-primary mb-3">
        Add Members
      </Link>
      <Row>
        {members.map((member) => (
          <MemberComponent
            path={path}
            memberId={member.id}
            key={member.id}
            firstName={member.firstName}
            lastName={member.lastName}
            username={member.username}
            email={member.email}
            password={member.password}
            status={member.status}
            handleDelete={handleDelete}
            variant="info"
          />
        ))}
        {members && !members.length && <h3>No Members on Display</h3>}
      </Row>
    </section>
  );
};
export default MemberList;
