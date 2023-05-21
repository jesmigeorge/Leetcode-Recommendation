from flask import Flask, jsonify
from flask import request
from flask_cors import CORS
import openai
from config import API_KEY


app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'Hello, Flask!'

def myResponse(value,difficulty):
    openai.api_key = API_KEY
    prompt = '''leetcode questions of '''+value+''' with 
    the links to those questions of '''+difficulty+''' level.
    Only respond with question title and link in table 
    format.No text or explanation.'''
    
    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": prompt}
    ])
    
    s = response["choices"][0]["message"]["content"]  # type: ignore
    lst = s.split("\n")[2:]
    qlist = []
    for ele in lst:
        ele = ele.strip('|').split("|")
        qlist.append(ele)
    return qlist



@app.route('/api', methods=['POST','GET'])
def getApi():
    # for POST request
    print('i just got here')
    if request.content_type != 'application/json':
        return jsonify({'error': 'Invalid request: Expected JSON data', 'status_code': 415}), 415
    print('i just got here2')
    data = request.get_json()
    print("hey im printed",data)
    value = data['value']
    difficulty = data['level']
    response = jsonify(myResponse(value,difficulty))
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    return response

    # to try GET request
    # response = jsonify({"message": ["message1", "message2","message3"]})
    # if not request.is_json:
    #     return jsonify({'error': 'Invalid request: Expected JSON data'}), 415
    
    

if __name__ == '__main__':
    app.run(debug = True)
