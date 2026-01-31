from flask import Blueprint, render_template

main = Blueprint("main", __name__)

@main.route("/")
def home():
    return render_template("index.html")

@main.route("/chat")
def chat():
    return render_template("chat.html")

@main.route("/api/chat", methods=["POST"])
def chat_api():
    user_message = request.json.get("message")

    # dummy AI response (replace later)
    ai_response = f"Received: {user_message}"

    return jsonify({"response": ai_response})