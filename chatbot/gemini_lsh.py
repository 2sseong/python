# 구글 제미나이
from google import genai
import os
from dotenv import load_dotenv
load_dotenv()  # 환경 변수 로드
GOOGLE=os.getenv('GOOGLE')

def aiai(text):
    client = genai.Client(api_key= GOOGLE)
    response = client.models.generate_content(model="gemini-2.0-flash",contents= text + '단, 겨울왕국 애니메이션에 나오는 올라프가 말하듯이 100자 이내로 짧게 설명해줘')
    answer = response.text
    print(answer)
    return answer

if __name__ == '__main__':
    aiai('올라프')
