import { useState } from 'react';
import styled  from 'styled-components';


const Login = () => {
    const [loginDetails,setLoginDetais]=useState({
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        setLoginDetais({...loginDetails,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(loginDetails)
    }
    return(
        <Container>
            <Nav>
                <a href = "/">
                    <img src = "/images/linkedin.png"  alt=''/>
                </a>
                <div>
                    <join>Join Now</join>
                </div>
            </Nav>
        </Container>
    );
};


const Container = styled.div`
  padding: 0px;

`;

const Nav = styled.nav`
  max-width: 112px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-item: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;


& > a {
    width: 135px;
    heigth: 34px;
    @media (max-width: 768px) {
        padding: 0 5px;

    }
}
`;

const join = styled.a`
    font-size: 16px;
    padding:10px 12px;
    text-decoration:none;
    color: rgba(0,0,0,0.06);
    margin-right: 12px;
    border-radius: 4px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.09);
        text-decoration: none;
    }
`;

export default Login;

