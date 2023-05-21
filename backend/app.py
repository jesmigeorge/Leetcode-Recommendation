from flask import Flask, jsonify
from flask import request
from flask_cors import CORS
import openai,os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

def configure():
    load_dotenv()

@app.route('/')
def home():
    return 'Hello, Flask!'


@app.route('/members',methods = ['POST'])
def tryPost():
    print("Got post request")
    result = request.get_json()
    result.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    return "<p>{result}</p>"

def myResponse(value,difficulty):
    openai.api_key = os.getenv('api_key')
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
    # response = jsonify({"message": ["message1", "message2","message3"]})
    # if not request.is_json:
    #     return jsonify({'error': 'Invalid request: Expected JSON data'}), 415
    
    # value = request.json['value']
    # difficulty = request.json['level']
    print('i just got here')
    if request.content_type != 'application/json':
        return jsonify({'error': 'Invalid request: Expected JSON data', 'status_code': 415}), 415
    print('i just got here2')
    data = request.get_json()
    print("hey im printed",data)
    value = data['value']
    difficulty = data['level']
    configure() # to get the env variable : apikey
    response = jsonify(myResponse(value,difficulty))
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    return response
    
    

if __name__ == '__main__':
    app.run(debug = True)
