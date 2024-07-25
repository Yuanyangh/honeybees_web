$(document).ready(function () {
  function getQuizMindReader () {
    const quiz_user = JSON.parse(localStorage.getItem('quiz_user'));
    const payload = {
      first_name: quiz_user?.first_name,
      last_name: quiz_user?.last_name,
      mobile: quiz_user?.mobile,
      email: quiz_user?.email,
      quizAnswer: []
    };
    for ( i = 1; i <=20; i ++) {
      payload.quizAnswer.push(localStorage.getItem(i));
    }


    const apiEndpoint = 'https://honeybees-crm.com/api/websiteQuizMindReaderPost';

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(result => {
      localStorage.setItem('quiz_result', JSON.stringify(result));
      // Redirect to another page
      window.location.assign("./result.html");
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }
  
  getQuizMindReader();
  
});
