import styled from "styled-components";
import { Button } from "../styles/Button";

const Contact = () => {
  return (<Wrapper>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6662.095210842395!2d76.6978135993355!3d30.700524610024676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shi!2sin!4v1705902674974!5m2!1shi!2sin" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
    <div className="contact-form">
      <form 
       className="contact-inputs"
       action="https://formspree.io/f/mleqjeyb" 
       method="POST">

        <input type="text"
        name="username"
        placeholder="Enter your name"
        required 
        autoComplete="off" />
        <input type="email"
        name="email"
        placeholder="Enter your email"
        required 
        autoComplete="off" />
        <textarea name="msg"
         cols="30" rows="10"
         required
         placeholder="write message"></textarea>
       <input type="submit" value="send" />
      </form>
    </div>
    </div>
  </Wrapper>
  );
};

const Wrapper = styled.section`
    padding: 5rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 5rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          input{
            padding:1rem;
          }

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            padding:1rem 0;
            width:10rem;
            font-size:1.5rem;
            margin:10px auto;


            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
