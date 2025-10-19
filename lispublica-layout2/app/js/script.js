      document.querySelector('.js-theme-toggle').onclick = function() {
        const body = document.body;
        if (body.getAttribute('data-theme') === 'dark') {
          body.setAttribute('data-theme', 'light');
        } else {
          body.setAttribute('data-theme', 'dark');
        }
      };