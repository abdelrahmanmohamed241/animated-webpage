document.addEventListener('DOMContentLoaded', function() {
    const sections = Array.from(document.querySelectorAll('section'));
    const navbar = document.getElementById('navbar');
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');
  
    
    sections.forEach(function(section) {
      const title = section.querySelector('h2').textContent;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + section.id;
      a.textContent = title;
      li.appendChild(a);
      navbar.appendChild(li);
    });
  
    navbar.addEventListener('click', function(event) {
      event.preventDefault();
      const target = event.target;
      if (target.tagName === 'A') {
        const sectionId = target.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
 
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const commentInput= document.getElementById('comment');
  
      
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || commentInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      if (!emailInput.value.includes('@')) {
        alert('Please enter a valid email address.');
        return;
      }
  
      
      const li = document.createElement('li');
      const comment = document.createElement('div');
      comment.className = 'comment';
      const commentName = document.createElement('span');
      commentName.className = 'comment-name';
      commentName.textContent = nameInput.value;
      const commentEmail = document.createElement('span');
      commentEmail.className = 'comment-email';
      commentEmail.textContent = emailInput.value;
      const commentContent = document.createElement('p');
      commentContent.className = 'comment-content';
      commentContent.textContent = commentInput.value;
      comment.appendChild(commentName);
      comment.appendChild(commentEmail);
      comment.appendChild(commentContent);
      li.appendChild(comment);
      commentsList.appendChild(li);
  
      nameInput.value = '';
      emailInput.value = '';
      commentInput.value = '';
    });
  });