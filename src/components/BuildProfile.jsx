import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserInfo";
function BuildProfile() {
  const { user, setUser, setState } = useContext(UserContext);
  const handleClick = () => {
    setState();
    setUser();
  };
  return (
    <div>
      <div class="row ms-4 me-4 mb-4 mt-4 text-center border">
        <h1>Build your profile here</h1>
      </div>

      <form>
        <div class="row ms-4 me-4 mb-4 border">
          <div class="col-sm-7">
            <div className="container cntr mt-5">
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <h5>Tell us about yourself</h5>
                  </div>
                  <div class="form-outline">
                    <textarea
                      class="form-control"
                      rows="8"
                      placeholder="Summary"
                    ></textarea>
                    <label class="form-label"></label>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <div class="form-outline">
                  <h5>Add your skills</h5>
                </div>
                <div class="form-outline">
                  <textarea class="form-control" rows="2"></textarea>
                  <label class="form-label"></label>
                </div>
              </div>

              <div class="form-outline mb-4">
                <div class="form-outline">
                  <h5>Your Code.Sydney badges</h5>
                </div>
                <div class="form-outline">
                  <textarea class="form-control" rows="2"></textarea>
                  <label class="form-label"></label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-4 mt-4 mb-4 border">
            <div className="container cntr mt-5">
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <h5>Github URL</h5>
                  </div>
                  <div class="form-outline">
                    <textarea class="form-control" rows="1"></textarea>
                    <label class="form-label"></label>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <div class="form-outline">
                  <h5>LinkedIn URL</h5>
                </div>
                <div class="form-outline">
                  <textarea class="form-control" rows="1"></textarea>
                  <label class="form-label"></label>
                </div>
              </div>

              <div class="form-outline mb-4">
                <div class="form-outline">
                  <h5>Years of experience in coding</h5>
                </div>
                <div class="form-outline">
                  <textarea class="form-control" rows="1"></textarea>
                  <label class="form-label"></label>
                </div>
              </div>

              <div class="form-outline mb-4">
                <div class="form-outline">
                  <h5>Upload your resume</h5>
                </div>

                <div class="file-upload-wrapper">
                  <input type="file" id="input-file-now" class="file-upload" />
                  <br></br>
                </div>
              </div>

              <div>
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default BuildProfile;
