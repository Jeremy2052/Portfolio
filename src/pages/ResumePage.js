import React from 'react'
import styled from 'styled-components'

function ResumePage() {
  return (
    <Container>
    <ResumeContainer>
      <Skills>
        <Title>Technical skills</Title>
        <Languages>
          <Description>Languages</Description>
          <SubContainer>
            <Left >
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
         
            <Right >
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
        <hr className='horizontal'/>
        <Frameworks>
        <Description>Frameworks</Description>
        <SubContainer>
          <Left>
            <LanguageSkill>
            <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" alt="" />
            <p className="lang">React</p>
            </LanguageSkill>
            <LanguageSkill>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU" alt="" />
            <p className="lang">React Native</p>
            </LanguageSkill>
          </Left>
          <Right >
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
        <hr className='horizontal'/>
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
          </Right>
          
          </SubContainer>
        </OtherSkills>
      </Skills>
      <hr className='horizontal2'/>
      <Education>
      <Title>Education</Title>
      {/* <Description>Course works:</Description> */}
        <div className="college">
          <div className="collegeName">
            <div className="leftSide">
              <img src="https://www.uta.edu/ucomm/identity/files/logo/UTA_A-logo_blue-orange-rgb.png" alt="" />
              <h3>University of Texas at Arlington</h3>
            </div>
            <div className="rightSide">
              <p>Expected Graduation: Dec 2021</p>
            </div>
            
          </div>
          <p>Bachelor of Science Computer Science</p>

          <div className="courses">

          </div>
        </div>
      </Education>
      <hr className='horizontal2'/>
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
        <hr className='horizontal'/>
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
  )
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
  -webkit-box-shadow: 0px 12px 26px 5px rgba(0,0,0,0.71); 
  box-shadow: 0px 12px 26px 5px rgba(0,0,0,0.71);
  background-color: #3a3939;

  
  .horizontal2{
    border-color: #c7c7c7;
  }
`;

const Skills = styled.div`
  margin-bottom: 10px;
  padding: 10px 0;
  /* border-bottom: 1px solid black; */
  .horizontal{
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
  height:100px;
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
  height:100px;
  width: 200px;
`;

const LanguageSkill = styled.div`
display: flex;
align-items: center;
margin-bottom: 5px;
  p{
    font-size: 20px;
    margin-left: 10px;
  }

  img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    /* object-fit: cover; */
  }
`;

const SubContainer = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  /* align-items: center; */
`;

const OtherSkills = styled.div`

`;

const Frameworks = styled.div`
  display: flex;
  flex-direction: column;
`;

const Education = styled.div`
  /* border-bottom: 1px solid black; */
  padding:10px 0;
  margin-bottom: 10px;

  .college{
    p{
      font-size: 18px;
      font-weight: 200;
    }
  }
  .collegeName{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .leftSide{
      display: flex;
      align-items: center;
      img{
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
    }

    .rightSide{

      p{
        font-size: 18px;
      }
      
    }
  }
`;

const Experiences = styled.div`
  /* border-bottom: 1px solid black; */
  padding:10px 0;
  .horizontal{
    border-color: #585858;
    
  }
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 400;
  color: #ffffff;
`;

const Description = styled.h3`
  margin-top: 10px;
`;

const Work = styled.div`
  padding: 10px 0;;
  

  h6{
    font-size: 20px;
    font-weight: 200;
  }
  h5{
    font-weight: 600;
  }

  .header{
    display: flex;
    justify-content: space-between;

    h4{
      font-weight: 200;
      font-size: 18px;
    }
  }

  ul{
    /* list-style-type: circle; */
    margin-top: 10px;
    li{
      /* list-style-type: circle; */
      font-size: 18px;
      padding: 5px 0;
    }
  }
`;

export default ResumePage
