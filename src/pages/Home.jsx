import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import reactLogo from '/react.svg';
import {
  CheckIcon,
  ArrowRightIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
  AlertIcon,
} from "../components/Icons";
import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';
import Button, { ButtonGroup } from "../components/Button";

const Container = styled.div`
  max-width: 960px;
  margin: auto;
  font-family: 'Pretendard', sans-serif;
  background-color: #f9f9fb;
  color: #222;
`;

const Section = styled.section`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border-left: 5px solid #6366f1;
  padding-left: 0.75rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
`;

const inputStyles = css`
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: #fff;

  &:focus {
    border-color: #6366f1;
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
  }
`;

const Input = styled.input`${inputStyles}`;

const Select = styled.select`
  ${inputStyles}
  appearance:none;
  background-image:url('/ic_arr_down.png');
  background-repeat:no-repeat;
  background-size:14px;
  background-position:calc(100% - 15px) center;
`;

const Textarea = styled.textarea`
  ${inputStyles}
  resize: vertical;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  input {
    margin-right: 0.5rem;
  }

  label {
    margin: 0;
  }
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid #e5e7eb;
`;

const TabButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})`
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  background: none;
  border: none;
  border-bottom: 3px solid ${({ active }) => (active ? '#6366f1' : 'transparent')};
  color: ${({ active }) => (active ? '#111' : '#666')};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #111;
    background: #f3f4f6;
  }
`;

const TabPanel = styled.div`
  padding: 1rem;
  background-color: #f8fafc;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

const AccordionButton = styled.button`
  width: calc(100% - 2rem);
  padding: 1rem;
  text-align: left;
  background: #e5e7eb;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: #d1d5db;
  }
`;

const AccordionPanel = styled.div`
  padding: 1rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 320px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1rem;
`;

const StyledDatePicker = styled(DatePicker)`
  ${inputStyles}
`;

const StyledIcons = styled.div`
  margin-top:10px;
  display:flex;
  gap:12px;
`;

const chartData = [
  { name: '1월', value: 400 },
  { name: '2월', value: 300 },
  { name: '3월', value: 500 },
];

function Home() {
  useEffect(() => {
    document.title = "홈 | MySite";
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <h1>
        <img src={reactLogo} className="logo react" alt="react logo" /> guide
      </h1>

      <StyledIcons>
        <p>icons</p>
        <CheckIcon />
        <ArrowRightIcon />
        <CloseIcon />
        <MenuIcon />
        <SearchIcon />
        <HeartIcon />
        <UserIcon />
        <AlertIcon />
      </StyledIcons>

      <Section>
        <Title>폼 요소</Title>
        <form>
          <Label htmlFor="name">이름</Label>
          <Input id="name" name="name" type="text" required />

          <Label htmlFor="email">이메일</Label>
          <Input id="email" name="email" type="email" required />

          <Label htmlFor="password">비밀번호</Label>
          <Input id="password" name="password" type="password" required />

          <Label htmlFor="gender">성별</Label>
          <Select id="gender" name="gender">
            <option value="">선택하세요</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
          </Select>

          <CheckboxContainer>
            <input
              id="agree"
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <Label htmlFor="agree">약관에 동의합니다</Label>
          </CheckboxContainer>

          <Label htmlFor="message">메시지</Label>
          <Textarea id="message" name="message" rows="4" />

          <Button type="submit">제출</Button>
        </form>
      </Section>

      <Section>
        <Title>탭</Title>
        <TabList role="tablist">
          {['탭 1', '탭 2'].map((tab, index) => (
            <TabButton
              key={index}
              role="tab"
              id={`tab-${index}`}
              aria-selected={tabIndex === index}
              aria-controls={`panel-${index}`}
              active={tabIndex === index}
              onClick={() => setTabIndex(index)}
            >
              {tab}
            </TabButton>
          ))}
        </TabList>
        {[0, 1].map((i) => (
          <TabPanel
            key={i}
            role="tabpanel"
            id={`panel-${i}`}
            aria-labelledby={`tab-${i}`}
            hidden={tabIndex !== i}
          >
            {`탭 ${i + 1}의 내용입니다.`}
          </TabPanel>
        ))}
      </Section>

      <Section>
        <Title>아코디언</Title>
        <AccordionButton
          aria-expanded={accordionOpen}
          aria-controls="accordion-panel"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          아코디언 열기/닫기
        </AccordionButton>
        {accordionOpen && (
          <AccordionPanel
            id="accordion-panel"
            role="region"
            aria-labelledby="accordion-button"
          >
            아코디언 패널의 내용입니다.
          </AccordionPanel>
        )}
      </Section>

      <Section>
        <Title>날짜 선택기</Title>
        <Label htmlFor="date">날짜 선택</Label>
        <StyledDatePicker
          id="date"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          aria-label="날짜 선택"
          placeholderText="날짜를 선택하세요"
        />
      </Section>

      <Section>
        <Title>차트</Title>
        <ChartWrapper role="img" aria-label="월별 매출 그래프">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </Section>

      <div style={{ padding: '2rem 0' }}>
        <Button size="LG" variant="primary" onClick={() => setIsOpen(true)}>모달 열기</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="접근성 모달">
          <p>styled-components 모달</p>
        </Modal>
      </div>

      <ButtonGroup>
        <Button size="LG" variant="primary">Primary</Button>
        <Button size="MD" variant="secondary">Secondary</Button>
        <Button size="SM" variant="cancel" loading>cancel</Button>
      </ButtonGroup>
    </Container>
  );
}

export default Home;