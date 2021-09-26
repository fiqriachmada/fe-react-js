import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { getMemberById } from "../../apis/memberService";

const MemberDetail = ({ match }) => {
  const { id } = match.params;
  const [member, setMember] = useState({});

  useEffect(() => {
    getMemberById(id).then((response) => setMember(response.data));
  }, []);

  return (
    <Row>
      <Col>
        <h3>Member </h3>
        <div className="card shadow h-100 py-2">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 rounded-circle">
                <Image
                  src="https://sweetalert2.github.io/images/react.svg"
                />
              </div>
              <div className="col-md-9">
                <h4>
                  {member.firstName} {member.lastName}
                </h4>
                <hr />
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="mb-0 font-weight-bold text-gray-800">
                      {member.firstName}
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="btn-group float-right">
                      <button
                        type="submit"
                        className="card-link btn btn-sm btn-primary"
                      >
                        <i className="fas fa-shopping-basket"></i> Active
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <p className="card-text text-justify">
                      <strong>Email</strong> <br />
                      <br />
                      {member.email}
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p className="card-text text-justify">
                      <strong>Password</strong> <br />
                      <br />
                      {member.password}
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p className="card-text text-justify">
                      <strong>Status</strong> <br />
                      <br />
                      {member.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MemberDetail;
