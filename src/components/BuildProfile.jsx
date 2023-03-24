import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../context/UserInfo";

function BuildProfile() {
  const { user, setState, setUser } = useContext(UserContext);
  const { setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  //Token was hardcoded here for time being.
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NGNiNTUyZDU2OTJjOGJiMjA2NGEiLCJpYXQiOjE2NzkzMDkwNDMsImV4cCI6MTY3OTU2ODI0M30.kXmjGf93fauSHMxp0ktn06u6xriKRmO8n9IW0rGQDl4";

  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [codeSydneyBadge, setCodeSydneyBadge] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [yrsOfExpCoding, setYrsOfExpCoding] = useState("");
  const [error, setError] = useState();
  const [resume, setResume] = useState("");

  const handleAbout = (e) => {
    setAbout(e.target.value);
  };

  const handleSkills = (e) => {
    setSkills(e.target.value);
  };

  const handleEducation = (e) => {
    setEducation(e.target.value);
  };

  const handleCodeSydneyBadge = (e) => {
    setCodeSydneyBadge(e.target.value);
  };

  const handlePortfolioLink = (e) => {
    setPortfolioLink(e.target.value);
  };

  const handleGithubLink = (e) => {
    setGithubLink(e.target.value);
  };

  const handleLinkedinLink = (e) => {
    setLinkedinLink(e.target.value);
  };

  const handleYrsOfExpCoding = (e) => {
    setYrsOfExpCoding(e.target.value);
  };

  const handleResume = (e) => {
    setResume(e.target.files[0]);
  };

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  //Appending the form data and sending it through handlePost.
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("about", about);
    formData.append("skills", skills);
    formData.append("education", education);
    formData.append("codeSydneyBadge", codeSydneyBadge);
    formData.append("portfolioLink", portfolioLink);
    formData.append("githubLink", githubLink);
    formData.append("linkedinLink", linkedinLink);
    formData.append("yrsOfExpCoding", yrsOfExpCoding);
    formData.append("resume", resume);
    handlePost(formData);
  };

  //Post data through axios to the database. Redirection need to be added.
  const handlePost = async (user) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/candidate/profile",
        user,
        config
      );
      if (res.status === 200) {
        setError("");
        setIsLoggedIn(true);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  // //Form data input for "skills", "education" and "code.Sydney" badges need to be updated matching an array
  return (
    <div>
      <div className="row ms-4 me-4 mb-4 mt-4 text-center border txt-blue">
        <h1>Build your jrdev profile</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="container-fluid">
            <div className="row ms-4 mb-4 me-4 border ps-2 pe-2">
              <div className="col">
                <div className="container cntr mt-4">
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <h5>Tell us about yourself</h5>
                      </div>
                      <div className="form-outline">
                        <textarea
                          className="form-control"
                          rows="8"
                          placeholder="Summary"
                          id="aboutInput"
                          maxLength={300}
                          onChange={handleAbout}
                          value={about}
                        ></textarea>
                        <label
                          htmlFor="aboutInput"
                          className="form-label"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <div className="form-outline">
                      <h5>Add your skills</h5>
                    </div>
                    <div className="form-outline">
                      <textarea
                        className="form-control"
                        rows="2"
                        id="skillsInput"
                        placeholder="E.g. React"
                        onChange={handleSkills}
                        value={skills}
                      ></textarea>
                      <label
                        htmlFor="skillsInput"
                        className="form-label"
                      ></label>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <div className="form-outline">
                      <h5>Education</h5>
                    </div>
                    <div className="form-outline">
                      <textarea
                        className="form-control"
                        rows="2"
                        id="educationInput"
                        placeholder="E.g. Bachelors in Computer Science"
                        onChange={handleEducation}
                        value={education}
                      ></textarea>
                      <label
                        htmlFor="educationInput"
                        className="form-label"
                      ></label>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <div className="form-outline">
                      <h5>Your Code.Sydney badges</h5>
                    </div>
                    <div className="form-outline">
                      <textarea
                        className="form-control"
                        rows="2"
                        id="codeSydneyBadgeInput"
                        placeholder="Enter your Code.Sydney Badge"
                        onChange={handleCodeSydneyBadge}
                        value={codeSydneyBadge}
                      ></textarea>
                      <label
                        htmlFor="codeSydneyBadgeInput"
                        className="form-label"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mt-4 mb-4 me-4 border">
                <div className="container cntr mt-4">
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <h5>Portfolio URL</h5>
                      </div>
                      <div className="form-outline">
                        <input
                          type="url"
                          className="form-control rounded"
                          id="portfolioLinkInput"
                          placeholder="Enter URL"
                          onChange={handlePortfolioLink}
                          value={portfolioLink}
                        />
                        <label
                          htmlFor="portfolioLinkInput"
                          className="form-label"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <h5>Github URL</h5>
                      </div>
                      <div className="form-outline">
                        <input
                          type="url"
                          className="form-control rounded"
                          id="githubLinkInput"
                          placeholder="Enter URL"
                          onChange={handleGithubLink}
                          value={githubLink}
                        />
                        <label
                          htmlFor="githubLinkInput"
                          className="form-label"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <h5>LinkedIn URL</h5>
                      </div>
                      <div className="form-outline">
                        <input
                          type="url"
                          className="form-control rounded"
                          id="linkedinLinkInput"
                          placeholder="Enter URL"
                          onChange={handleLinkedinLink}
                          value={linkedinLink}
                        />
                        <label
                          htmlFor="linkedinLinkInput"
                          className="form-label"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <h5>Years of experience in coding</h5>
                      </div>
                      <div className="form-outline">
                        <input
                          type="number"
                          className="form-control rounded"
                          id="yrsOfExpCodingInput"
                          placeholder="Enter number of years"
                          onChange={handleYrsOfExpCoding}
                          value={yrsOfExpCoding}
                        />
                        <label
                          htmlFor="yearsofExpInput"
                          className="form-label"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <h5>Upload your resume</h5>
                      </div>

                      <div className="file-upload-wrapper">
                        <input
                          type="file"
                          id="resume"
                          className="resume"
                          accept=".pdf"
                          onChange={handleResume}
                        />
                        <br></br>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="btn button-blue btn-block mb-4"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default BuildProfile;
