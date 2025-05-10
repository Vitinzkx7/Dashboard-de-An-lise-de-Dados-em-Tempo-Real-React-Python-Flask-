from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data')
def data():
    return jsonify({'valor': 42})

if __name__ == '__main__':
    app.run(debug=True)
