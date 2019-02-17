import os
import logging
from flask import Flask, render_template
app = Flask(__name__)

# Basic logging setup
logger = logging.getLogger(__name__)
logging.basicConfig()
logger.setLevel(logging.INFO)

# Random route. POST isn't used here, but if you were sending data back to the server, that's how you would do it
@app.route('/clickme', methods=['GET', 'POST'])
def test():
    # If breadcrumb.txt doesn't exist already
    if not os.path.exists('breadcrumb.txt'):
        # Create file breadcrumb.txt and open it for writing
        with open('breadcrumb.txt', 'w+') as f:
            # Write to file
            f.write('Gotcha...\n!\n')
    # If it does exist
    else:
        # Open breadcrumb.txt for reading
        with open('breadcrumb.txt', 'r') as f:
            # Read from file
            contents = f.read()
            # Log contents of file to stdout in terminal
            logger.info('Looks like someone dropped some crumbs on the backend...\n%s', contents)
        # The server returns a blank page with an h1 header
        return "<h1>Nothing to see here on the frontend!<h1>"

# / is the root/homepage
@app.route('/')
def index():
    # templates/index.html
    return render_template('index.html')

if __name__ == '__main__':
    # Starts the server
    app.run()
