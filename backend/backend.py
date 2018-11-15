## START File !!
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors inmore CORS

app = Flask(__name__)
CORS(app)

if __name__ == '__main__':
	app.secret_key = "mysecret"
	app.run(debug=True)