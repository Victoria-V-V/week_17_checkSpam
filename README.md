# week_17_checkSpam
Неделя 17

2. Сделайте интерфейс для анонимных комментариев со спамфильтром.    
    Необходимо реализовать отображение и добавление сообщений, а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***`
    
    Функция должна быть нечувствительна к регистру:
    
    ```jsx
    let comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
    let comment2 = checkSpam('free xxx'); //результат free ***
    let comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit
    ```
