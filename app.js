const express = require('express');
const session = require('express-session');
const axios = require('axios');
const config = require('./config');

const app = express();

const API_KEY = config.API_KEY;

const API_URL = 'http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList';

// API 호출 함수
async function getDrugInfo(itemName) {
    try {
      const response = await axios.get(API_URL, {
        params: {
          serviceKey: API_KEY,
          itemName: itemName,
          type: 'json'
        }
      });
  
      // API 응답 데이터 출력
      const data = response.data;
      console.log(JSON.stringify(data, null, 2));
  
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
    }
  }
  
  // 예제 호출
  getDrugInfo('타이레놀');