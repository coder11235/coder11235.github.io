var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/coder11235/coder11235.github.io.git', // Update to point to your repository  
        user: {
            name: 'coder11235', // update to use your name
            email: 'udaykalyansreenivasa@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)