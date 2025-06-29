import { useState } from 'react';
import styled from '@emotion/styled';
import colors from '../styles/color';
import fonts from '../styles/font';

interface VoteOption {
    id: string;
    text: string;
}

interface VoteProps {
    options: VoteOption[];
    onSubmit: (selectedOption: string | null) => void;
}

const Vote = ({ options, onSubmit }: VoteProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <VoteContainer>
            <VoteSection>
                <SectionTitle>투표하러 가기</SectionTitle>
                <OptionList>
                    {options.map((option) => (
                        <OptionItem
                            key={option.id}
                            isSelected={selectedOption === option.id}
                            onClick={() => setSelectedOption(option.id)}
                        >
                            <RadioButton isSelected={selectedOption === option.id} />
                            <OptionText>{option.text}</OptionText>
                            <ArrowIcon>⟩</ArrowIcon>
                        </OptionItem>
                    ))}
                </OptionList>
            </VoteSection>

            <SubmitButton onClick={() => onSubmit(selectedOption)}>제출</SubmitButton>
        </VoteContainer>
    );
};

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const VoteSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${colors.secondary};
  padding: 32px;
  border-radius: 16px;

  @media (max-width: 768px) {
    padding: 24px 16px;
    gap: 16px;
  }
`;

const SectionTitle = styled.h2`
  ${fonts.H1}
  margin: 0;
  color: ${colors.black};

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const OptionItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  background-color: ${colors.white};
  border: 1px solid
    ${(props) => (props.isSelected ? colors.primary : '#E5E7EB')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const RadioButton = styled.div<{ isSelected: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid
    ${(props) => (props.isSelected ? colors.primary : '#D1D5DB')};
  margin-right: 16px;
  position: relative;
  transition: all 0.2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) =>
    props.isSelected ? colors.primary : 'transparent'};
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 12px;

    &::after {
      width: 10px;
      height: 10px;
    }
  }
`;

const OptionText = styled.span`
  ${fonts.H2}
  flex: 1;
  color: ${colors.black};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ArrowIcon = styled.span`
  ${fonts.H3}
  color: ${colors.gray};
  margin-left: 16px;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 768px) {
    margin-left: 12px;
    font-size: 0.75rem;
  }
`;

const SubmitButton = styled.button`
  ${fonts.btn}
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #4f46e5;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 0.875rem;
  }
`;

export default Vote;