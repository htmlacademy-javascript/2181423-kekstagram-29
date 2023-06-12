function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function checkPalindrome(string) {
  const normalizedString = string.toLowerCase().replace(/[^a-zа-яё0-9]/g, ''); // нормализуем строку: приводим к нижнему регистру и удаляем все неалфавитно-цифровые символы
  const reversedString = normalizedString.split('').reverse().join(''); // разворачиваем строку
  return normalizedString === reversedString;
}


