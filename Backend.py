IF YOU USING GOOGLE COLAB

# Install Libraries
!pip install pytesseract
!sudo apt-get install tesseract-ocr
!pip install numpy
!pip install opencv-python
!pip install nltk 
!pip install spacy 
!pip install pandas 
!pip install fuzzywuzzy 
!pip install flask-ngrok
!pip install pyngrok
!pip install --ignore-installed blinker
!pip install flask flask-cors pyngrok

#Import Libraries
import getpass
import os
import base64
import pandas as pd
import cv2
import pytesseract
from flask import Flask, request, jsonify
from pyngrok import ngrok, conf
from flask_cors import CORS
from fuzzywuzzy import fuzz, process

# Get ngrok authentication token - Using Flask to connect the local host
print("Enter your ngrok authtoken (copy from https://dashboard.ngrok.com/get-started/your-authtoken):")
conf.get_default().auth_token = getpass.getpass()
app = Flask(__name__)
CORS(app)
port = 5000

# Open a ngrok tunnel to the Flask server
public_url = ngrok.connect(port).public_url
print(f" * ngrok tunnel \"{public_url}\" -> \"http://127.0.0.1:{port}\"")
app.config["BASE_URL"] = public_url

# Load medicine data from CSV 
CSV_PATH = "/content/Medicine_Details.csv"
medicine_df = pd.read_csv(CSV_PATH)

# Data Cleaning
medicine_df = medicine_df.rename(columns=lambda x: x.strip())  
medicine_df = medicine_df.applymap(lambda x: x.strip().lower() if isinstance(x, str) else x) 

# Function to preprocess image for better OCR
def preprocess_image(image_path):
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    # OCR accuracy
    img = cv2.resize(img, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)
    # Apply Gaussian Blur to reduce noise
    img = cv2.GaussianBlur(img, (5, 5), 0)
    # Adaptive Thresholding for contrast improvement
    img = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2)
    return img
    
# Function to detect medicine name from image
def detect_medicine_from_image(image_path):
    try:
        # Preprocess the image
        img = preprocess_image(image_path)
        # Extract text using Tesseract OCR
        extracted_text = pytesseract.image_to_string(img).strip().lower()  
        print(f"OCR Extracted Text: {extracted_text}")
        # Get list of medicine names
        medicine_names = medicine_df["Medicine Name"].dropna().str.lower().tolist()
        # Fuzzy match with OCR text
        best_match, score = process.extractOne(extracted_text, medicine_names, scorer=fuzz.partial_ratio)
        print(f"Best Match: {best_match} | Score: {score}") 
        # Similarity Score 
        if score >= 60:
            details = medicine_df[medicine_df["Medicine Name"].str.lower() == best_match]
            if not details.empty:
                details_dict = details.iloc[0].to_dict() 
                return {
                    "medicine_name": best_match,
                    "details": {
                        "Composition": details_dict.get("Composition", "N/A"),
                        "Uses": details_dict.get("Uses", "N/A"),
                        "Side_effects": details_dict.get("Side_effects", "N/A"),
                        "Image_URL": details_dict.get("Image URL", "N/A"),
                        "Manufacturer": details_dict.get("Manufacturer", "N/A")
                    }
                }
        # Secondary search: Check for partial substring matches
        partial_match = [name for name in medicine_names if extracted_text in name]
        if partial_match:
            matched_name = partial_match[0]  
            details = medicine_df[medicine_df["Medicine Name"].str.lower() == matched_name]
            if not details.empty:
                details_dict = details.iloc[0].to_dict()
                return {
                    "medicine_name": matched_name,
                    "details": {
                        "Composition": details_dict.get("Composition", "N/A"),
                        "Uses": details_dict.get("Uses", "N/A"),
                        "Side_effects": details_dict.get("Side_effects", "N/A"),
                        "Image_URL": details_dict.get("Image URL", "N/A"),
                        "Manufacturer": details_dict.get("Manufacturer", "N/A")
                    }
                }
        return {"medicine_name": "Not Found", "details": "No matching medicine found."}
    except Exception as e:
        return {"error": str(e)}

# Flask Routes
@app.route('/upload', methods=['POST'])
def upload():
    try:
        # Get image data from the request
        data = request.json
        image_data = data.get("image")
        if not image_data:
            return jsonify({"error": "No image data provided"}), 400
        # Decode Base64 image
        img_data = base64.b64decode(image_data)
        # Save the image
        file_path = "/content/mas.jpg"
        with open(file_path, "wb") as f:
            f.write(img_data)
        # Detect medicine name
        medicine = detect_medicine_from_image(file_path)
        return jsonify({"message": "Success", "medicine": medicine})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run Flask app
if __name__ == "__main__":
    app.run()
