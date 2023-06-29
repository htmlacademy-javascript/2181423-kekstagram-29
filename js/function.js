function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function checkPalindrome(string) {
  const normalizedString = string.toLowerCase().replace(/[^a-zа-яё0-9]/g, ''); // нормализуем строку: приводим к нижнему регистру и удаляем все неалфавитно-цифровые символы
  const reversedString = normalizedString.split('').reverse().join(''); // разворачиваем строку
  return normalizedString === reversedString;
}

function isMeetingWithinWorkingHours(startTime, endTime, meetingStart, meetingDuration) {
  // Преобразование времени начала и конца рабочего дня в минуты
  const startMinutes = convertToMinutes(startTime);
  const endMinutes = convertToMinutes(endTime);

  // Преобразование времени старта встречи и продолжительности встречи в минуты
  const meetingStartMinutes = convertToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  // Проверка, находится ли время старта и окончания встречи в пределах рабочего дня
  return meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes;
}

function convertToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

