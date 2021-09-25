import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getListMember, deleteMember } from "../../apis/memberService";
import MemberComponent from "./MemberComponent";

const MemberList = ({ match }) => {
  const { path } = match;

  const [members, setMembers] = useState([]);

  const [modalShow, setModalShow] = useState({
    show: false,
    id: null,
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

  const handleDelete = (id) => {
    setModalShow({
      show: true,
      id,
    });
  };

  const handleDeleteTrue = () => {
    if (modalShow.show && modalShow.id) {
      deleteMember(modalShow.id);
      setModalShow({
        show: false,
        id: null,
      });
    }
  };

  return (
    <section className="py-5 container mt-5">
      <h3>Members Page</h3>
      <Link
        //  to={`{/${path}/add}`}
        to="member/add"
        className="btn btn-sm btn-primary mb-3"
      >
        Add Members
      </Link>
      <Row>
        {members.map((member) => (
          <MemberComponent
            path={path}
            memberId={member.memberId}
            key={member.id}
            firstName={member.firstName}
            lastName={member.lastName}
            username={member.username}
            email={member.email}
            password={member.password}
            status={member.status}
            variant="info"
          />
        ))}
        {members && !members.length && <h3>No Members on Display</h3>}
      </Row>
    </section>
  );
};
export default MemberList;
