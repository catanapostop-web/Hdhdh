export default {
  async fetch(request) {
    // 1. Берем URL из запроса, который пришел на ваш домен
    const url = new URL(request.url);
    
    // 2. Подменяем домен на адрес вашей песочницы Daytona
    // ВАЖНО: замените ссылку ниже на вашу реальную ссылку из Daytona
    url.hostname = "3000-2ff0c4fe-1e05-477f-a3fc-d3545533db3a.daytonaproxy01.eu";

    // 3. Создаем новый запрос, копируя метод, тело и заголовки
    const newRequest = new Request(url, request);

    // 4. ДОБАВЛЯЕМ ГЛАВНЫЙ ЗАГОЛОВОК
    newRequest.headers.set("X-Daytona-Skip-Preview-Warning", "true");

    // 5. Отправляем запрос в Daytona и возвращаем ответ пользователю
    return fetch(newRequest);
  },
};
