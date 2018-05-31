import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import SortFilterBar from '../jobs/SortFilterBar';

class UsersShow extends React.Component {
  state = {
    user: {},
    errors: {}
  };


  handleChange = ({ target: { name, value }}) => {
    const errors = { ...this.state.errors, [name]: '' };
    this.setState({ errors, [name]: value });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/users/${id}`)
      .then(res => this.setState({ user: res.data }));
  }

  handleRequestAccept = (job, request) => {
    console.log('this is the job id', job);
    console.log('this is the request id', request);
    console.log(this.state);
    axios
      .put(`/jobs/${job}/requests/${request}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ job: res.data }));
  }

  render(){
    console.log(this.state);
    const { user } = this.state;
    if(Object.keys(user).length === 0) return null;
    return (
      <div>
        <Navbar />
        <Sidebar />
        <SortFilterBar
          handleChange={this.handleChange}
          data={this.state}
        />
        <div className="mainBody">
          <div className="columns is-multiline">
            <div className="column is-four-fifths-desktop is-full-mobile is-two-third-tablet companyLogo">
              <div>
                {Auth.isCurrentUser(!user._id)&&
                <a className="emailIconShow" href={'mailto:' + `${user.email}`}>
                  <i className="far fa-envelope"></i>
                </a>
                }
                {Auth.isCurrentUser(user._id)&&
                <a className="deleteIconShow" onClick={this.handleDelete}>
                  <i  className="far fa-trash-alt"></i>
                </a>
                }
                {Auth.isCurrentUser(user._id)&&
                <a className="editIconShow" onClick={this.handleDelete}>
                  <i className="far fa-edit"></i>
                </a>
                }
                <div className="userShowProfileDetails">
                  <div className="managerName">{user.firstName} {user.lastName}</div>
                  <div className="hiringManager">Hiring Manager</div>
                  <div className="emailDetails">{user.email}</div>
                  <div className="userShowCompanyPicture" style={{ backgroundImage: `url(${user.companyPicture})`}} />
                </div>
              </div>
              <hr />
              <div className="userShowBio">
                <div className="userShowBioDetails">
                  Senior Full Stack Developer currently seeking opportunities I’m always looking for exciting work; from freelance opportunities to working for innovative companies so feel free to get in touch even just to say Hi! hello@willgriff.co.uk
                </div>
              </div>
              <img className="userShowProfilePicture" src={user.picture} />
            </div>
          </div>
          <div className="columns is-multiline">
            {user.jobs.map(job =>
              <div className="column is-four-fifths-desktop is-full-tablet is-mobile" key={job._id}>
                {job.requests.map( request =>
                  <div key={request._id}>
                    <div className="card usersShowRequests">
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <img className="userShowProfilePicture" src={request.user.picture} />
                            <div className="userShowRequestsProfileDetails">
                              <Link to={`/users/${request.user._id}`}>
                                {/* {job.requests &&
                                  // <p>{job.requests}</p>
                                } */}
                                {console.log()}
                                <p>{request.user.firstName} {request.user.lastName}</p>
                                <p>{request.status}</p>
                              </Link>
                              <button onClick={() => this.handleRequestAccept(job._id, request._id)}  className="acceptRequestbutton" ><i className="fas fa-check"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}


export default UsersShow;
