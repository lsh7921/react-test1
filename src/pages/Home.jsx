import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import reactLogo from '../assets/react.svg';
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
import Button from "../components/Button";
import { FaCheck } from "react-icons/fa";

/* Styled Components */
const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  font-family: sans-serif;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  ${Input}
`;

const Textarea = styled.textarea`
  ${Input}
  resize: vertical;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 1rem;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid #ccc;
`;

const TabButton = styled.button`
  padding: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  border-bottom: 2px solid ${({ active }) => (active ? '#000' : 'transparent')};
  &:focus {
    outline: 2px solid blue;
  }
`;

const TabPanel = styled.div`
  padding: 1rem;
`;

const AccordionButton = styled.button`
  width: 100%;
  padding: 1rem;
  text-align: left;
  background: #eee;
  border: none;
  cursor: pointer;
`;

const AccordionPanel = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

/* Sample Chart Data */
const chartData = [
  { name: '1월', value: 400 },
  { name: '2월', value: 300 },
  { name: '3월', value: 500 },
];

function Home(){  
  useEffect(() => {
    document.title = "홈 | MySite";
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [checked, setChecked] = useState(false);

  return(
    <Container>
      <h1><img src={reactLogo} className="logo react" alt="react logo" /> 홈 페이지</h1>        
      
      <div style={{ display: "flex", gap: "12px" }}>
        <p>icons</p>
        <CheckIcon />
        <ArrowRightIcon />
        <CloseIcon />
        <MenuIcon />
        <SearchIcon />
        <HeartIcon />
        <UserIcon />
        <AlertIcon />
      </div>
      
      {/* 폼 요소 */}
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

          <button type="submit">제출</button>
        </form>
      </Section>

      {/* 탭 */}
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

      {/* 아코디언 */}
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

      {/* 날짜 선택기 */}
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

      {/* 차트 */}
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

      <div style={{ padding: '2rem' }}>
        <button onClick={() => setIsOpen(true)}>모달 열기</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="접근성 모달">
          <p>styled-components 모달</p>
        </Modal>
      </div>

      <Button size="LG" onClick={() => alert("Clicked!")}>
        Large Button
      </Button>

      <Button size="MD" loading>
        Loading...
      </Button>

      <Button size="SM" disabled iconLeft={<FaCheck />}>
        Small Button
      </Button>
    </Container>
  )
}

export default Home;