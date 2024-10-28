import styled from 'styled-components';

export const ContactSection = styled.section`
  min-height: 50vh;
  background: ${({ theme }) => theme.background};
  padding: 5rem 2rem;
`;

export const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactHeader = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 3rem;
  width: 100%;
  position: relative;
  text-transform: uppercase;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }
`;

export const ContactInfo = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const IconWrapper = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.primary};
`;

export const InfoText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

export const SocialIcon = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
