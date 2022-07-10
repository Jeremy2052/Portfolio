import React from "react";
import styled from "styled-components";

function ResumePage() {
  return (
    <Container>
      <ResumeContainer>
        <Skills>
          <Title>Technical skills</Title>
          <Languages>
            <Description>Languages</Description>
            <SubContainer>
              <Left>
                <LanguageSkill>
                  <img src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png" alt="" />
                  <p className="lang">Javascript</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png" alt="" />
                  <p className="lang">HTML/CSS</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png" alt="" />
                  <p className="lang">Python</p>
                </LanguageSkill>
              </Left>

              <Right>
                <LanguageSkill>
                  <img src="https://cloudblogs.microsoft.com/uploads/prod/sites/32/2020/05/SQL.png" alt="" />
                  <p className="lang">SQL</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://cpng.pikpng.com/pngl/s/146-1469146_java-logo-png-transparent-vector-java-logo-png.png" alt="" />
                  <p className="lang">Java</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" alt="" />
                  <p className="lang">C/C++</p>
                </LanguageSkill>
              </Right>
            </SubContainer>
          </Languages>
          <hr className="horizontal" />
          <Frameworks>
            <Description>Frameworks</Description>
            <SubContainer>
              <Left>
                <LanguageSkill>
                  <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" alt="" />
                  <p className="lang">React.JS</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="" />
                  <p className="lang">Next.JS</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU" alt="" />
                  <p className="lang">React Native</p>
                </LanguageSkill>
              </Left>
              <Right>
                <LanguageSkill>
                  <img src="https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix_400x400.jpg" alt="" />
                  <p className="lang">Bootstrap</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://verbose-equals-true.gitlab.io/django-postgres-vue-gitlab-ecs/django.jpg" alt="" />
                  <p className="lang">Django</p>
                </LanguageSkill>
              </Right>
            </SubContainer>
          </Frameworks>
          <hr className="horizontal" />
          <OtherSkills>
            <Description>OS/Tools</Description>
            <SubContainer>
              <Left>
                <LanguageSkill>
                  <img src="https://e7.pngegg.com/pngimages/342/131/png-clipart-penguin-tux-design-logo-linux-penguin-animals-logo.png" alt="" />
                  <p className="lang">Linux (Ubuntu)</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://w7.pngwing.com/pngs/675/642/png-transparent-microsoft-windows-windows-10-windows-7-microsoft-corporation-windows-8-logo-compact-disc-blue-angle-text.png" alt="" />
                  <p className="lang">Windows</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
                  <p className="lang">Git</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_400x400.jpg" alt="" />
                  <p className="lang">NodeJs</p>
                </LanguageSkill>
              </Left>

              <Right>
                <LanguageSkill>
                  <img src="https://e7.pngegg.com/pngimages/466/228/png-clipart-android-studio-integrated-development-environment-logo-android-studio-logo.png" alt="" />
                  <p className="lang">Android Studio</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png?width=256&s=3e825b7205c7f497d4695028e358d26ee359f84b" alt="" />
                  <p className="lang">MySQL</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <p className="lang">Redux</p>
                </LanguageSkill>
                <LanguageSkill>
                  <img src="https://g.foolcdn.com/art/companylogos/square/mdb.png" alt="" />
                  <p className="lang">MongoDB</p>
                </LanguageSkill>
              </Right>
            </SubContainer>
          </OtherSkills>
        </Skills>
        <hr className="horizontal2" />
        <Education>
          <Title>Education</Title>
          {/* <Description>Course works:</Description> */}
          <div className="college">
            <div className="collegeName">
              <div className="leftSide">
                {/* <img src="https://www.uta.edu/ucomm/identity/files/logo/UTA_A-logo_blue-orange-rgb.png" alt="" /> */}
                <h3>University of Texas at Arlington</h3>
              </div>
              <div className="rightSide">
                <p>Graduated: Fall 2021</p>
              </div>
            </div>
            <p>Bachelor of Science Computer Science</p>

            <div className="courses"></div>
          </div>
        </Education>
        <hr className="horizontal2" />
        <Experiences>
          <Title>Work Experiences</Title>
          <Work>
            <div className="header">
              <h5>Staples Inc.</h5>
              <h4>Aug 2018 - Present</h4>
            </div>

            <h6>Sales Associate</h6>
            <ul>
              <li>Helped an average of 50 customers per shift in assisting customers to find products and stock the facility.</li>
              <li>Increased sales by providing full customer service to ensure additional products are provided for customers.</li>
            </ul>
          </Work>
          <hr className="horizontal" />
          <Work>
            <div className="header">
              <h5>Round 1 Amusement & Bowling Entertainment</h5>
              <h4>Dec 2014 - Aug 2017</h4>
            </div>
            <h6>Department Supervisor</h6>
            <ul>
              <li>Increased the department sale by 10% that involved implementing marketing ideas to attract more customers.</li>
              <li>Built a team of 6 to improve the department functionality together.</li>
              <li>Implemented the use of time management to complete reports, train and identify any problems.</li>
            </ul>
          </Work>
        </Experiences>
      </ResumeContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  /* background-color: white; */
`;

const ResumeContainer = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-top: 30px;
  padding: 10px;
  width: 80%;
  /* border: 1px solid white; */
  -webkit-box-shadow: 0px 12px 26px 5px rgba(0, 0, 0, 0.71);
  box-shadow: 0px 12px 26px 5px rgba(0, 0, 0, 0.71);
  background-color: #3a3939;

  @media (max-width: 480px) {
    width: 100%;
  }

  .horizontal2 {
    border-color: #c7c7c7;
    margin: 10px 0;
  }
`;

const Skills = styled.div`
  margin-bottom: 10px;
  padding: 10px 0;
  /* border-bottom: 1px solid black; */
  .horizontal {
    border-color: #585858;
  }
`;

const Languages = styled.div`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  /* border: 1px solid white; */
  padding: 10px;
  height: 100px;
  width: 200px;
  /* margin-right: 30px; */
  /* margin: 0 20px; */
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  /* border: 1px solid white; */
  margin: 0 20px;
  height: 100px;
  width: 200px;
`;

const LanguageSkill = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  p {
    font-size: 20px;
    margin-left: 10px;
    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    /* object-fit: cover; */
  }
`;

const SubContainer = styled.div`
  display: flex;
  padding: 10px 0;
  /* margin: 10px; */
  /* justify-content: space-evenly; */
  /* align-items: center; */
`;

const OtherSkills = styled.div``;

const Frameworks = styled.div`
  display: flex;
  flex-direction: column;
`;

const Education = styled.div`
  /* border-bottom: 1px solid black; */
  padding: 10px 0;
  margin-bottom: 10px;

  .college {
    p {
      font-size: 18px;
      font-weight: 200;
      @media (max-width: 560px) {
        font-size: 14px;
      }
    }
  }
  .collegeName {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .leftSide {
      display: flex;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
      h3 {
        @media (max-width: 560px) {
          font-size: 14px;
        }
      }
    }

    .rightSide {
      p {
        font-size: 18px;
        @media (max-width: 560px) {
          font-size: 14px;
        }
      }
    }
  }
`;

const Experiences = styled.div`
  /* border-bottom: 1px solid black; */
  padding: 10px 0;
  .horizontal {
    border-color: #585858;
    margin-top: 10px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 400;
  color: #ffffff;
  @media (max-width: 560px) {
    font-size: 18px;
  }
`;

const Description = styled.h3`
  margin-top: 10px;
  font-size: 22px;
  font-weight: 400;
  @media (max-width: 560px) {
    font-size: 18px;
  }
`;

const Work = styled.div`
  padding: 10px 0;

  h6 {
    font-size: 20px;
    font-weight: 200;
    @media (max-width: 560px) {
      font-size: 16px;
    }
  }
  h5 {
    font-weight: 400;
    @media (max-width: 560px) {
      font-size: 20px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;

    h4 {
      font-weight: 200;
      font-size: 18px;
      @media (max-width: 560px) {
        font-size: 14px;
      }
    }
  }

  ul {
    /* list-style-type: circle; */
    margin-top: 10px;
    li {
      /* list-style-type: circle; */
      font-size: 18px;
      padding: 5px 0;
      @media (max-width: 560px) {
        font-size: 16px;
      }
    }
  }
`;

export default ResumePage;
