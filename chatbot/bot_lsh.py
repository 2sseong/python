# from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, CallbackContext
import talk_lsh as tk
import gemini
import os
from dotenv import load_dotenv
load_dotenv()  # 환경 변수 로드
TOKEN=os.getenv('TELEGRAMTOKEN')
# TRIGGER_WORDS = {
#    '안녕':'안녕 {user_name}아 나는 도라에몽이야.😺',
#    '정보':'{user_name}아 어떤 정보가 필요해?',
#    '기분':'{user_name}아 나는 기분이 좋아',
#    '뭐':'😿',
#    '🐭':'🙀'
# }

async def start(update, context):
    await update.message.reply_text(f'안녕! 나는 도라에몽이야!.')

async def send_photo(update, context):
    photo_url = "https://i.namu.wiki/i/xBUzp9P4DLEDottRnlWmRBGiwe3IKTRUZxvr9RaUKCqfHoa_W_6-keNLfNmoji_qWBi_pnGU8Hr-BwKeOK91sw.webp"
    await update.message.reply_photo(photo=photo_url,caption="")
    
async def monitor_chat(update, context):  #사용자 채팅을 감지하고 응답하는 함수
    user = update.message.from_user         #이름확인
    user_name = user.first_name             #이름확인
    user_text = update.message.text    # 감지된 메세지들
    chat_id = update.message.chat_id   # 메세지가 온 채팅방

    if "올라프" in user_text:
        res =gemini.aiai(user_text.replace("올라프",""))
        await context.bot.send_message(chat_id=chat_id,text=res)
    # elif "영화정보" in user_text:
        # await 영화정보크롤링 함수를 실행
    elif "나 공부 잘하는듯" in user_text:
        await send_photo(update,context)
    else:
        for key,res in tk.TRIGGER_WORDS.items():
         if key in user_text:
             response_text = res.format(user_name=user_name)
             await context.bot.send_message(chat_id=chat_id,text=response_text)
             break #한개의 키워드에만 반응


def main():
    app = Application.builder().token(TOKEN).build()


    # 명령어 핸들러 추가
    app.add_handler(CommandHandler('start',start))

    # 응답 핸들러 추가
    app.add_handler(MessageHandler(filters.TEXT &~filters.COMMAND,monitor_chat))    # ~filters. 명령어는 안하도록 설정
    print("텔레그램 봇이 실행중입니다. 모니터링중...")
    app.run_polling()


if __name__ =='__main__':
    main()
