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
              <div className="col-md-3">
                <Image
                  src="https://gist.github.com/jutionck/fe216ab29246405b334458d8b6e30207/raw/3a1de2deb383ec3f2273ef7f7f0c1c7bd9fc0778/book-image-detail.jpeg"
                  fluid
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
                      {member.price}
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="btn-group float-right">
                      <button
                        type="submit"
                        className="card-link btn btn-sm btn-primary"
                      >
                        <i className="fas fa-shopping-basket"></i> Beli
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-8">
                    <p className="card-text text-justify">
                      <strong>Deskripsi</strong> <br />
                      <br />
                      {member.description}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <strong>Detail</strong> <br />
                    <br />
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          Halaman
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right">
                          {member.pages}
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          Tahun Terbit
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right">
                          {member.year}
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          Bahasa
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right">
                          {member.language}
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          Penerbit
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right">
                          {member.publisher}
                        </div>
                      </div>
                    </div>
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
