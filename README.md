# Disease Prediction Chatbot

This project is a web-based disease prediction chatbot built using Flask, which uses machine learning models to predict potential diseases based on user-provided symptoms. The frontend is created using HTML, CSS, and JavaScript for an interactive user experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Dataset](#dataset)
- [Machine Learning Models](#machine-learning-models)


## Introduction

This project aims to provide a simple and interactive way for users to input their symptoms and get a prediction of potential diseases. It uses multiple machine learning models to ensure accurate predictions and combines their results to improve reliability.

## Features

- User-friendly interface for inputting symptoms
- Uses SVM, Naive Bayes, and Random Forest classifiers for predictions
- Displays the predicted disease based on user symptoms
- Maintains chat history for each session

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Machine Learning**: Scikit-learn, Pandas, Numpy
- **Visualization**: Matplotlib, Seaborn

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/disease-prediction-chatbot.git
    cd disease-prediction-chatbot
    ```

2. Create and activate a virtual environment:
    ```sh
    python3 -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

4. Run the Flask application:
    ```sh
    python app.py
    ```

5. Open your browser and navigate to `http://127.0.0.1:5000/` to use the application.

## Usage

- Enter your symptoms in the input field provided and submit.
- The chatbot will predict the potential disease based on the symptoms and display the result.
- Chat history is maintained for each session to keep track of user inputs and predictions.

## Dataset

The training dataset used for building the machine learning models is `Training.csv` and the testing dataset is `Testing.csv`. These files contain symptoms and their corresponding diseases.

## Machine Learning Models

Three classifiers are used for prediction:
- Support Vector Machine (SVM)
- Naive Bayes
- Random Forest

Each model is trained on the provided dataset and their predictions are combined to improve accuracy.


