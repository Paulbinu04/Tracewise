from flask import Flask, request, jsonify
import json
from openai import OpenAI
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Get the API key securely
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Setup OpenAI client
client = OpenAI(api_key=OPENAI_API_KEY)

def generate_traceability_analysis(requirements, newRequirements, testcases):
    system_prompt = """
You are an AI Test Case Management Assistant. Your job is to analyze changes between old and new software requirements,
compare them against the existing test cases, and categorize them as:
 New (missing),
 Updated (requirement changed),
 Obsolete (requirement removed or drastically changed).

Return a structured JSON object with test case suggestions and the reasoning.
"""

    user_prompt = f"""
Old Requirements:
{json.dumps(requirements, indent=2)}

New Requirements:
{json.dumps(newRequirements, indent=2)}

Test Cases:
{json.dumps(testcases, indent=2)}

Please analyze the differences and output suggestions in this format:

{{
  "new_test_cases": [
    {{ "suggested_title": "...", "linked_requirement": "...", "reason": "..." }}
  ],
  "updated_test_cases": [
    {{ "test_case_id": "...", "reason": "..." }}
  ],
  "obsolete_test_cases": [
    {{ "test_case_id": "...", "reason": "..." }}
  ]
}}
"""

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ],
        temperature=0.3
    )

    output = response.choices[0].message.content
    return json.loads(output)

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.get_json()
        requirements = data.get('requirements', [])
        newRequirements = data.get('newRequirements', [])
        testcases = data.get('testcases', [])

        results = generate_traceability_analysis(requirements, newRequirements, testcases)

        return jsonify({"status": "success", "results": results}), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
