import React, { useState } from 'react';
import {
  Overlay,
  WriteModalContainer,
  InputLabel,
  ContentBox,
  PostButton,
  Global,
} from './ModalStyle';
import { createGlobalStyle } from 'styled-components';

const WriteModal = ({ setWritingVisible }) => {
  const reader = new FileReader();

  const [sumnailName, setSumnailName] = useState();
  const [sumnailFile, setSumnailFile] = useState();
  const [sumnail, setSumnail] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [date, SetDate] = useState();

  const dateLimit = e => {
    const today = new Date();
    console.log(today);
    console.log(e.target.value);
    SetDate(e.target.value);
  };
  const readImg = e => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      setSumnail(e.target.result);
    };
  };

  return (
    <div>
      <Global />
      <Overlay
        onClick={e => {
          setWritingVisible(false);
          console.log('a');
        }}
      />
      <WriteModalContainer sumnail={sumnail} bg="#A48FE0">
        <InputLabel
          className="sumnail"
          type="file"
          files={sumnailFile}
          value={sumnailName}
          onChange={e => {
            setSumnailName(e.target.value);
            setSumnailFile(e.target.files[0]);
            readImg(e);
          }}
        />
        <InputLabel
          className="title"
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <ContentBox
          className="content"
          placeholder="내용"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <InputLabel className="map" placeholder="title" />
        <InputLabel
          className="time"
          type="date"
          placeholder="시간"
          value={date}
          onChange={dateLimit}
        />
        <InputLabel className="Personnel" placeholder="인원" />
        <InputLabel className="tag" placeholder="태그" />
        <PostButton className="button">게시하기</PostButton>
      </WriteModalContainer>
    </div>
  );
};
export default WriteModal;
