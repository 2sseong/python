from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, CallbackContext
TOKEN ='8095711197:AAGQ5tNVIr5iJXrytLiBz2wX39_Xc78pXq0'

async def start(update, context):
    user = update.message.from_user
    user_name = user.first_name
    await update.message.reply_text(f'안녕 {user_name}아')

TRIGGER_WORDS = {
    '안녕':'안녕 {user_name}',
    '정보':'{user_name}?',
    '기분':'{user_name}'
}

async def monitor_chat(update: Update, context):  #사용자 채팅을 감지하고 응답하는 함수
    user = update.message.from_user
    user_name = user.first_name
    user_text = update.message.text    # 감지된 메세지들
    chat_id = update.message.chat_id   # 메세지가 온 채팅방

    for key,res in TRIGGER_WORDS.items():
     if key in user_text:
         response_text = res.format(user_name=user_name)
         await context.bot.send_message(chat_id=chat_id,text=response_text)
         break #한개의 키워드에만 반응


def main():
    app = Application.builder().token(TOKEN).build()


    # 명령어 핸들러 추가
    app.add_handler(CommandHandler('start',start))

    # 응답 핸들러 추가
    app.add_handler(MessageHandler(filters.TEXT &~filters.COMMAND,monitor_chat))    # ~filters. 명령어는 >    print("텔레그램 봇이 실행중입니다. 모니터링중...")
    app.run_polling()


if __name__ =='__main__':
    main()
