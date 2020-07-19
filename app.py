from flask import Flask, jsonify, request, render_template
from flask_sqlalchemy import SQLAlchemy
import datetime
import os

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/cv")
def cv():
    return render_template("cv.html")


@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")


if __name__ == "__main__":
    app.run(debug=True)
