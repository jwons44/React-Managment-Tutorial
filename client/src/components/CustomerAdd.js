import React, { useState } from 'react';
import axios from 'axios';

function CustomerAdd() {
  const [customer, setCustomer] = useState({
    file: null,
    userName: '',
    birthday: '',
    gender: '',
    job: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addCustomer().then((res) => {
      console.log(res.data);
      // 추가 완료 후 입력 필드 초기화
      setCustomer({
        file: null,
        userName: '',
        birthday: '',
        gender: '',
        job: '',
      });
    });
  };

  const handleFileChange = (e) => {
    setCustomer({
      ...customer,
      file: e.target.files[0],
    });
  };

  const handleValueChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const addCustomer = () => {
    const url = '/api/customers';
    const formData = new FormData();
    formData.append('image', customer.file);
    formData.append('userName', customer.userName);
    formData.append('birthday', customer.birthday);
    formData.append('gender', customer.gender);
    formData.append('job', customer.job);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return axios.post(url, formData, config); // axios.post를 사용하여 POST 요청을 보냅니다.
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>고객 추가</h1>
      프로필 이미지 :{' '}
      <input type='file' name='file' onChange={handleFileChange} />
      <br />
      이름 :{' '}
      <input
        type='text'
        name='userName'
        value={customer.userName}
        onChange={handleValueChange}
      />
      <br />
      생년월일 :{' '}
      <input
        type='text'
        name='birthday'
        value={customer.birthday}
        onChange={handleValueChange}
      />
      <br />
      성별 :{' '}
      <input
        type='text'
        name='gender'
        value={customer.gender}
        onChange={handleValueChange}
      />
      <br />
      직업 :{' '}
      <input
        type='text'
        name='job'
        value={customer.job}
        onChange={handleValueChange}
      />
      <br />
      <button type='submit'>추가하기</button>
    </form>
  );
}

export default CustomerAdd;
