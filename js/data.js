function generateComment() {
  const comments = [
    'Все отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

  const avatars = [
    'img/avatar-1.svg',
    'img/avatar-2.svg',
    'img/avatar-3.svg',
    'img/avatar-4.svg',
    'img/avatar-5.svg',
    'img/avatar-6.svg',
  ];

  const randomCommentIndex = getRandomNumber(0, comments.length - 1);
  const randomAvatarIndex = getRandomNumber(0, avatars.length - 1);

  return {
    id: getRandomNumber(1, 1000),
    avatar: avatars[randomAvatarIndex],
    message: comments[randomCommentIndex],
    name: generateRandomName()
  };
}


function generateRandomName() {
  const names = ['Алексей', 'Мария', 'Иван', 'Екатерина', 'Дмитрий', 'Анна'];
  const randomIndex = getRandomNumber(0, names.length - 1);
  return names[randomIndex];
}

function generatePhotoArray() {
const photos = [];
const numberOfPhotos = 25;

  for (let i = 1; i <= numberOfPhotos; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии ${i}`,
      likes: getRandomNumber(15,200),
      comments: []
    };

    const numberOfComments = getRandomNumber(0,30);
    for (let j = 0; j < numberOfComments; j++) {
      const comment = generateComment();
      photo.comments.push(comment);
    }

    photos.push(photo);
  }

    return photos;
}

const photosArray = generatePhotoArray();
console.log(photosArray);
