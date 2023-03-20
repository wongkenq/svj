const features = document.querySelectorAll('.features-right > span');
const featuresP = document.querySelectorAll('.features-right > span > p');
const featuresImg = document.querySelector('.features-image > img');

features.forEach((span) => span.addEventListener('click', displayFeatures));

function displayFeatures(e) {
  if (e.target.nodeName === 'P') {
    return;
  } else if (e.target.classList.value === 'features-items') {
    featuresP.forEach((p) => p.classList.add('hidden'));
    e.target.querySelector('p').classList.remove('hidden');
  } else if (e.target.parentNode.classList.value === 'features-items') {
    featuresP.forEach((p) => p.classList.add('hidden'));
    e.target.nextElementSibling.classList.remove('hidden');
  }

  console.log(e.target.innerText.split('\n'));

  switch (e.target.innerText.split('\n')[0]) {
    case 'HEALTH EDUCATION':
      featuresImg.src = '/images/CC2A2123.jpg';
      break;
    case 'GRIT DEVELOPMENT':
      featuresImg.src = '/images/iStock-185154351.jpg';
      break;
    case 'SELF DEFENSE':
      featuresImg.src = '/images/CC2A2132-1.jpg';
      break;
    case 'COMPETITION':
      featuresImg.src = '/images/CompetitionStickFigures.jpg';
      break;
    case 'COMMUNITY':
      featuresImg.src = '/images/CommunityStickFigures2.jpg';
      break;
    case 'TRADITION':
      featuresImg.src = '/images/EPSViewer__1544511098286.jpg';
      break;
    case 'TECHNOLOGY':
      featuresImg.src = '/images/ipad-2.jpg';
      break;
    default:
      break;
  }
}
