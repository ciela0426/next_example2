// 요청 시 보낼 데이터의 타입
interface RequestData {
  method: 'GET' | 'POST';
}

// 응답 데이터의 타입
interface ResponseData {
  status: any;
}

export default function handler(req: RequestData, res: ResponseData) {
  if (req.method == 'GET'){
    res.status(200).json({ name: '안녕' })
  }
  if (req.method == 'POST'){
    res.status(200).json({ name: '바보' })
  }
}