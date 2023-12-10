/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AdminSidebar from "../../../Sidebar/AdminSidebar";
import Footer from "../../../Footer";
import magagineImage1 from "../../../../../public/managingCommittee/mg1.png";
import magagineImage2 from "../../../../../public/managingCommittee/mg2.png";
import magagineImage3 from "../../../../../public/managingCommittee/mg3.png";
import magagineImage4 from "../../../../../public/managingCommittee/mg4.png";
import magagineImage5 from "../../../../../public/managingCommittee/mg5.png";
import magagineImage6 from "../../../../../public/managingCommittee/mg6.png";
import magagineImage7 from "../../../../../public/managingCommittee/mg7.png";
import magagineImage8 from "../../../../../public/managingCommittee/mg8.png";

const ManagingCommitteeTable = () => {
  // Managing CommitteeTable data

  //Managing CommitteeTable  all data show in the table

  return (
    <>
      <AdminSidebar>
        <section className="ftco-section">
          <div className="container">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Managing Committee Table List</h2>
              <div className="admin">
                <Link to="#" className="links">
                  user
                </Link>
                <RxSlash />
                <Link to="" className="actives">
                  managing-committee
                </Link>
              </div>
            </div>

            <div className="teaching_staff_title">
              <h4
                style={{
                  marginTop: "-10px",
                  width: "400px",
                  backgroundColor: "#053270",
                  borderRadius: "5px",
                  border: "3px solid black",
                  color: "#F7FBFF",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "-30px",
                }}
              >
                <b>Managing Committee Members</b>
              </h4>
            </div>

            <div className="card">
              {/* 1st image row start */}
              <div className="row align-items-start">
                <div className="col">
                  <img
                    className="rounded float-start managing_committee_image1"
                    src={magagineImage1}
                    alt="image"
                  />
                </div>
                <div className="col">
                  <img
                    className="rounded float-start managing_committee_image1"
                    src={magagineImage2}
                    alt="image"
                  />
                </div>
                <div className="col">
                  <img
                    className="rounded float-start managing_committee_image1"
                    src={magagineImage3}
                    alt="image"
                  />
                </div>
                <div className="col">
                  <img
                    className="rounded float-start managing_committee_image1"
                    src={magagineImage4}
                    alt="image"
                  />
                </div>
              </div>

              <div class="row align-items-start">
                <div class="col">
                  <div className="row managing_committee_text1">
                    <p class="rounded float-start">
                      A K M Arif <br />
                      Chairman
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div class="col">
                  <div className="row managing_committee_text1">
                    <p class="rounded float-start">
                      A K M Arif <br />
                      Chairman
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div class="col">
                  <div className="row managing_committee_text1">
                    <p class="rounded float-start">
                      A K M Arif <br />
                      Chairman
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div class="col">
                  <div className="row managing_committee_text1">
                    <p class="rounded float-start">
                      A K M Arif <br />
                      Chairman
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>
              </div>
              {/* 1st image row end */}

              {/* 2nd image row start */}
              <div className="row align-items-start">
                <div className="col">
                  <img
                    className="rounded float-start managing_committee_image2"
                    src={magagineImage5}
                    alt="image"
                  />
                </div>
                <div className="col">
                  <img
                    className="rounded float-start managing_committee_image2"
                    src={magagineImage6}
                    alt="image"
                  />
                </div>
                <div className="col">
                  <img
                    className="rounded float-start managing_committee_image2"
                    src={magagineImage7}
                    alt="image"
                  />
                </div>
                <div className="col">
                  <img
                    className="rounded float-start managing_committee_image2"
                    src={magagineImage8}
                    alt="image"
                  />
                </div>
              </div>

              <div class="row align-items-start">
                <div class="col">
                  <div className="row managing_committee_text2">
                    <p class="rounded float-start">
                      A K M Arif <br />
                      Chairman
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div class="col">
                  <div className="row managing_committee_text2">
                    <p class="rounded float-start">
                      A K M Arif <br />
                      Chairman
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div class="col">
                  <div className="row managing_committee_text2">
                    <p class="rounded float-start">
                      A K M Arif <br />
                      Chairman
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div class="col">
                  <div className="row managing_committee_text2">
                    <p class="rounded float-start">
                      A K M Arif <br />
                      Chairman
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>
              </div>
              {/* 2nd image row end */}
            </div>

            <div className="card">
              <div className="row">
              <h4
                style={{
                  marginTop: "-10px",
                  width: "400px",
                  color: "black",
                  marginLeft:'170px',
                  marginBottom: "30px",
                }}
              >
                <b>Meeting Details :</b>
              </h4>
              </div>

                {/* table start */}
                <div className="col-md-4">
                  <div>
                    <table class="table table-primary table-striped">
                      <tbody>
                        <tr>
                          <td>Team Name: </td>
                          <td>Sports Committee</td>
                        </tr>
                        <tr>
                          <td>Meeting Date: </td>
                          <td>December20, 2023</td>
                        </tr>
                        <tr>
                          <td>Time: </td>
                          <td>1:00 PM-4:00 PM</td>
                        </tr>
                        <tr>
                          <td>Venue: </td>
                          <td>Conference Hall</td>
                        </tr>
                        <tr>
                          <td>Attendance: </td>
                          <td>
                            Ella Mcghee, Carin Aleman, Katherine Muins, james
                            Miller, and Elizabeth Zamora
                          </td>
                        </tr>
                        <tr>
                          <td>Absent Members: </td>
                          <td>
                            Becky Bragg, Michael Mitchell, and Elizabeht
                            Williams
                          </td>
                        </tr>
                        <tr>
                          <td>Minuters Taker: </td>
                          <td>Carin Aleman</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* table end */}
            </div>

            <div className="card">
              {/* Agenda Details start*/}
            <div className="row">
              <h4
                style={{
                  marginTop: "10px",
                  width: "400px",
                  color: "black",
                  marginLeft:'170px',
                  marginBottom: "30px",
                }}
              >
              <b>Agenda Details :</b>
            </h4>
            </div>

            <div className="col-md-4">
              <div>
                <table class="table table-primary table-striped">
                  <tbody>
                    <tr>
                      <td>AGENDA</td> 
                    </tr>
                    <tr> 
                      <td>To discuss organization the Sports Festival.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
              {/* Agenda Details end*/}
            </div>
                 

            <div className="card">
            {/* meeting minite start*/}
            <div className="row">
              <h4
                style={{
                  marginTop: "10px",
                  width: "400px",
                  color: "black",
                  marginLeft:'170px',
                  marginBottom: "30px",
                }}
              >
              <b>Meeting Minites :</b>
            </h4>
            <ul>
              <li>All members of the committee will help in looking for event sponsors</li>
              <li>The proposed plan will be persentation to the Board of Trustees on Monday.</li>
            </ul>
            </div>
            {/* meeting minite end*/}
            </div>

            <div className="card">
              {/* Action plan start*/}
            <div className="row">
              <h4
                style={{
                  marginTop: "10px",
                  width: "400px",
                  color: "black",
                  marginLeft:'170px',
                  marginBottom: "30px",
                }}
              >
              <b>Action Plan :</b>
            </h4>
            </div>

            <div className="col-md-4">
              <div>
                <table class="table table-primary table-striped">
                  <tbody>
                    <tr>
                      <th>Action: </th>
                      <th>Assigned To</th>
                    </tr>
                    <tr>
                      <td>Preare the sponsorship letter.</td>
                      <td>Ella McGhee</td>
                    </tr>
                    <tr>
                      <td>Preare the presentation of the event proposal.</td>
                      <td>Katherine Mullins</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
              {/* Action plan end*/}
            </div>

           </div>   
        </section>
        <Footer />
      </AdminSidebar>
    </>
  );
};

export default ManagingCommitteeTable;
